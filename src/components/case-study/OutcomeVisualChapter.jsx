import { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const handleChange = (event) => setReducedMotion(event.matches);

    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

function useVisibleVideo(videoRef, enabled) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) {
      video?.pause();
      return undefined;
    }

    let isVisible = false;

    const syncPlayback = () => {
      if (isVisible && !document.hidden) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
        syncPlayback();
      },
      { threshold: [0, 0.15] },
    );

    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, [enabled, videoRef]);
}

function OutcomeMedia({ item, className = '' }) {
  const videoRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const media = item.media ?? {};
  const hasVideo = Boolean(media.webm || media.mp4);
  const autoplay = media.autoplay ?? true;
  const showStaticPoster = reducedMotion && media.poster;
  const isDark = item.theme === 'dark';
  const isTransparent = item.surface === 'transparent';
  const mediaStyle = media.scale
    ? { transform: `scale(${media.scale})` }
    : undefined;

  useVisibleVideo(videoRef, hasVideo && autoplay && !reducedMotion);

  return (
    <figure
      className={className}
      style={
        item.maxWidth
          ? { maxWidth: item.maxWidth, marginInline: 'auto' }
          : undefined
      }
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg ${
          isTransparent
            ? 'bg-transparent'
            : isDark
            ? 'border-neutral-700 bg-[var(--project-surface)] text-neutral-300'
            : 'border-neutral-300 bg-neutral-200 text-neutral-600'
        } ${isTransparent ? '' : 'border'}`}
        style={{ aspectRatio: item.aspectRatio ?? '16 / 9' }}
      >
        {showStaticPoster ? (
          <img
            src={media.poster}
            alt={media.decorative ? '' : media.alt ?? item.label}
            className="size-full object-contain"
            style={mediaStyle}
          />
        ) : hasVideo ? (
          <video
            ref={videoRef}
            aria-hidden={media.decorative || undefined}
            aria-label={media.decorative ? undefined : media.ariaLabel}
            loop={media.loop ?? true}
            muted={media.muted ?? true}
            playsInline={media.playsInline ?? true}
            preload={media.preload ?? 'metadata'}
            poster={media.poster}
            className={`size-full ${
              media.fit === 'cover' ? 'object-cover' : 'object-contain'
            }`}
            style={mediaStyle}
          >
            {media.webm ? (
              <source src={media.webm} type="video/webm" />
            ) : null}
            {media.mp4 ? <source src={media.mp4} type="video/mp4" /> : null}
          </video>
        ) : media.src ? (
          <img
            src={media.src}
            alt={media.alt ?? item.label}
            className={`size-full ${
              media.fit === 'cover' ? 'object-cover' : 'object-contain'
            }`}
            style={mediaStyle}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end p-5 sm:p-6"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.11em] uppercase sm:text-xs">
              {item.label}
            </span>
          </div>
        )}
      </div>

      {item.caption ? (
        <figcaption className="mt-4 max-w-[48rem] text-sm leading-[1.65] text-neutral-600 sm:text-base">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ChapterMedia({ chapter }) {
  const [primary, ...supporting] = chapter.items;

  if (chapter.layout === 'dominant-support') {
    return (
      <div>
        <OutcomeMedia item={primary} />
        {supporting[0] ? (
          <OutcomeMedia
            item={supporting[0]}
            className="mt-6 ml-auto w-full sm:max-w-[48%]"
          />
        ) : null}
      </div>
    );
  }

  if (chapter.layout === 'asymmetric') {
    return (
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(14rem,0.65fr)] lg:grid-rows-2">
        <OutcomeMedia item={primary} className="lg:row-span-2" />
        {supporting.map((item) => (
          <OutcomeMedia key={item.id} item={item} />
        ))}
      </div>
    );
  }

  if (chapter.layout === 'detail') {
    return (
      <div>
        <OutcomeMedia item={primary} />
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {supporting.map((item) => (
            <OutcomeMedia key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }

  return <OutcomeMedia item={primary} />;
}

export default function OutcomeVisualChapter({ chapter }) {
  return (
    <article>
      <header className="max-w-[44rem]">
        <h3 className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {chapter.label}
        </h3>
        {chapter.copy ? (
          <p className="mt-4 text-lg leading-[1.65] text-neutral-700 sm:text-xl">
            {chapter.copy}
          </p>
        ) : null}
      </header>

      <div className="mt-8 sm:mt-10">
        <ChapterMedia chapter={chapter} />
      </div>
    </article>
  );
}
