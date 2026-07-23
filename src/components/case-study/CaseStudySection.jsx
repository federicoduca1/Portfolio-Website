const widthClasses = {
  prose: 'max-w-[45rem]',
  content: 'max-w-[60rem]',
  wide: 'max-w-[68rem] min-[1180px]:max-w-none',
};

const themeClasses = {
  light: 'bg-neutral-50 text-neutral-950',
  neutral: 'bg-neutral-100 text-neutral-950',
  dark: 'bg-[var(--project-surface)] text-neutral-50',
};

export default function CaseStudySection({
  id,
  eyebrow,
  title,
  introduction,
  theme = 'light',
  width = 'content',
  className = '',
  contentClassName = '',
  titleClassName = '',
  children,
}) {
  const widthClass = widthClasses[width] ?? widthClasses.content;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`case-study-section scroll-mt-[calc(var(--site-header-height)+4rem)] ${
        themeClasses[theme] ?? themeClasses.light
      } ${className}`}
      data-case-study-section
      data-section-theme={theme}
    >
      <div className={widthClass}>
        {eyebrow ? (
          <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-[var(--project-accent)] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={`${id}-title`}
          tabIndex="-1"
          data-case-study-heading
          className={`max-w-[18ch] text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] font-medium focus:outline-none ${titleClassName}`}
        >
          {title}
        </h2>
        {introduction ? (
          <p className="mt-7 max-w-[45rem] text-lg leading-[1.7] opacity-70 sm:text-xl">
            {introduction}
          </p>
        ) : null}
      </div>

      <div className={`mt-12 sm:mt-16 ${widthClass} ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}
