import ExperimentCard from './ExperimentCard.jsx';

export default function CarouselPreview({ experiments }) {
  const previewExperiments = experiments.slice(0, 3);

  return (
    <div className="min-w-0">
      <div className="grid gap-6 sm:grid-cols-3">
        {previewExperiments.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </div>

      <div className="mt-8 space-y-6">
        <div
          aria-hidden="true"
          className="h-px w-full bg-neutral-200"
        >
          <div className="h-px w-1/3 bg-neutral-950" />
        </div>

        <p className="text-base font-medium text-neutral-950">
          <span className="inline-block">
            Explore more &rarr;
          </span>
        </p>
      </div>
    </div>
  );
}
