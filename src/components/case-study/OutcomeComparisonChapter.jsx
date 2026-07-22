import OutcomeNarrativeRow from './OutcomeNarrativeRow.jsx';

export default function OutcomeComparisonChapter({
  content,
  renderMedia,
}) {
  return (
    <article className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,1fr)] lg:items-start lg:gap-[clamp(2.5rem,5vw,6rem)]">
      <div className="contents lg:col-start-2 lg:row-start-1 lg:block">
        <header className="order-1 max-w-[40rem]">
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {content.label}
          </p>
          {content.title ? (
            <h3 className="mt-4 max-w-[16ch] text-[clamp(2.15rem,4vw,3.8rem)] leading-[1.08] font-medium text-neutral-950">
              {content.title}
            </h3>
          ) : null}
          <p
            className={`${content.title ? 'mt-5' : 'mt-4'} text-base leading-[1.65] text-neutral-700 sm:text-lg`}
          >
            {content.copy}
          </p>
        </header>

        <div className="order-1 mt-7 border-b border-neutral-300 sm:mt-8">
          {content.rows.map((row) => (
            <OutcomeNarrativeRow key={row.number} compact {...row} />
          ))}
        </div>

        {content.detailMedia ? (
          <div className="order-4 mt-8 sm:mt-10">
            {renderMedia(content.detailMedia, 'w-full')}
          </div>
        ) : null}
      </div>

      <div className="order-2 lg:col-start-1 lg:row-start-1">
        {renderMedia(content.composedMedia ?? content.mainMedia, 'w-full')}
        {content.supportingMedia ? (
          <div className="mt-5 ml-auto w-full sm:w-[62%] lg:mt-6">
            {renderMedia(content.supportingMedia, 'w-full')}
          </div>
        ) : null}
      </div>
    </article>
  );
}
