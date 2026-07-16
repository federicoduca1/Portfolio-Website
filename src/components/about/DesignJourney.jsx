import { useLayoutEffect, useRef } from 'react';
import JourneyMilestone from './JourneyMilestone.jsx';

export default function DesignJourney({ content }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const revealItems = Array.from(
      section.querySelectorAll('[data-journey-reveal]'),
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (
      reducedMotion ||
      !('IntersectionObserver' in window) ||
      revealItems.length === 0
    ) {
      return undefined;
    }

    section.dataset.journeyAnimated = 'true';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.dataset.journeyVisible = 'true';
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      delete section.dataset.journeyAnimated;
      revealItems.forEach((item) => delete item.dataset.journeyVisible);
    };
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const timeline = section?.querySelector('[data-journey-timeline]');

    if (!timeline) {
      return undefined;
    }

    const milestones = Array.from(
      timeline.querySelectorAll('[data-journey-milestone]'),
    );
    let animationFrame = null;

    const updateProgress = () => {
      animationFrame = null;

      const timelineBounds = timeline.getBoundingClientRect();
      const readingPosition = window.innerHeight * 0.56;
      const progress = Math.min(
        1,
        Math.max(
          0,
          (readingPosition - timelineBounds.top) / timelineBounds.height,
        ),
      );

      timeline.style.setProperty('--journey-progress', progress.toFixed(4));

      milestones.forEach((milestone) => {
        const milestonePosition = timelineBounds.top + milestone.offsetTop;
        milestone.dataset.journeyReached = String(
          readingPosition >= milestonePosition,
        );
      });
    };

    const requestProgressUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    timeline.dataset.journeyProgressEnabled = 'true';
    requestProgressUpdate();
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    window.addEventListener('resize', requestProgressUpdate);

    return () => {
      window.removeEventListener('scroll', requestProgressUpdate);
      window.removeEventListener('resize', requestProgressUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      timeline.style.removeProperty('--journey-progress');
      delete timeline.dataset.journeyProgressEnabled;
      milestones.forEach((milestone) => delete milestone.dataset.journeyReached);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="design-journey-title"
      className="design-journey py-24 sm:py-32 lg:py-40"
    >
      <div className="grid gap-20 lg:grid-cols-[minmax(0,35fr)_minmax(0,65fr)] lg:gap-16 xl:gap-24">
        <header className="lg:sticky lg:top-36 lg:self-start">
          <p className="text-sm font-semibold uppercase text-neutral-500 sm:text-base">
            {content.eyebrow}
          </p>
          <h2
            id="design-journey-title"
            className="mt-5 max-w-[10ch] text-5xl leading-[1.02] font-semibold text-neutral-950 sm:text-6xl lg:text-[4.25rem]"
          >
            {content.title}
          </h2>
          <p className="mt-8 max-w-[34rem] text-lg leading-[1.65] text-neutral-600 sm:text-xl lg:max-w-[30rem]">
            {content.introduction}
          </p>
        </header>

        <div>
          <ol
            data-journey-timeline
            className="design-journey__timeline relative"
          >
            {content.milestones.map((milestone) => (
              <JourneyMilestone key={milestone.title} milestone={milestone} />
            ))}
          </ol>

          <p
            data-journey-reveal
            className="design-journey__reveal mt-24 ml-auto max-w-[38rem] text-right text-2xl leading-[1.45] font-medium text-neutral-900 sm:mt-32 sm:text-3xl"
          >
            {content.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
