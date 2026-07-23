export default function ServiceQuestionBlock({
  accent = 'secondary',
  label = 'Open questions',
  questions = [],
  showBottomBorder = true,
  tone = 'light',
}) {
  const isDark = tone === 'dark';
  const accentClass =
    accent === 'primary'
      ? 'text-[var(--project-accent)]'
      : 'text-[var(--project-accent-secondary)]';
  const borderClass = isDark ? 'border-white/15' : 'border-neutral-300';
  const questionClass = isDark ? 'text-neutral-300' : 'text-neutral-700';
  const numberClass = isDark ? 'text-neutral-500' : 'text-neutral-400';

  return (
    <aside
      className={`border-t py-8 sm:py-10 ${borderClass} ${
        showBottomBorder ? 'border-b' : ''
      }`}
    >
      <p
        className={`text-sm font-semibold tracking-[0.13em] uppercase ${accentClass}`}
      >
        {label}
      </p>
      <ul className="mt-7 grid gap-x-12 gap-y-6 md:grid-cols-2">
        {questions.map((question, index) => (
          <li key={question} className={`flex gap-4 text-lg leading-[1.55] ${questionClass}`}>
            <span className={`shrink-0 text-sm font-semibold tabular-nums ${numberClass}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{question}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
