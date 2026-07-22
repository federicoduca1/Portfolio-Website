const accentClasses = {
  primary: 'bg-[var(--project-accent)]',
  secondary: 'bg-[var(--project-accent-secondary)]',
};

export default function EditorialStatement({
  accent = 'primary',
  as: Tag = 'p',
  children,
  className = '',
}) {
  return (
    <div
      className={`flex max-w-[60rem] items-stretch gap-5 sm:gap-7 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`w-0.5 shrink-0 rounded-full ${
          accentClasses[accent] ?? accentClasses.primary
        }`}
      />
      <Tag className="text-[clamp(1.75rem,3.2vw,3.5rem)] leading-[1.23] font-medium text-neutral-900">
        {children}
      </Tag>
    </div>
  );
}
