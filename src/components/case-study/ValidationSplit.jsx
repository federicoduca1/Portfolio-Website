function ValidationColumn({ content }) {
  return (
    <div>
      <h4 className="max-w-[24ch] text-xl leading-tight font-medium sm:text-2xl">
        {content.title}
      </h4>
      <ul className="mt-6 border-t border-neutral-300">
        {content.items.map((item) => (
          <li
            key={item}
            className="border-b border-neutral-300 py-4 text-base leading-[1.55] text-neutral-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ValidationSplit({ content }) {
  return (
    <section aria-labelledby="outcome-validation-title">
      <header className="max-w-[48rem]">
        <h3
          id="outcome-validation-title"
          className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm"
        >
          {content.label}
        </h3>
        <p className="mt-4 text-lg leading-[1.65] text-neutral-700 sm:text-xl">
          {content.introduction}
        </p>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ValidationColumn content={content.demonstrated} />
        <ValidationColumn content={content.pending} />
      </div>
    </section>
  );
}
