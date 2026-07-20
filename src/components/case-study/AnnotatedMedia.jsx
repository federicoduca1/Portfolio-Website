const presentationClasses = {
  dark: {
    frame: 'border-white/10 bg-neutral-900',
    label: 'text-neutral-100',
  },
  light: {
    frame: 'border-neutral-200 bg-neutral-50',
    label: 'text-neutral-950',
  },
  bare: {
    frame: 'border-transparent bg-transparent',
    label: 'text-neutral-950',
  },
};

export default function AnnotatedMedia({
  alt = '',
  annotations = [],
  aspectRatio = '16 / 10',
  caption,
  className = '',
  clipMedia = true,
  frameClassName = '',
  imageClassName = '',
  media,
  placeholderLabel,
  presentation = 'dark',
}) {
  const styles = presentationClasses[presentation] ?? presentationClasses.dark;

  return (
    <figure className={className}>
      <div
        className={`relative rounded-md border ${
          clipMedia ? 'overflow-hidden' : 'overflow-visible'
        } ${styles.frame} ${frameClassName}`}
        style={{ aspectRatio }}
        data-annotation-count={annotations.length || undefined}
      >
        {media?.src ? (
          <img
            src={media.src}
            alt={alt}
            className={`size-full ${
              media.fit === 'cover' ? 'object-cover' : 'object-contain'
            } ${imageClassName}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <span className="absolute top-5 left-5 size-5 border-t border-l border-current opacity-25" />
            <span className="absolute right-5 bottom-5 size-5 border-r border-b border-current opacity-25" />
            <span className="absolute bottom-12 left-5 h-px w-16 bg-[var(--project-accent)] opacity-45" />
            <p className="absolute right-5 bottom-5 left-5 text-xs font-medium tracking-[0.08em] text-neutral-400 uppercase sm:text-sm">
              {placeholderLabel}
            </p>
          </div>
        )}
      </div>

      {caption ? (
        <figcaption
          className={`mt-4 text-sm leading-relaxed sm:text-base ${styles.label}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
