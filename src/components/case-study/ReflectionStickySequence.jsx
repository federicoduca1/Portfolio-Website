import { useEffect, useRef, useState } from 'react';

const STICKY_QUERY =
  '(min-width: 960px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)';

const STICKY_VIEWPORT_HEIGHT =
  'clamp(34rem, calc(100svh - var(--site-header-height) - 2rem), 48rem)';

function useStickyReflection(enabled) {
  const [isSticky, setIsSticky] = useState(() =>
    typeof window === 'undefined'
      ? false
      : enabled && window.matchMedia(STICKY_QUERY).matches,
  );

  useEffect(() => {
    if (!enabled) {
      setIsSticky(false);
      return undefined;
    }

    const mediaQuery = window.matchMedia(STICKY_QUERY);
    const handleChange = (event) => setIsSticky(event.matches);

    setIsSticky(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enabled]);

  return isSticky;
}

function ReflectionStep({ step, className = '' }) {
  return (
    <article className={className}>
      <h3 className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
        {step.label}
      </h3>
      <p className="mt-5 max-w-[46rem] text-[clamp(1.35rem,2.25vw,2.15rem)] leading-[1.42] font-medium text-neutral-900">
        {step.body}
      </p>
      {step.decorativeText ? (
        <p
          aria-hidden="true"
          className="mt-8 text-[clamp(1.25rem,2.4vw,2.5rem)] leading-none font-medium tracking-[0.08em] text-neutral-300"
        >
          {step.decorativeText}
        </p>
      ) : null}
    </article>
  );
}

function ReflectionProgress({ activeIndex, stepCount }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-32 flex-col items-center justify-between self-center"
    >
      <span className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-neutral-300" />
      <span
        className="absolute top-2 bottom-2 left-1/2 w-px origin-top -translate-x-1/2 bg-[var(--project-accent)]"
        style={{
          transform:
            'translateX(-50%) scaleY(var(--reflection-progress))',
        }}
      />
      {Array.from({ length: stepCount }, (_, index) => (
        <span
          key={index}
          className={`relative z-10 size-2.5 rounded-full border transition-colors duration-300 ${
            index === activeIndex
              ? 'border-[var(--project-accent)] bg-[var(--project-accent)]'
              : 'border-neutral-400 bg-neutral-50'
          }`}
        />
      ))}
    </div>
  );
}

function StackedReflection({ steps, stopMarkerId }) {
  return (
    <div>
      <div className="space-y-16 sm:space-y-20">
        {steps.map((step) => (
          <ReflectionStep key={step.id} step={step} />
        ))}
      </div>
      {stopMarkerId ? (
        <span id={stopMarkerId} aria-hidden="true" className="block" />
      ) : null}
    </div>
  );
}

export default function ReflectionStickySequence({
  enabled = true,
  sectionHeightPerStep = 64,
  steps = [],
  stopMarkerId,
}) {
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isSticky = useStickyReflection(enabled);

  useEffect(() => {
    if (!isSticky || steps.length < 2) return undefined;

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

      track.style.setProperty('--reflection-progress', progress);
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
      track.style.removeProperty('--reflection-progress');
    };
  }, [isSticky, steps.length]);

  if (!isSticky || steps.length < 2) {
    return (
      <StackedReflection
        steps={steps}
        stopMarkerId={stopMarkerId}
      />
    );
  }

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{
        height: `calc(${STICKY_VIEWPORT_HEIGHT} + ${
          steps.length * sectionHeightPerStep
        }svh)`,
        '--reflection-progress': 0,
      }}
    >
      {stopMarkerId ? (
        <span
          id={stopMarkerId}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0"
          style={{
            bottom: STICKY_VIEWPORT_HEIGHT,
          }}
        />
      ) : null}
      <div
        ref={stickyRef}
        className="sticky top-[calc(var(--site-header-height)+0.25rem)]"
        style={{ height: STICKY_VIEWPORT_HEIGHT }}
      >
        <div className="grid h-full grid-cols-[minmax(0,1fr)_1rem] items-center gap-8 lg:gap-14">
          <div className="relative min-h-[24rem]">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const translateClass =
                index < activeIndex ? '-translate-y-3' : 'translate-y-3';

              return (
                <div
                  key={step.id}
                  className={`absolute inset-0 flex items-center transition-[opacity,transform] duration-[420ms] ease-out ${
                    isActive
                      ? 'z-10 opacity-100'
                      : `${translateClass} pointer-events-none opacity-0`
                  }`}
                >
                  <ReflectionStep step={step} />
                </div>
              );
            })}
          </div>

          <ReflectionProgress
            activeIndex={activeIndex}
            stepCount={steps.length}
          />
        </div>
      </div>
    </div>
  );
}
