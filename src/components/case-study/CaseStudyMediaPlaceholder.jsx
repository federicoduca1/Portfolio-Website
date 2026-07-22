const orientationRatios = {
  landscape: '16 / 10',
  cinematic: '16 / 8',
  portrait: '4 / 5',
  square: '1 / 1',
};

const widthClasses = {
  full: 'w-full',
  wide: 'w-full max-w-[72rem]',
  medium: 'w-full max-w-[52rem]',
  compact: 'w-full max-w-[36rem]',
};

const themeClasses = {
  light: 'border-neutral-300 bg-neutral-200 text-neutral-600',
  soft: 'border-neutral-300/80 bg-neutral-200/75 text-neutral-600',
  dark: 'border-white/10 bg-white/8 text-neutral-300',
};

export default function CaseStudyMediaPlaceholder({
  alt = '',
  aspectRatio,
  autoPlay = true,
  caption,
  className = '',
  decorative = true,
  embedded = false,
  fill = false,
  label,
  loop = true,
  muted = true,
  objectFit = 'contain',
  objectPosition = 'center',
  orientation = 'landscape',
  playsInline = true,
  poster,
  preload = 'metadata',
  presentation = 'default',
  src,
  theme = 'light',
  videoSources = [],
  width = 'full',
}) {
  const hasImage = Boolean(src);
  const hasVideo = videoSources.length > 0;
  const isPlaceholder = !hasImage && !hasVideo;
  const mediaLabel = alt || label;

  if (presentation === 'hero-breakout' && hasImage) {
    return (
      <figure className={`${widthClasses[width] ?? widthClasses.full} ${className}`}>
        <div className="relative aspect-square overflow-visible sm:aspect-[16/10] lg:aspect-[16/8.5]">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[22%] bottom-0 rounded-2xl border border-neutral-300/80 bg-neutral-200/75 sm:top-[18%] lg:rounded-3xl"
          />
          <img
            src={src}
            alt={decorative ? '' : mediaLabel}
            aria-hidden={decorative ? 'true' : undefined}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute -bottom-[18%] left-1/2 z-10 h-full w-auto max-w-none -translate-x-1/2 object-contain [clip-path:inset(0_0_18%_0)] sm:-bottom-[20%] sm:h-[112%] sm:[clip-path:inset(0_0_17.9%_0)] lg:-bottom-[22%] lg:h-[116%] lg:[clip-path:inset(0_0_19%_0)]"
            style={{ objectPosition }}
          />
        </div>

        {caption ? (
          <figcaption className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={`${widthClasses[width] ?? widthClasses.full} ${className}`}>
      <div
        role={!decorative && isPlaceholder ? 'img' : undefined}
        aria-label={!decorative && isPlaceholder ? mediaLabel : undefined}
        aria-hidden={decorative && isPlaceholder ? 'true' : undefined}
        className={`relative overflow-hidden ${
          embedded ? 'border-0' : 'rounded-lg border'
        } ${
          themeClasses[theme] ?? themeClasses.light
        } ${fill ? 'size-full' : ''}`}
        style={
          fill
            ? undefined
            : {
                aspectRatio:
                  aspectRatio ?? orientationRatios[orientation] ?? '16 / 10',
              }
        }
      >
        {hasImage ? (
          <img
            src={src}
            alt={decorative ? '' : mediaLabel}
            aria-hidden={decorative ? 'true' : undefined}
            loading="lazy"
            decoding="async"
            className="size-full"
            style={{ objectFit, objectPosition }}
          />
        ) : null}

        {hasVideo ? (
          <video
            aria-label={decorative ? undefined : mediaLabel}
            aria-hidden={decorative ? 'true' : undefined}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            poster={poster}
            preload={preload}
            className="size-full motion-reduce:hidden"
            style={{ objectFit, objectPosition }}
          >
            {videoSources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
        ) : null}

        {hasVideo && poster ? (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="hidden size-full object-contain motion-reduce:block"
          />
        ) : null}

        {isPlaceholder ? (
          <div className="flex size-full items-end justify-between gap-6 p-5 sm:p-7 lg:p-8">
            <p className="max-w-[28rem] text-sm leading-snug font-medium sm:text-base">
              {label}
            </p>
            <span
              aria-hidden="true"
              className="h-px w-12 shrink-0 bg-[var(--project-accent)] sm:w-20"
            />
          </div>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
