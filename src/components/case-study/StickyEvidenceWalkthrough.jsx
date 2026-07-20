import { useEffect, useRef, useState } from 'react';
import AnnotatedMedia from './AnnotatedMedia.jsx';

const ENHANCED_QUERY =
  '(min-width: 1180px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)';

function useEnhancedWalkthrough(enabled) {
  const [isEnhanced, setIsEnhanced] = useState(() =>
    typeof window === 'undefined'
      ? false
      : enabled && window.matchMedia(ENHANCED_QUERY).matches,
  );

  useEffect(() => {
    if (!enabled) {
      setIsEnhanced(false);
      return undefined;
    }

    const mediaQuery = window.matchMedia(ENHANCED_QUERY);
    const handleChange = (event) => setIsEnhanced(event.matches);

    setIsEnhanced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enabled]);

  return isEnhanced;
}

function EvidenceStepMedia({
  step,
  className = '',
  clipMedia,
  frameClassName = '',
  imageClassName = '',
  presentation,
}) {
  return (
    <AnnotatedMedia
      alt={step.alt}
      annotations={step.annotations}
      aspectRatio={step.aspectRatio}
      className={className}
      clipMedia={clipMedia}
      frameClassName={frameClassName}
      imageClassName={imageClassName}
      media={step.media}
      placeholderLabel={step.placeholderLabel}
      presentation={presentation ?? step.presentation ?? 'dark'}
    />
  );
}

function EvidenceHeader({ heading, introduction }) {
  return (
    <header className="max-w-[40rem]">
      <h3 className="max-w-[28ch] text-xl leading-[1.15] font-medium sm:text-2xl">
        {heading}
      </h3>
      {introduction ? (
        <p className="mt-2 max-w-[40rem] text-sm leading-[1.55] text-neutral-600">
          {introduction}
        </p>
      ) : null}
    </header>
  );
}

function StackedEvidence({ heading, introduction, steps }) {
  return (
    <div>
      <EvidenceHeader heading={heading} introduction={introduction} />
      <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
        {steps.map((step, index) => (
          <article key={step.id}>
            <EvidenceStepMedia step={step} presentation="light" />
            <div className="mt-5 max-w-[40rem]">
              <p className="text-sm font-semibold text-[var(--project-accent)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h4 className="mt-2 text-2xl leading-tight font-medium text-neutral-950 sm:text-3xl">
                {step.title}
              </h4>
              <p className="mt-3 text-base leading-[1.7] text-neutral-600 sm:text-lg">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StepIndicator({ activeIndex, stepCount }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 flex-col items-center justify-between self-center"
    >
      <span className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-neutral-300" />
      <span
        className="absolute top-2 bottom-2 left-1/2 w-px origin-top -translate-x-1/2 bg-[var(--project-accent)]"
        style={{ transform: 'translateX(-50%) scaleY(var(--evidence-progress))' }}
      />
      {Array.from({ length: stepCount }, (_, index) => (
        <span
          key={index}
          className={`relative z-10 size-3 rounded-full border transition-colors duration-200 ${
            index === activeIndex
              ? 'border-[var(--project-accent)] bg-[var(--project-accent)]'
              : 'border-neutral-400 bg-neutral-50'
          }`}
        />
      ))}
    </div>
  );
}

export default function StickyEvidenceWalkthrough({
  heading,
  introduction,
  sectionHeightPerStep = 75,
  steps = [],
  stickyDesktop = true,
}) {
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isEnhanced = useEnhancedWalkthrough(stickyDesktop);

  useEffect(() => {
    if (!isEnhanced || steps.length < 2) return undefined;

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

      track.style.setProperty('--evidence-progress', progress);
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
      track.style.removeProperty('--evidence-progress');
    };
  }, [isEnhanced, steps.length]);

  if (!isEnhanced || steps.length < 2) {
    return (
      <StackedEvidence
        heading={heading}
        introduction={introduction}
        steps={steps}
      />
    );
  }

  const trackHeight = Math.max(
    150,
    steps.length * sectionHeightPerStep,
  );

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${trackHeight}svh`, '--evidence-progress': 0 }}
    >
      <div
        ref={stickyRef}
        className="sticky top-[calc(var(--site-header-height)+0.75rem)] h-[clamp(38.75rem,calc(100svh-var(--site-header-height)-1.5rem),53.75rem)]"
      >
        <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_8rem]">
          <div className="pb-2">
            <EvidenceHeader heading={heading} introduction={introduction} />
          </div>

          <div className="grid min-h-0 grid-cols-[minmax(0,1fr)_1.25rem] gap-3">
            <div className="relative min-h-0">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                const translateClass =
                  index < activeIndex ? '-translate-y-3' : 'translate-y-3';

                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 transition-[opacity,transform] duration-[240ms] ease-out ${
                      isActive
                        ? 'z-10 translate-y-0 opacity-100'
                        : `${translateClass} pointer-events-none opacity-0`
                    }`}
                  >
                    <EvidenceStepMedia
                      step={step}
                      className="size-full"
                      clipMedia={false}
                      frameClassName="size-full border-0"
                      imageClassName="scale-[1.04]"
                      presentation="bare"
                    />
                  </div>
                );
              })}
            </div>

            <StepIndicator
              activeIndex={activeIndex}
              stepCount={steps.length}
            />
          </div>

          <div className="relative max-w-[40rem]">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const translateClass =
                index < activeIndex ? '-translate-y-2' : 'translate-y-2';

              return (
                <div
                  key={step.id}
                  className={`absolute inset-x-0 top-2 bottom-0 transition-[opacity,transform] duration-[240ms] ease-out ${
                    isActive
                      ? 'translate-y-0 opacity-100'
                      : `${translateClass} pointer-events-none opacity-0`
                  }`}
                >
                  <p className="text-sm font-semibold text-[var(--project-accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h4 className="mt-1 text-2xl leading-tight font-medium text-neutral-950">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-base leading-[1.6] text-neutral-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
