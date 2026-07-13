import ExperimentCard from './ExperimentCard.jsx';

export default function CarouselPreview({ experiments }) {
  return (
    <div className="min-w-0">
      <div
        aria-label="Playground experiments preview"
        className="playground-carousel overflow-x-auto pb-6"
        tabIndex="0"
      >
        <div className="flex w-max gap-6">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>
      </div>

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
