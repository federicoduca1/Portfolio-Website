import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import faceFront from '../../assets/branding/3d-model-face-front.png';

export default function AboutPreview({ content }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      section.dataset.aboutVisible = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        section.dataset.aboutVisible = 'true';
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -16% 0px',
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-about-preview"
      className="border-t border-neutral-800 pt-16 sm:pt-20 lg:pt-24"
      data-about-visible="false"
    >
      <p
        className="text-base font-medium text-neutral-400 sm:text-lg"
        data-about-reveal="eyebrow"
      >
        {content.eyebrow}
      </p>

      <div className="mt-7 grid justify-items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,23rem)] lg:items-center lg:gap-16">
        <h2
          id="home-about-preview"
          className="about-statement-reveal max-w-4xl text-center text-[clamp(2.5rem,5.8vw,6.5rem)] font-medium leading-[1.02] text-neutral-100 lg:text-left"
        >
          {content.statement}
        </h2>

        <div
          className="grid w-full max-w-[23rem] justify-items-center gap-10 sm:gap-12 lg:justify-self-end"
          data-about-reveal="cta"
        >
          <div className="relative grid w-[min(78vw,20rem)] justify-items-center lg:w-full">
            <Link
              to={content.cta.path}
              aria-label="Meet Federico on the About page"
              className="about-portrait-link relative block aspect-[57/66] w-full cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-focus-ring"
            >
              <img
                src={faceFront}
                alt="Portrait of Federico Duca"
                className="about-portrait-image pointer-events-none absolute left-1/2 top-0 block h-auto w-[94%] origin-center object-contain"
              />
            </Link>

            <span className="about-portrait-message pointer-events-none absolute top-full mt-3 whitespace-nowrap text-sm font-medium text-neutral-400 sm:text-base">
              I'm better in person, promise.
            </span>
          </div>

          <Link
            to={content.cta.path}
            className="group inline-flex items-center gap-3 text-2xl font-semibold text-neutral-200 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-focus-ring sm:text-3xl"
          >
            <span>{content.cta.label}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
