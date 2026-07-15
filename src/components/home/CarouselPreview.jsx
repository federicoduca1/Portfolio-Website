import ExperimentCard from './ExperimentCard.jsx';
import PlaygroundDragCursor from './PlaygroundDragCursor.jsx';
import usePlaygroundCarousel from '../../hooks/usePlaygroundCarousel.js';

export default function CarouselPreview({ experiments }) {
  const { carouselRef, cursorRef } = usePlaygroundCarousel();

  return (
    <div className="min-w-0" data-playground-reveal="carousel">
      <div
        ref={carouselRef}
        aria-label="Playground experiments preview"
        className="playground-carousel overflow-x-auto pb-6"
        data-dragging="false"
        tabIndex="0"
      >
        <div className="playground-card-group flex w-max">
          <div data-carousel-sequence className="flex gap-6 pr-6">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
          <div aria-hidden="true" className="flex gap-6 pr-6">
            {experiments.map((experiment) => (
              <ExperimentCard
                key={`${experiment.id}-loop`}
                experiment={experiment}
                isClone
              />
            ))}
          </div>
        </div>
      </div>

      <PlaygroundDragCursor cursorRef={cursorRef} />

      <div className="mt-6">
        <p className="text-base font-medium text-neutral-950">
          <span className="inline-block">
            Explore more &rarr;
          </span>
        </p>
      </div>
    </div>
  );
}
