import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HighlightedTitle from '../HighlightedTitle.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading({
  description,
  id,
  title,
  variant = 'centered',
}) {
  const headingRef = useRef(null);
  const isNarrative = variant === 'narrative';
  const isFeatured = variant === 'featured';

  useLayoutEffect(() => {
    const heading = headingRef.current;

    if (!heading || isFeatured) {
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
  }, [isFeatured]);

  return (
    <header
      ref={headingRef}
      className={
        isNarrative
          ? 'w-full text-center lg:text-left'
          : `mx-auto w-full text-center ${
              isFeatured ? 'section-heading--featured' : 'max-w-7xl'
            }`
      }
    >
      <HighlightedTitle
        id={id}
        data-section-title
        characterReveal={isFeatured}
        controlledHighlight={isFeatured}
        multiline={isNarrative}
        className={
          isNarrative
            ? 'text-[clamp(3.5rem,5.5vw,6.25rem)] font-semibold leading-[0.94] text-neutral-950'
            : isFeatured
              ? 'text-[clamp(3.5rem,10vw,11rem)] font-semibold leading-[0.88] tracking-[0] text-neutral-950 min-[900px]:whitespace-nowrap'
              : 'text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] text-neutral-950'
        }
      >
        {title}
      </HighlightedTitle>
      <p
        data-section-description
        className={
          isNarrative
            ? 'mx-auto mt-7 max-w-md text-lg leading-8 text-neutral-600 sm:text-xl lg:mx-0'
            : 'mx-auto mt-7 max-w-5xl text-lg leading-8 text-neutral-600 min-[900px]:whitespace-nowrap sm:text-xl'
        }
      >
        {description}
      </p>
    </header>
  );
}
