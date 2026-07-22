export default function SystemEquation({ terms = [] }) {
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
