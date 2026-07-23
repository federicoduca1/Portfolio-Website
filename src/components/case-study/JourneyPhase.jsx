import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';
import GuidedStickySequence from './GuidedStickySequence.jsx';

function JourneyMediaGroup({
  layout = 'primary-left',
  media = [],
  tone = 'light',
}) {
  const hasThreeItems = media.length > 2;
  const isDark = tone === 'dark';
  const isFullWidth = layout === 'full';
  const primaryRight = layout === 'primary-right';
  const gridClasses = hasThreeItems
    ? 'md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] md:grid-rows-2'
    : 'md:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] md:items-center';

  return (
    <div
      className={`${isFullWidth ? '' : `grid ${gridClasses}`} gap-5 sm:gap-6`}
    >
      {media.map((item, mediaIndex) => {
        const isPrimary = mediaIndex === 0;
        let placementClass = '';

        if (isPrimary && hasThreeItems) {
          placementClass = primaryRight
            ? 'md:col-start-2 md:row-span-2 md:row-start-1'
            : 'md:row-span-2';
        } else if (!isPrimary && hasThreeItems && primaryRight) {
          placementClass = 'md:col-start-1';
        } else if (isPrimary && primaryRight) {
          placementClass = 'md:order-2';
        } else if (!isPrimary && primaryRight) {
          placementClass = 'md:order-1';
        }

        return (
          <CaseStudyMediaPlaceholder
            key={item.label}
            {...item}
            className={placementClass}
            theme={
              item.theme ?? (isDark ? 'dark' : isPrimary ? 'soft' : 'light')
            }
          />
        );
      })}
    </div>
  );
}

export default function JourneyPhase({ phase, index, tone = 'light' }) {
  const isDark = tone === 'dark';
  const isSplitFlow = phase.flowLayout === 'split';
  const borderClass = isDark ? 'border-white/15' : 'border-neutral-300';
  const bodyClass = isDark ? 'text-neutral-300' : 'text-neutral-600';

  return (
    <article className={`border-t pt-9 sm:pt-11 ${borderClass}`}>
      {phase.introEyebrow ? (
        <header className="max-w-[46rem]">
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {phase.introEyebrow}
          </p>
          {!isSplitFlow ? (
            <p className={`mt-4 text-lg leading-[1.7] sm:text-xl ${bodyClass}`}>
              {phase.description}
            </p>
          ) : null}
        </header>
      ) : (
        <header className="grid gap-5 lg:grid-cols-[4rem_minmax(15rem,0.75fr)_minmax(0,1.25fr)] lg:gap-8">
          <span className="text-sm font-semibold tabular-nums text-[var(--project-accent)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h4 className="text-3xl leading-[1.1] font-medium sm:text-4xl">
            {phase.title}
          </h4>
          <p className={`max-w-[42rem] text-lg leading-[1.7] sm:text-xl ${bodyClass}`}>
            {phase.description}
          </p>
        </header>
      )}

      {phase.guidedSteps ? (
        <>
          {phase.flow ? (
            <CaseStudyMediaPlaceholder
              {...phase.flow}
              className="mt-10 sm:mt-12"
              theme={phase.flow.theme ?? (isDark ? 'dark' : 'soft')}
            />
          ) : null}
          <div className="mt-10 sm:mt-12">
            <GuidedStickySequence
              headingLevel={5}
              steps={phase.guidedSteps}
              tone={tone}
              variant={phase.guidedVariant}
            />
          </div>
        </>
      ) : (
        <>
          {isSplitFlow ? (
            <div className="mt-7 grid items-start gap-8 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:gap-10 lg:gap-14">
              <p className={`text-lg leading-[1.7] sm:text-xl ${bodyClass}`}>
                {phase.description}
              </p>
              <div className="w-full max-w-[34rem] md:justify-self-end">
                <CaseStudyMediaPlaceholder
                  {...phase.flow}
                  theme={phase.flow?.theme ?? (isDark ? 'dark' : 'soft')}
                  width="full"
                />
              </div>
            </div>
          ) : (
            <CaseStudyMediaPlaceholder
              {...phase.flow}
              className="mt-10 sm:mt-12"
              theme={phase.flow?.theme ?? (isDark ? 'dark' : 'soft')}
            />
          )}

          <div className={isSplitFlow ? 'mt-12 sm:mt-14' : 'mt-5 sm:mt-6'}>
            <JourneyMediaGroup
              layout={phase.layout}
              media={phase.media}
              tone={tone}
            />
          </div>
        </>
      )}
    </article>
  );
}
