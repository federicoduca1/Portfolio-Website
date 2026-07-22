export default function ServiceQuestionBlock({
  label = 'Open questions',
  questions = [],
}) {
  return (
    <aside className="border-y border-neutral-300 py-8 sm:py-10">
      <p className="text-sm font-semibold tracking-[0.13em] text-[var(--project-accent-secondary)] uppercase">
        {label}
      </p>
      <ul className="mt-7 grid gap-x-12 gap-y-6 md:grid-cols-2">
        {questions.map((question, index) => (
          <li key={question} className="flex gap-4 text-lg leading-[1.55] text-neutral-700">
            <span className="shrink-0 text-sm font-semibold tabular-nums text-neutral-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{question}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
