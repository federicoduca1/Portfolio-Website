export default function ExperimentCard({ experiment }) {
  return (
    <article className="min-w-0">
      <div
        aria-hidden="true"
        className="aspect-square bg-neutral-200"
      />
      <div className="mt-5">
        <h3 className="text-xl font-semibold leading-tight text-neutral-950">
          {experiment.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {experiment.description}
        </p>
      </div>
    </article>
  );
}
