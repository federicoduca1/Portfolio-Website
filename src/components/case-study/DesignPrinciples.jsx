export default function DesignPrinciples({
  layout = 'columns',
  principles,
  tone = 'dark',
}) {
  const borderClass = tone === 'dark' ? 'border-neutral-700' : 'border-neutral-300';
  const bodyClass = tone === 'dark' ? 'text-neutral-300' : 'text-neutral-600';

  if (layout === 'rows') {
    return (
      <div className={`border-t ${borderClass}`}>
        {principles.map((principle, index) => (
          <article
            key={principle.title}
            className={`grid gap-x-7 gap-y-3 border-b py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:py-7 lg:grid-cols-[3rem_minmax(13rem,0.8fr)_minmax(0,1.35fr)] lg:gap-x-10 lg:py-8 ${borderClass}`}
          >
            <p className="text-sm font-semibold text-[var(--project-accent)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-xl leading-[1.25] font-medium sm:text-2xl">
              {principle.title}
            </h3>
            <p
              className={`text-base leading-[1.7] sm:col-start-2 sm:text-lg lg:col-start-3 lg:row-start-1 ${bodyClass}`}
            >
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid border-t ${borderClass} md:grid-cols-3`}>
      {principles.map((principle, index) => (
        <article
          key={principle.title}
          className={`border-b py-8 md:min-h-[19rem] md:px-7 md:py-9 ${borderClass} ${
            index > 0 ? `md:border-l ${borderClass}` : ''
          }`}
        >
          <p className="text-sm font-semibold text-[var(--project-accent)]">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-5 text-2xl leading-tight font-medium">
            {principle.title}
          </h3>
          <p className={`mt-5 text-base leading-[1.7] ${bodyClass}`}>
            {principle.description}
          </p>
        </article>
      ))}
    </div>
  );
}
