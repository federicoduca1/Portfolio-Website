import { useEffect, useRef } from 'react';
import useGuidedSectionExit from '../../hooks/useGuidedSectionExit.js';
import CarouselPreview from './CarouselPreview.jsx';
import SectionIntro from './SectionIntro.jsx';

export default function PlaygroundSection({ content }) {
  const bridgeRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  useGuidedSectionExit(sectionRef, '[data-home-closing]');

  useEffect(() => {
    const bridge = bridgeRef.current;

    if (!bridge) {
      return undefined;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      bridge.dataset.visible = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        bridge.dataset.visible = 'true';
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.25,
      },
    );

    observer.observe(bridge);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const playgroundContent = contentRef.current;

    if (!playgroundContent) {
      return undefined;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      playgroundContent.dataset.visible = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        playgroundContent.dataset.visible = 'true';
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    );

    observer.observe(playgroundContent);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="playground-preview"
      className="py-4"
    >
      <div className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
        <p
          ref={bridgeRef}
          className="playground-bridge-copy max-w-[22ch] text-[clamp(2.5rem,5.6vw,6.25rem)] font-medium leading-[1.04] text-neutral-950"
          data-visible="false"
        >
          {content.bridge}
        </p>
      </div>
      <div
        ref={contentRef}
        className="grid gap-12 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.48fr)] lg:items-start lg:gap-16"
        data-playground-content
        data-visible="false"
      >
        <SectionIntro
          id="playground-preview"
          title={content.title}
          description={content.description}
          descriptionClassName="max-w-md text-justify text-xl leading-8 hyphens-auto sm:text-[1.375rem] sm:leading-9"
          revealSequence
          titleClassName="text-[2.125rem] sm:text-[2.5rem] lg:text-[3.25rem]"
        />
        <CarouselPreview experiments={content.experiments} />
      </div>
    </section>
  );
}
