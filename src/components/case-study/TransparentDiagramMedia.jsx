const alignmentClasses = {
  left: 'mr-auto',
  center: 'mx-auto',
  right: 'ml-auto',
};

const toneClasses = {
  dark: {
    placeholder: 'bg-white/[0.025] text-neutral-400',
    caption: 'text-neutral-400',
  },
  light: {
    placeholder: 'bg-neutral-900/[0.025] text-neutral-500',
    caption: 'text-neutral-600',
  },
};

export default function TransparentDiagramMedia({
  alignment = 'center',
  aspectRatio = '16 / 9',
  caption,
  className = '',
  compactMaxWidth = '100%',
  label,
  maxWidth = '100%',
  media,
  scale = 1,
  tone = 'dark',
}) {
  const styles = toneClasses[tone] ?? toneClasses.dark;
  const alignmentClass = alignmentClasses[alignment] ?? alignmentClasses.center;

  return (
    <figure
      className={`transparent-diagram-media w-full ${alignmentClass} ${className}`}
      style={{
        '--diagram-max-width': maxWidth,
        '--diagram-max-width-compact': compactMaxWidth,
      }}
    >
      <div
        className={`relative w-full ${media?.src ? '' : styles.placeholder}`}
        style={{ aspectRatio }}
      >
        {media?.src ? (
          <img
            src={media.src}
            alt={media.alt ?? ''}
            className="size-full object-contain"
            loading={media.loading ?? 'lazy'}
            decoding="async"
            style={{ transform: `scale(${scale})` }}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center p-6 text-center"
          >
            <div>
              <span className="mx-auto mb-4 block h-px w-10 bg-[var(--project-accent)] opacity-70" />
              <p className="text-xs font-medium tracking-[0.1em] uppercase sm:text-sm">
                {label}
              </p>
            </div>
          </div>
        )}
      </div>

      {caption ? (
        <figcaption
          className={`mt-4 max-w-[46rem] text-sm leading-[1.65] sm:text-base ${styles.caption}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
