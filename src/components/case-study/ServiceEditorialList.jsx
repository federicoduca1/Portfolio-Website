export default function ServiceEditorialList({
  heading,
  items = [],
  layout = 'rows',
  numbered = true,
  showOuterBorders = true,
  alignDescriptionWithTitle = false,
  tone = 'light',
}) {
  const isDark = tone === 'dark';
  const borderClass = isDark ? 'border-white/15' : 'border-neutral-300';
  const bodyClass = isDark ? 'text-neutral-300' : 'text-neutral-600';

  if (layout === 'compact') {
    return (
      <div>
        {heading ? (
          <h3 className="text-sm font-semibold tracking-[0.12em] text-neutral-500 uppercase">
            {heading}
          </h3>
        ) : null}
        <ol className={`${showOuterBorders ? 'border-t' : ''} ${heading ? 'mt-7' : ''} ${borderClass}`}>
          {items.map((item, index) => (
            <li
              key={item.title}
              className={`grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-7 sm:gap-5 sm:py-8 ${
                showOuterBorders || index < items.length - 1 ? 'border-b' : ''
              } ${borderClass}`}
            >
              {numbered ? (
                <span className="text-sm font-semibold tabular-nums text-[var(--project-accent)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              ) : (
                <span aria-hidden="true" />
              )}
              <div>
                <h4 className="text-xl leading-tight font-semibold sm:text-2xl">
                  {item.title}
                </h4>
                <p className={`mt-3 text-base leading-[1.65] sm:text-lg ${bodyClass}`}>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

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
              {item.label ? (
                <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase sm:text-sm">
                  {item.label}
                </p>
              ) : null}
              <h4 className={`${item.label ? 'mt-2' : 'mt-4'} text-xl leading-tight font-semibold sm:text-2xl`}>
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
      <ol className={`mt-7 ${showOuterBorders ? 'border-t' : ''} ${borderClass}`}>
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`grid gap-4 py-7 sm:grid-cols-[3rem_minmax(12rem,0.7fr)_minmax(0,1fr)] sm:gap-6 sm:py-8 ${
              showOuterBorders || index < items.length - 1 ? 'border-b' : ''
            } ${borderClass}`}
          >
            {numbered ? (
              <span className="text-sm font-semibold tabular-nums text-[var(--project-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
            ) : (
              <span aria-hidden="true" />
            )}
            <div>
              {item.label ? (
                <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase sm:text-sm">
                  {item.label}
                </p>
              ) : null}
              <h4 className="text-xl leading-tight font-semibold sm:text-2xl">
                {item.title}
              </h4>
            </div>
            <p
              className={`max-w-[42rem] text-base leading-[1.7] sm:text-lg ${
                alignDescriptionWithTitle && item.label ? 'sm:mt-7' : ''
              } ${bodyClass}`}
            >
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
