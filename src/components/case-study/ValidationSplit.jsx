import OutcomeNarrativeRow from './OutcomeNarrativeRow.jsx';

function ValidationRows({ content, prominent = false }) {
  return (
    <section>
      <h4 className="text-xs font-semibold tracking-[0.13em] text-neutral-500 uppercase sm:text-sm">
        {content.label}
      </h4>
      <div className="mt-5 border-b border-neutral-300">
        {content.items.map((item) => (
          <OutcomeNarrativeRow
            key={item.number}
            {...item}
            headingLevel={5}
            layout="spread"
            prominent={prominent}
          />
        ))}
      </div>
    </section>
  );
}

export default function ValidationSplit({ content }) {
  return (
    <section aria-labelledby="outcome-validation-title">
      <header className="max-w-[52rem]">
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {content.label}
        </p>
        <h3
          id="outcome-validation-title"
          className="mt-4 max-w-[18ch] text-[clamp(2.35rem,4.4vw,4.2rem)] leading-[1.08] font-medium text-neutral-950"
        >
          {content.title}
        </h3>
        <p className="mt-5 max-w-[46rem] text-lg leading-[1.65] text-neutral-700 sm:text-xl">
          {content.introduction}
        </p>
      </header>

      <div className="mt-14 sm:mt-16">
        <ValidationRows content={content.demonstrated} />
      </div>

      <div className="mt-16 sm:mt-20 lg:mt-24">
        <ValidationRows content={content.pending} prominent />
      </div>
    </section>
  );
}
