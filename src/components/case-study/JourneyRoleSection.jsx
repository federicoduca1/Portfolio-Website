import JourneyPhase from './JourneyPhase.jsx';

export default function JourneyRoleSection({
  introduction,
  label,
  phases = [],
  principle,
  compact = false,
  tone = 'light',
  title,
}) {
  const isDark = tone === 'dark';

  return (
    <section
      className={
        isDark
          ? `rounded-2xl bg-neutral-950 text-neutral-50 ${
              compact
                ? 'px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14'
                : 'px-6 py-12 sm:px-10 sm:py-14 lg:px-[clamp(3rem,6vw,6rem)] lg:py-16'
            }`
          : 'border-t border-neutral-300 pt-12 sm:pt-16'
      }
    >
      <header className="max-w-[52rem]">
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {label}
        </p>
        <h3 className="mt-4 max-w-[20ch] text-[clamp(2.25rem,4vw,4rem)] leading-[1.06] font-medium">
          {title}
        </h3>
        <p
          className={`mt-6 max-w-[46rem] text-lg leading-[1.7] sm:text-xl ${
            isDark ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          {introduction}
        </p>
      </header>

      {principle ? (
        <div className="mt-10 flex max-w-[52rem] items-stretch gap-5 sm:mt-12 sm:gap-7">
          <span
            aria-hidden="true"
            className="w-0.5 shrink-0 rounded-full bg-[var(--project-accent)]"
          />
          <p className="text-[clamp(1.35rem,2.2vw,2.15rem)] leading-[1.4] font-medium text-neutral-900">
            {principle}
          </p>
        </div>
      ) : null}

      <div
        className={
          compact
            ? 'mt-10 space-y-16 sm:mt-12 sm:space-y-20'
            : 'mt-14 space-y-20 sm:mt-18 sm:space-y-24 lg:space-y-28'
        }
      >
        {phases.map((phase, index) => (
          <JourneyPhase
            key={phase.title}
            phase={phase}
            index={index}
            tone={tone}
          />
        ))}
      </div>
    </section>
  );
}
