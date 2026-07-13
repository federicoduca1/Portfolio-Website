function PlaceholderVisual({ variant }) {
  const height =
    variant === 'featured' ? 'min-h-[18rem] lg:min-h-[26rem]' : 'aspect-square';

  return (
    <div
      aria-hidden="true"
      className={`${height} flex items-center justify-center bg-neutral-200 text-sm uppercase tracking-[0.18em] text-neutral-500`}
    >
      Visual placeholder
    </div>
  );
}

export default function ProjectCard({ project, variant }) {
  const isFeatured = variant === 'featured';
  const titleClassName = isFeatured
    ? 'text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl'
    : 'text-2xl font-semibold leading-tight text-neutral-950';

  return (
    <article className="border border-neutral-200 bg-neutral-50">
      <PlaceholderVisual variant={variant} />

      <div
        className={
          isFeatured
            ? 'grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10'
            : 'space-y-5 p-6 sm:p-8'
        }
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
            {project.category}
          </p>
          <p className="text-sm text-neutral-500">{project.metadata}</p>
        </div>

        <div>
          <h3 className={titleClassName}>{project.title}</h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}
