import OutcomeDeviceContinuation from './OutcomeDeviceContinuation.jsx';
import OutcomeNarrativeRow from './OutcomeNarrativeRow.jsx';

export default function OutcomeCatalogChapter({ content, renderMedia }) {
  return (
    <article>
      <header className="max-w-[44rem]">
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {content.label}
        </p>
        {content.title ? (
          <h3 className="mt-4 max-w-[18ch] text-[clamp(2.15rem,4vw,3.8rem)] leading-[1.08] font-medium text-neutral-950">
            {content.title}
          </h3>
        ) : null}
        <p
          className={`${content.title ? 'mt-5' : 'mt-4'} text-lg leading-[1.65] text-neutral-700 sm:text-xl`}
        >
          {content.copy}
        </p>
      </header>

      <div className="mx-auto mt-10 w-full max-w-[62rem] sm:mt-12">
        <OutcomeDeviceContinuation
          {...content.visual}
          renderMedia={renderMedia}
        />
      </div>

      <div className="mt-14 grid md:grid-cols-3 lg:mt-16">
        {content.rows.map((row, index) => (
          <div
            key={row.number}
            className={`${
              index > 0
                ? 'border-t border-neutral-300 md:border-t-0 md:border-l md:pl-8 lg:pl-12'
                : ''
            } ${index < content.rows.length - 1 ? 'md:pr-8 lg:pr-12' : ''}`}
          >
            <OutcomeNarrativeRow compact separator={false} {...row} />
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl bg-[var(--project-surface)] px-4 py-10 text-neutral-50 sm:mt-20 sm:px-8 sm:py-14 lg:mt-24 lg:px-12 lg:py-16">
        <header>
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {content.filtering.label}
          </p>
          <h4 className="mt-4 max-w-[18ch] text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.08] font-medium">
            {content.filtering.title}
          </h4>
          <p className="mt-5 max-w-[44rem] text-base leading-[1.7] text-neutral-400 sm:text-lg">
            {content.filtering.copy}
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          {renderMedia(
            content.filtering.media,
            'mx-auto w-[90%] max-w-[64rem]',
          )}
          <div className="mx-auto mt-6 w-[90%] max-w-[64rem]">
            <div className="max-w-[43rem]">
              <h5 className="text-2xl leading-tight font-medium sm:text-3xl">
                {content.filtering.mediaTitle}
              </h5>
              <p className="mt-3 text-base leading-[1.7] text-neutral-400 sm:text-lg">
                {content.filtering.mediaDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
