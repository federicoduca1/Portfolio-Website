import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function FeatureChapter({ feature }) {
  const isWide = feature.layout === 'wide';

  return (
    <article className="border-t border-neutral-300 pt-8 sm:pt-10">
      <div
        className={
          isWide
            ? 'grid gap-7 lg:grid-cols-[0.76fr_1.24fr] lg:gap-12'
            : ''
        }
      >
        <div>
          <h3 className="text-sm font-semibold tracking-[0.1em] text-[var(--project-accent)] uppercase">
            {feature.label} — {feature.intention}
          </h3>
          <p className="mt-4 text-xl leading-[1.5] font-medium text-neutral-900 sm:text-2xl">
            {feature.audience}
          </p>
          <div className="mt-7 border-l-2 border-[var(--project-accent)] pl-5">
            <p className="text-xs font-semibold tracking-[0.11em] text-neutral-500 uppercase">
              Key design decision
            </p>
            <p className="mt-3 text-base leading-[1.7] text-neutral-700 sm:text-lg">
              {feature.decision}
            </p>
          </div>
        </div>

        <div
          className={`grid gap-5 ${
            isWide ? 'mt-1 sm:grid-cols-2 lg:mt-0' : 'mt-8'
          }`}
        >
          <MediaPlaceholder
            label={feature.wireframeLabel}
            aspect={isWide ? 'detail' : 'landscape'}
            tone="light"
          />
          <MediaPlaceholder
            label={feature.interfaceLabel}
            aspect={isWide ? 'detail' : 'landscape'}
            tone="light"
          />
        </div>
      </div>
    </article>
  );
}
