const aspectClasses = {
  video: 'aspect-video',
  landscape: 'aspect-[16/10]',
  architecture: 'aspect-[16/7]',
  hero: 'aspect-[16/8.5]',
  heroCompact: 'aspect-[16/8] sm:aspect-[16/7.75] lg:aspect-[16/7.5]',
  square: 'aspect-square',
  detail: 'aspect-[4/3]',
};

const aspectLabels = {
  video: '16:9',
  landscape: '16:10',
  architecture: '16:7',
  hero: 'Editorial',
  heroCompact: 'Compact editorial',
  square: '1:1',
  detail: '4:3',
};

export default function MediaPlaceholder({
  label,
  caption,
  aspect = 'landscape',
  tone = 'light',
  media,
  className = '',
  presentation = 'default',
}) {
  const isEditorialHero = presentation === 'hero';
  const isTopBreakout = isEditorialHero && media?.breakout === 'top';
  const heroMediaStyle = isTopBreakout
    ? {
        '--case-study-media-offset-desktop': media.mediaOffsetDesktop,
        '--case-study-media-offset-tablet': media.mediaOffsetTablet,
        '--case-study-media-offset-mobile': media.mediaOffsetMobile,
        '--case-study-media-scale-desktop':
          media.mediaScaleDesktop ?? media.mediaScale,
        '--case-study-media-scale-tablet':
          media.mediaScaleTablet ?? media.mediaScale,
        '--case-study-media-scale-mobile':
          media.mediaScaleMobile ?? media.mediaScale,
        '--case-study-media-width': media.mediaWidth,
        '--case-study-media-radius': media.panelRadius,
      }
    : undefined;
  let mediaContent = null;

  if (media?.type === 'image') {
    mediaContent = (
      <img
        src={media.src}
        alt={media.alt ?? label}
        loading={media.loading ?? 'lazy'}
        decoding="async"
        fetchPriority={media.fetchPriority}
        className={
          isTopBreakout
            ? 'case-study-media__hero-breakout'
            : `size-full ${
                media.fit === 'contain' ? 'object-contain' : 'object-cover'
              }`
        }
        style={{ objectPosition: media.focalPosition }}
      />
    );
  } else if (media?.type === 'video') {
    mediaContent = (
      <video
        aria-label={media.alt ?? label}
        controls
        muted
        playsInline
        preload="metadata"
        poster={media.poster}
        className="size-full object-cover"
      >
        <source src={media.src} type={media.mimeType} />
      </video>
    );
  }

  if (isEditorialHero) {
    return (
      <figure className={className}>
        <div
          className={`relative overflow-visible ${
            aspectClasses[aspect] ?? aspectClasses.landscape
          }`}
          style={heroMediaStyle}
        >
          <div
            role={mediaContent ? undefined : 'img'}
            aria-label={mediaContent ? undefined : label}
            className={`case-study-media case-study-media--${tone} case-study-media__hero-panel absolute inset-0 overflow-hidden`}
            style={
              media?.backgroundColor
                ? { backgroundColor: media.backgroundColor }
                : undefined
            }
          >
            {!isTopBreakout ? mediaContent : null}
            {!mediaContent ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-[clamp(1.25rem,4vw,4rem)] border border-current opacity-10"
                />
                <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-5 sm:right-8 sm:bottom-8 sm:left-8">
                  <p className="max-w-[28rem] text-sm leading-snug font-medium sm:text-base">
                    {label}
                  </p>
                  <span
                    aria-hidden="true"
                    className="h-px w-14 shrink-0 bg-[var(--project-accent)] sm:w-24"
                  />
                </div>
              </>
            ) : null}
          </div>

          {isTopBreakout ? mediaContent : null}
        </div>

        {caption ? (
          <figcaption className="mt-3 text-sm leading-relaxed opacity-65 sm:text-base">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div
        role={mediaContent ? undefined : 'img'}
        aria-label={mediaContent ? undefined : label}
        className={`case-study-media case-study-media--${tone} relative ${
          aspectClasses[aspect] ?? aspectClasses.landscape
        } overflow-hidden`}
      >
        {mediaContent ?? (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-4 grid grid-cols-6 grid-rows-4 opacity-55 sm:inset-6"
            >
              {Array.from({ length: 24 }, (_, index) => (
                <span
                  key={index}
                  className="border-r border-b border-current opacity-10"
                />
              ))}
            </div>
            <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[0.65rem] font-medium tracking-[0.12em] uppercase opacity-55 sm:inset-x-7 sm:top-7">
              <span>Media module</span>
              <span>{aspectLabels[aspect] ?? 'Responsive'}</span>
            </div>
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 sm:inset-x-7 sm:bottom-7">
              <p className="max-w-[26rem] text-sm leading-snug font-medium sm:text-base">
                {label}
              </p>
              <span
                aria-hidden="true"
                className="h-px w-12 shrink-0 bg-[var(--project-accent)] sm:w-20"
              />
            </div>
          </>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed opacity-65 sm:text-base">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
