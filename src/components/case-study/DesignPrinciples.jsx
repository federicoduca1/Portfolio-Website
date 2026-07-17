export default function DesignPrinciples({ principles, tone = 'dark' }) {
  const borderClass = tone === 'dark' ? 'border-neutral-700' : 'border-neutral-300';
  const bodyClass = tone === 'dark' ? 'text-neutral-300' : 'text-neutral-600';

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
