import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function InsightChapter({ insight, index }) {
  const mediaFirst = index % 2 === 1;

  return (
    <article className="grid gap-8 border-t border-neutral-300 pt-9 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-14">
      <div className={mediaFirst ? 'lg:order-2' : ''}>
        <p className="text-sm font-semibold text-[var(--project-accent)]">
          {insight.number}
        </p>
        <h3 className="mt-3 max-w-[18ch] text-3xl leading-tight font-medium sm:text-4xl">
          {insight.title}
        </h3>

        <dl className="mt-8 space-y-7">
          <div>
            <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase">
              Evidence
            </dt>
            <dd className="mt-3 text-base leading-[1.7] text-neutral-700 sm:text-lg">
              {insight.evidence}
            </dd>
          </div>
          <div className="border-l-2 border-[var(--project-accent)] pl-5">
            <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase">
              Design implication
            </dt>
            <dd className="mt-3 text-base leading-[1.7] text-neutral-900 sm:text-lg">
              {insight.implication}
            </dd>
          </div>
        </dl>
      </div>

      <MediaPlaceholder
        label={insight.mediaLabel}
        aspect="detail"
        tone="light"
        className={mediaFirst ? 'lg:order-1' : ''}
      />
    </article>
  );
}
