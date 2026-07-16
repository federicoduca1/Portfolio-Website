import { Fragment, useEffect, useRef } from 'react';

export default function HighlightedTitle({
  as: TitleElement = 'h2',
  characterReveal = false,
  children,
  className = '',
  controlledHighlight = false,
  multiline = false,
  ...props
}) {
  const titleRef = useRef(null);
  const words =
    multiline && typeof children === 'string' ? children.split(/\s+/) : [];
  const characterWords =
    characterReveal && typeof children === 'string'
      ? children.trim().split(/\s+/)
      : [];

  useEffect(() => {
    const title = titleRef.current;

    if (!title) {
      return undefined;
    }

    if (controlledHighlight) {
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
  }, [controlledHighlight]);

  return (
    <TitleElement
      ref={titleRef}
      className={className}
      data-highlight-visible="false"
      aria-label={
        (multiline || characterReveal) && typeof children === 'string'
          ? children
          : undefined
      }
      {...props}
    >
      {words.length > 0 ? (
        <span
          aria-hidden="true"
          className="section-title-highlight section-title-highlight--multiline"
        >
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="section-title-highlight__line"
            >
              <span
                aria-hidden="true"
                className="section-title-highlight__stroke"
              />
              <span className="section-title-highlight__text">{word}</span>
            </span>
          ))}
        </span>
      ) : (
        <span className="section-title-highlight">
          <span
            aria-hidden="true"
            className="section-title-highlight__stroke"
          />
          {characterWords.length > 0 ? (
            <span
              aria-hidden="true"
              className="section-title-highlight__text"
            >
              {characterWords.map((word, wordIndex) => (
                <Fragment key={`${word}-${wordIndex}`}>
                  <span className="inline-block whitespace-nowrap">
                    {[...word].map((character, characterIndex) => (
                      <span
                        key={`${character}-${characterIndex}`}
                        data-section-title-letter
                        className="inline-block"
                      >
                        {character}
                      </span>
                    ))}
                  </span>
                  {wordIndex < characterWords.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </span>
          ) : (
            <span className="section-title-highlight__text">{children}</span>
          )}
        </span>
      )}
    </TitleElement>
  );
}
