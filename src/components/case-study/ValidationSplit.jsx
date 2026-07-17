function ValidationColumn({ content, accent = false }) {
  return (
    <div>
      <h3 className="max-w-[20ch] text-2xl leading-tight font-medium sm:text-3xl">
        {content.title}
      </h3>
      <ul className="mt-7 border-t border-neutral-300">
        {content.items.map((item) => (
          <li
            key={item}
            className="grid grid-cols-[1rem_1fr] gap-3 border-b border-neutral-300 py-4 text-base leading-[1.55] text-neutral-700"
          >
            <span
              aria-hidden="true"
              className={`mt-[0.55rem] h-1.5 w-1.5 rounded-full ${
                accent ? 'bg-[var(--project-accent)]' : 'bg-neutral-400'
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ValidationSplit({ content }) {
  return (
    <section
      aria-label="Concept validation status"
      className="bg-neutral-50 px-6 py-10 text-neutral-950 sm:px-9 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ValidationColumn content={content.demonstrated} accent />
        <ValidationColumn content={content.pending} />
      </div>
    </section>
  );
}
