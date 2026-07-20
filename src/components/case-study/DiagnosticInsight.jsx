export default function DiagnosticInsight({ insight, className = '' }) {
  return (
    <article className={`diagnostic-insight flex h-full flex-col ${className}`}>
      <p className="text-sm font-semibold tracking-[0.08em] text-[var(--project-accent)]">
        {insight.number}
      </p>
      <span
        aria-hidden="true"
        className="mt-3 h-0.5 w-8 rounded-full bg-[var(--project-accent)] opacity-70"
      />
      <h3 className="mt-4 max-w-[20ch] text-2xl leading-tight font-medium text-neutral-950 sm:text-[1.75rem] xl:min-h-[6.75rem]">
        {insight.title}
      </h3>

      <dl className="mt-7 flex flex-1 flex-col">
        <div>
          <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase">
            Evidence
          </dt>
          <dd className="mt-2 max-w-[34rem] text-base leading-[1.7] text-neutral-600 sm:text-lg">
            {insight.evidence}
          </dd>
        </div>
        <div className="mt-7 xl:mt-auto xl:pt-9">
          <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase">
            Design implication
          </dt>
          <dd className="mt-2 max-w-[34rem] text-base leading-[1.7] font-medium text-neutral-900 sm:text-lg">
            {insight.implication}
          </dd>
        </div>
      </dl>
    </article>
  );
}
