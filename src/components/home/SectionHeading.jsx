import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HighlightedTitle from '../HighlightedTitle.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading({ description, id, title }) {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;

    if (!heading) {
      return undefined;
    }

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const titleElement = heading.querySelector('[data-section-title]');
        const descriptionElement = heading.querySelector(
          '[data-section-description]',
        );
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: 'top 82%',
            once: true,
          },
        });

        timeline.from(titleElement, {
          opacity: 0,
          y: 24,
          duration: 0.72,
          ease: 'power2.out',
        });
        timeline.from(
          descriptionElement,
          {
            opacity: 0,
            y: 16,
            duration: 0.58,
            ease: 'power2.out',
          },
          0.2,
        );

        return () => timeline.kill();
      });
    }, heading);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <header
      ref={headingRef}
      className="mx-auto w-full max-w-7xl text-center"
    >
      <HighlightedTitle
        id={id}
        data-section-title
        className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] text-neutral-950"
      >
        {title}
      </HighlightedTitle>
      <p
        data-section-description
        className="mx-auto mt-7 max-w-5xl text-lg leading-8 text-neutral-600 min-[900px]:whitespace-nowrap sm:text-xl"
      >
        {description}
      </p>
    </header>
  );
}
