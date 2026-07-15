import { useEffect, useRef } from 'react';

export default function HighlightedTitle({
  as: TitleElement = 'h2',
  children,
  className = '',
  ...props
}) {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) {
      return undefined;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      title.dataset.highlightVisible = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        title.dataset.highlightVisible = 'true';
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.25,
      },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <TitleElement
      ref={titleRef}
      className={className}
      data-highlight-visible="false"
      {...props}
    >
      <span className="section-title-highlight">
        <span
          aria-hidden="true"
          className="section-title-highlight__stroke"
        />
        <span className="section-title-highlight__text">{children}</span>
      </span>
    </TitleElement>
  );
}
