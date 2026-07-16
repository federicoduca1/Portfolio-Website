import { useLayoutEffect, useRef } from 'react';
import LearningEntry from './LearningEntry.jsx';

export default function EducationLearning({ content }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const revealItems = Array.from(
      section.querySelectorAll('[data-learning-reveal]'),
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

    section.dataset.learningAnimated = 'true';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.dataset.learningVisible = 'true';
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      delete section.dataset.learningAnimated;
      revealItems.forEach((item) => delete item.dataset.learningVisible);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="education-learning-title"
      className="education-learning py-24 sm:py-32 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[minmax(15rem,30fr)_minmax(0,70fr)] lg:gap-16 xl:gap-24">
        <h2
          id="education-learning-title"
          data-learning-reveal
          className="max-w-[12ch] text-5xl leading-[1.05] font-normal text-neutral-950 sm:text-6xl lg:text-[4rem]"
        >
          {content.title}
        </h2>

        <div>
          {content.sections.map((contentSection, sectionIndex) => (
            <div
              key={contentSection.id}
              className={sectionIndex === 0 ? '' : 'mt-8 sm:mt-10'}
            >
              <h3 className="sr-only">{contentSection.title}</h3>
              <ul aria-label={contentSection.title}>
                {contentSection.entries.map((entry) => (
                  <LearningEntry
                    key={`${entry.year}-${entry.qualification}`}
                    entry={entry}
                    type={contentSection.title}
                  />
                ))}
              </ul>
            </div>
          ))}

          <p
            data-learning-reveal
            className="mt-20 ml-auto max-w-[44rem] border-t border-neutral-300 pt-10 text-xl leading-[1.65] text-neutral-600 sm:mt-24 sm:pt-12 sm:text-2xl"
          >
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
