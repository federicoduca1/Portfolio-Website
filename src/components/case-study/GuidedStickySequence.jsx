import { useEffect, useRef, useState } from 'react';
import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';

const GUIDED_QUERY =
  '(min-width: 1180px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)';

const STICKY_VIEWPORT_HEIGHT =
  'clamp(38rem, calc(100svh - var(--site-header-height) - 1.5rem), 50rem)';
const COMPACT_STICKY_VIEWPORT_HEIGHT =
  'clamp(34rem, calc(100svh - var(--site-header-height) - 4rem), 43rem)';

function useGuidedLayout(enabled) {
  const [isGuided, setIsGuided] = useState(() =>
    typeof window === 'undefined'
      ? false
      : enabled && window.matchMedia(GUIDED_QUERY).matches,
  );

  useEffect(() => {
    if (!enabled) {
      setIsGuided(false);
      return undefined;
    }

    const mediaQuery = window.matchMedia(GUIDED_QUERY);
    const handleChange = (event) => setIsGuided(event.matches);

    setIsGuided(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enabled]);

  return isGuided;
}

function StepCopy({ headingLevel = 3, index, step, tone = 'light' }) {
  const Heading = `h${headingLevel}`;
  const isDark = tone === 'dark';

  return (
    <div className="max-w-[27rem]">
      <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.13em] uppercase sm:text-sm">
        <span className="tabular-nums text-[var(--project-accent)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={isDark ? 'text-neutral-400' : 'text-neutral-500'}>
          {step.label}
        </span>
      </div>
      <Heading
        className={`mt-5 text-[clamp(1.75rem,3vw,3.25rem)] leading-[1.08] font-medium ${
          isDark ? 'text-neutral-50' : 'text-neutral-950'
        }`}
      >
        {step.title}
      </Heading>
      <p
        className={`mt-5 text-base leading-[1.7] sm:text-lg ${
          isDark ? 'text-neutral-300' : 'text-neutral-600'
        }`}
      >
        {step.description}
      </p>
    </div>
  );
}

function StepMedia({ fill = false, step, tone = 'light' }) {
  return (
    <CaseStudyMediaPlaceholder
      {...step.media}
      className={fill ? 'size-full' : 'w-full'}
      fill={fill}
      theme={step.media?.theme ?? (tone === 'dark' ? 'dark' : 'soft')}
    />
  );
}

function StackedSequence({
  compact = false,
  headingLevel,
  steps,
  tone = 'light',
}) {
  const isDark = tone === 'dark';

  return (
    <div className={compact ? 'space-y-10 sm:space-y-12' : 'space-y-14 sm:space-y-18'}>
      {steps.map((step, index) => (
        <article
          key={step.id}
          className={
            index > 0
              ? `border-t ${
                  compact ? 'pt-10 sm:pt-12' : 'pt-14 sm:pt-18'
                } ${
                  isDark ? 'border-white/15' : 'border-neutral-300'
                }`
              : ''
          }
        >
          <StepCopy
            headingLevel={headingLevel}
            index={index}
            step={step}
            tone={tone}
          />
          <div className="mt-8 w-full max-w-[32rem] sm:mt-10">
            <StepMedia step={step} tone={tone} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ProgressIndicator({ activeIndex, stepCount, tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 flex-col items-center justify-between self-center"
    >
      <span
        className={`absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 ${
          isDark ? 'bg-neutral-700' : 'bg-neutral-300'
        }`}
      />
      <span
        className="absolute top-2 bottom-2 left-1/2 w-px origin-top -translate-x-1/2 bg-[var(--project-accent)]"
        style={{ transform: 'translateX(-50%) scaleY(var(--guided-progress))' }}
      />
      {Array.from({ length: stepCount }, (_, index) => (
        <span
          key={index}
          className={`relative z-10 size-3 rounded-full border transition-colors duration-300 ${
            index === activeIndex
              ? 'border-[var(--project-accent)] bg-[var(--project-accent)]'
              : isDark
                ? 'border-neutral-500 bg-neutral-950'
                : 'border-neutral-400 bg-neutral-50'
          }`}
        />
      ))}
    </div>
  );
}

export default function GuidedStickySequence({
  enabled = true,
  headingLevel = 3,
  sectionHeightPerStep,
  steps = [],
  tone = 'light',
  variant = 'default',
}) {
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isGuided = useGuidedLayout(enabled);
  const isCompact = variant === 'compact';
  const stickyViewportHeight = isCompact
    ? COMPACT_STICKY_VIEWPORT_HEIGHT
    : STICKY_VIEWPORT_HEIGHT;
  const stepScrollHeight =
    sectionHeightPerStep ?? (isCompact ? 40 : 56);

  useEffect(() => {
    if (!isGuided || steps.length < 2) return undefined;

    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return undefined;

    let frameId = 0;

    const update = () => {
      frameId = 0;
      const bounds = track.getBoundingClientRect();
      const stickyTop = Number.parseFloat(getComputedStyle(sticky).top) || 0;
      const scrollRange = Math.max(track.offsetHeight - sticky.offsetHeight, 1);
      const progress = Math.min(
        1,
        Math.max(0, (stickyTop - bounds.top) / scrollRange),
      );

      track.style.setProperty('--guided-progress', progress);
      setActiveIndex((current) => {
        let next = current;
        const hysteresis = 0.025;

        while (
          next < steps.length - 1 &&
          progress >= (next + 1) / steps.length + hysteresis
        ) {
          next += 1;
        }
        while (
          next > 0 &&
          progress <= next / steps.length - hysteresis
        ) {
          next -= 1;
        }

        return next;
      });
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
      track.style.removeProperty('--guided-progress');
    };
  }, [isGuided, steps.length]);

  if (!isGuided || steps.length < 2) {
    return (
      <StackedSequence
        compact={isCompact}
        headingLevel={headingLevel}
        steps={steps}
        tone={tone}
      />
    );
  }

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{
        height: `calc(${stickyViewportHeight} + ${
          steps.length * stepScrollHeight
        }svh)`,
        '--guided-progress': 0,
      }}
    >
      <div
        ref={stickyRef}
        className="sticky top-[calc(var(--site-header-height)+0.75rem)]"
        style={{ height: stickyViewportHeight }}
      >
        <div className="grid h-full min-h-0 grid-cols-[minmax(0,1fr)_1rem] gap-8 xl:gap-12">
          <div className="relative min-h-0">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const translateClass =
                index < activeIndex ? '-translate-y-3' : 'translate-y-3';

              return (
                <article
                  key={step.id}
                  className={`absolute inset-0 grid min-h-0 grid-cols-[minmax(18rem,0.65fr)_minmax(0,1fr)] items-center gap-10 transition-[opacity,transform] duration-[380ms] ease-out xl:gap-16 ${
                    isActive
                      ? 'z-10 translate-y-0 opacity-100'
                      : `${translateClass} pointer-events-none opacity-0`
                  }`}
                >
                  <StepCopy
                    headingLevel={headingLevel}
                    index={index}
                    step={step}
                    tone={tone}
                  />
                  <div className="flex h-full min-h-0 items-center justify-center">
                    <div
                      className={
                        isCompact
                          ? 'h-[94%] min-h-[30rem] max-h-[41rem] aspect-[9/14]'
                          : 'h-[88%] min-h-[30rem] max-h-[43rem] aspect-[9/14]'
                      }
                    >
                      <StepMedia fill step={step} tone={tone} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <ProgressIndicator
            activeIndex={activeIndex}
            stepCount={steps.length}
            tone={tone}
          />
        </div>
      </div>
    </div>
  );
}
