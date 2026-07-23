export default function SystemEquation({ terms = [], variant = 'display' }) {
  if (variant === 'editorial') {
    return (
      <div>
        <p className="flex max-w-[32rem] flex-wrap items-baseline justify-start gap-x-2 gap-y-1 text-left text-[1.375rem] leading-[1.45] font-medium text-neutral-500 sm:text-2xl">
          {terms.map((term, index) => (
            <span key={term} className="contents">
              <span className="whitespace-nowrap">{term}</span>
              {index < terms.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="font-normal text-[var(--project-accent)]"
                >
                  =
                </span>
              ) : null}
            </span>
          ))}
        </p>
      </div>
    );
  }

  return (
    <div className="border-y border-neutral-300 py-10 sm:py-12 lg:py-14">
      <div className="grid items-center gap-5 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-7">
        {terms.map((term, index) => (
          <div key={term} className="contents">
            <p className="text-[clamp(2rem,4vw,4rem)] leading-[1.05] font-medium text-neutral-950">
              {term}
            </p>
            {index < terms.length - 1 ? (
              <span
                aria-hidden="true"
                className="text-3xl font-light text-[var(--project-accent)] sm:text-4xl"
              >
                =
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
