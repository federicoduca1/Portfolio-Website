import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function InteractionModule({ module, index }) {
  return (
    <article className="border-t border-neutral-700 pt-9">
      <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <p className="text-sm font-semibold text-[var(--project-accent)]">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 text-3xl leading-tight font-medium">
            {module.title}
          </h3>
          <p className="mt-5 text-base leading-[1.7] text-neutral-300 sm:text-lg">
            {module.description}
          </p>
        </div>

        <div
          className={`grid gap-5 ${
            module.media.length > 1 ? 'sm:grid-cols-2' : ''
          }`}
        >
          {module.media.map((label) => (
            <MediaPlaceholder
              key={label}
              label={label}
              aspect="detail"
              tone="dark"
            />
          ))}
        </div>
      </div>
    </article>
  );
}
