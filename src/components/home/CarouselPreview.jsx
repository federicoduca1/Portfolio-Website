import { Link } from 'react-router';
import ExperimentCard from './ExperimentCard.jsx';
import PlaygroundDragCursor from './PlaygroundDragCursor.jsx';
import usePlaygroundCarousel from '../../hooks/usePlaygroundCarousel.js';

export default function CarouselPreview({ experiments }) {
  const {
    activeIndex,
    carouselRef,
    cursorRef,
    goTo,
    isDragging,
  } = usePlaygroundCarousel(experiments.length);

  function getCardState(index) {
    const total = experiments.length;

    if (index === activeIndex) {
      return 'active';
    }

    if (index === (activeIndex - 1 + total) % total) {
      return 'previous';
    }

    if (index === (activeIndex + 1) % total) {
      return 'next';
    }

    if (index === (activeIndex - 2 + total) % total) {
      return 'far-previous';
    }

    return 'far-next';
  }

  return (
    <div
      className="playground-carousel-frame min-w-0"
      data-playground-reveal="carousel"
    >
      <div
        ref={carouselRef}
        aria-label="Playground experiments preview"
        aria-roledescription="carousel"
        className="playground-carousel -mx-4 w-[calc(100%+2rem)]"
        data-dragging={isDragging ? 'true' : 'false'}
        role="region"
        tabIndex="0"
      >
        {experiments.map((experiment, index) => (
          <ExperimentCard
            key={experiment.id}
            experiment={experiment}
            state={getCardState(index)}
          />
        ))}
      </div>

      <PlaygroundDragCursor cursorRef={cursorRef} />

      <div
        aria-label="Choose a Playground experiment"
        className="playground-carousel-indicators"
        role="group"
      >
        {experiments.map((experiment, index) => (
          <button
            key={experiment.id}
            type="button"
            aria-label={`Show ${experiment.title}`}
            aria-pressed={index === activeIndex}
            className="playground-carousel-indicator"
            data-active={index === activeIndex ? 'true' : 'false'}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {experiments[activeIndex]?.title}
      </p>

      <div className="mt-7 flex justify-end pr-2 sm:pr-4">
        <Link
          className="playground-explore-link inline-flex items-center gap-3 text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-none text-neutral-900"
          to="/playground"
        >
          <span className="playground-explore-link__label">Explore More</span>
          <span aria-hidden="true" className="playground-explore-link__arrow">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
