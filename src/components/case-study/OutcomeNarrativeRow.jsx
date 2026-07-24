export default function OutcomeNarrativeRow({
  accent = true,
  compact = false,
  description,
  headingLevel = 4,
  layout = 'stacked',
  number,
  prominent = false,
  separator = true,
  title,
}) {
  const Heading =
    headingLevel === 3 ? 'h3' : headingLevel === 5 ? 'h5' : 'h4';
  const titleClass = prominent
    ? 'text-xl sm:text-2xl'
    : compact
      ? 'text-lg sm:text-xl'
      : 'text-xl sm:text-2xl';

  return (
    <article
      className={`${compact ? 'py-5' : 'py-6'} ${
        separator ? 'border-t border-neutral-300' : ''
      }`}
    >
      <div
        className={`grid gap-3 ${
          layout === 'spread'
            ? 'lg:grid-cols-[2.75rem_minmax(14rem,0.8fr)_minmax(0,1.2fr)] lg:gap-8'
            : 'sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-5'
        }`}
      >
        <p
          className={`text-sm font-semibold ${
            accent ? 'text-[var(--project-accent)]' : 'text-neutral-500'
          }`}
        >
          {number}
        </p>
        {layout === 'spread' ? (
          <>
            <Heading
              className={`${titleClass} leading-tight font-medium text-neutral-950`}
            >
              {title}
            </Heading>
            <p
              className={`max-w-[42rem] ${compact ? 'text-sm sm:text-base' : 'text-base'} leading-[1.65] text-neutral-600`}
            >
              {description}
            </p>
          </>
        ) : (
          <div>
            <Heading
              className={`${titleClass} leading-tight font-medium text-neutral-950`}
            >
              {title}
            </Heading>
            <p
              className={`mt-2 max-w-[42rem] ${compact ? 'text-sm sm:text-base' : 'text-base'} leading-[1.65] text-neutral-600`}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
