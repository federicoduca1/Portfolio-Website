import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';

export default function JourneyPhase({ phase, index }) {
  const [primaryMedia, ...supportingMedia] = phase.media;

  return (
    <article className="border-t border-neutral-300 pt-9 sm:pt-11">
      <header className="grid gap-5 lg:grid-cols-[4rem_minmax(15rem,0.75fr)_minmax(0,1.25fr)] lg:gap-8">
        <span className="text-sm font-semibold tabular-nums text-[var(--project-accent)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-3xl leading-[1.1] font-medium sm:text-4xl">
          {phase.title}
        </h3>
        <p className="max-w-[42rem] text-lg leading-[1.7] text-neutral-600 sm:text-xl">
          {phase.description}
        </p>
      </header>

      <div className="mt-10 sm:mt-12">
        <CaseStudyMediaPlaceholder {...primaryMedia} theme="soft" />
      </div>

      {supportingMedia.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:mt-6 md:grid-cols-2">
          {supportingMedia.map((media) => (
            <CaseStudyMediaPlaceholder
              key={media.label}
              {...media}
              theme="light"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
