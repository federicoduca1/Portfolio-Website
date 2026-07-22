export default function ServiceEditorialList({
  heading,
  items = [],
  layout = 'rows',
  numbered = true,
  tone = 'light',
}) {
  const isDark = tone === 'dark';
  const borderClass = isDark ? 'border-white/15' : 'border-neutral-300';
  const bodyClass = isDark ? 'text-neutral-300' : 'text-neutral-600';

  if (layout === 'columns') {
    return (
      <div>
        {heading ? (
          <h3 className="text-sm font-semibold tracking-[0.12em] text-neutral-500 uppercase">
            {heading}
          </h3>
        ) : null}
        <ol className={`mt-7 grid border-y ${borderClass} md:grid-cols-3`}>
          {items.map((item, index) => (
            <li
              key={item.title}
              className={`py-7 md:px-7 md:py-8 ${
                index > 0 ? `border-t ${borderClass} md:border-t-0 md:border-l` : ''
              }`}
            >
              {numbered ? (
                <span className="text-sm font-semibold tabular-nums text-[var(--project-accent)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              ) : null}
              <h4 className="mt-4 text-xl leading-tight font-semibold sm:text-2xl">
                {item.title}
              </h4>
              <p className={`mt-4 text-base leading-[1.7] sm:text-lg ${bodyClass}`}>
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div>
      {heading ? (
        <h3 className="text-sm font-semibold tracking-[0.12em] text-neutral-500 uppercase">
          {heading}
        </h3>
      ) : null}
      <ol className={`mt-7 border-t ${borderClass}`}>
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`grid gap-4 border-b py-7 sm:grid-cols-[3rem_minmax(12rem,0.7fr)_minmax(0,1fr)] sm:gap-6 sm:py-8 ${borderClass}`}
          >
            {numbered ? (
              <span className="text-sm font-semibold tabular-nums text-[var(--project-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
            ) : (
              <span aria-hidden="true" />
            )}
            <h4 className="text-xl leading-tight font-semibold sm:text-2xl">
              {item.title}
            </h4>
            <p className={`max-w-[42rem] text-base leading-[1.7] sm:text-lg ${bodyClass}`}>
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
