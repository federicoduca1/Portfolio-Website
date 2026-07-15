import { useEffect, useRef } from 'react';
import CarouselPreview from './CarouselPreview.jsx';
import SectionIntro from './SectionIntro.jsx';

export default function PlaygroundSection({ content }) {
  const bridgeRef = useRef(null);
  const contentRef = useRef(null);

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
      aria-labelledby="playground-preview"
      className="py-4"
    >
      <div className="py-20 sm:py-24 lg:py-32">
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
        className="grid gap-12 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.4fr)] lg:items-start lg:gap-16"
        data-playground-content
        data-visible="false"
      >
        <SectionIntro
          id="playground-preview"
          title={content.title}
          description={content.description}
          descriptionClassName="max-w-xl text-lg leading-8 sm:text-xl sm:leading-9"
          revealSequence
        />
        <CarouselPreview experiments={content.experiments} />
      </div>
    </section>
  );
}
