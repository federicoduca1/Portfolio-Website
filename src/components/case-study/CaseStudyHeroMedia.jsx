import { useEffect, useRef, useState } from 'react';

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

function useVisibleVideoPlayback(videoRef, containerRef, enabled) {
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!enabled || !video || !container) return undefined;

    let isInViewport = true;

    const syncPlayback = () => {
      if (document.hidden || !isInViewport) {
        video.pause();
        return;
      }

      const playback = video.play();
      playback?.catch(() => {
        // The poster remains visible when autoplay is unavailable.
      });
    };

    const handleVisibilityChange = () => syncPlayback();
    const observer =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              isInViewport = entry.isIntersecting;
              syncPlayback();
            },
            { rootMargin: '120px 0px', threshold: 0.01 },
          );

    document.addEventListener('visibilitychange', handleVisibilityChange);
    observer?.observe(container);
    syncPlayback();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer?.disconnect();
      video.pause();
    };
  }, [containerRef, enabled, videoRef]);
}

function BackgroundPlaceholder({ label }) {
  return (
    <div className="case-study-hero__placeholder absolute inset-0">
      <div className="absolute inset-[clamp(2rem,6vw,7rem)] grid grid-cols-6 grid-rows-4 opacity-25">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            className="border-r border-b border-neutral-400/25"
          />
        ))}
      </div>
      <span className="absolute top-[13%] right-[8%] size-[clamp(11rem,25vw,25rem)] rounded-full border border-neutral-300/10" />
      <span className="absolute right-[24%] bottom-[12%] h-[clamp(8rem,18vw,18rem)] w-[clamp(13rem,30vw,30rem)] -skew-x-12 border border-neutral-300/10" />
      <p className="absolute right-6 bottom-6 text-[0.65rem] font-medium tracking-[0.12em] text-neutral-300/35 uppercase sm:right-10 sm:bottom-9">
        {label}
      </p>
    </div>
  );
}

function PosterMedia({ media }) {
  if (!media.poster) return null;

  return (
    <img
      src={media.poster}
      alt=""
      aria-hidden="true"
      className="case-study-hero__media-asset case-study-hero__media-poster"
      fetchPriority="high"
    />
  );
}

function VideoMedia({ containerRef, media, reducedMotion }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sources =
    media.sources ??
    (media.src ? [{ src: media.src, type: media.mimeType }] : []);
  const canPlayVideo = !reducedMotion && sources.length > 0;

  useVisibleVideoPlayback(videoRef, containerRef, canPlayVideo);

  return (
    <>
      <PosterMedia media={media} />
      {canPlayVideo ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.poster}
          className={`case-study-hero__media-asset case-study-hero__media-video ${
            isPlaying ? 'case-study-hero__media-video--playing' : ''
          }`}
          onPlaying={() => setIsPlaying(true)}
          onError={() => setIsPlaying(false)}
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : null}
    </>
  );
}

function ImageMedia({ media, isDecorative }) {
  return (
    <picture className="case-study-hero__media-picture">
      {media.mobile ? (
        <source media="(max-width: 639px)" srcSet={media.mobile} />
      ) : null}
      {media.tablet ? (
        <source media="(max-width: 1023px)" srcSet={media.tablet} />
      ) : null}
      <img
        src={media.desktop}
        alt={isDecorative ? '' : media.alt ?? ''}
        className="case-study-hero__media-asset"
      />
    </picture>
  );
}

export default function CaseStudyHeroMedia({ config, media }) {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const isDecorative = media?.decorative ?? true;
  const mediaType = media?.type ?? 'placeholder';

  let content = <BackgroundPlaceholder label={config.placeholderLabel} />;

  if (mediaType === 'image' && media.desktop) {
    content = <ImageMedia media={media} isDecorative={isDecorative} />;
  } else if (mediaType === 'video') {
    content = (
      <VideoMedia
        containerRef={containerRef}
        media={media}
        reducedMotion={reducedMotion}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden={isDecorative ? 'true' : undefined}
      className={`case-study-hero__background-media absolute inset-0 ${
        media?.edgeFade
          ? 'case-study-hero__background-media--edge-fade'
          : ''
      }`}
      style={{
        '--hero-focal-desktop':
          media?.focalPositionDesktop ?? config.focalPositionDesktop,
        '--hero-focal-tablet':
          media?.focalPositionTablet ??
          config.focalPositionTablet ??
          config.focalPositionDesktop,
        '--hero-focal-mobile':
          media?.focalPositionMobile ?? config.focalPositionMobile,
        '--hero-background-scale-desktop':
          media?.scaleDesktop ?? media?.scale ?? config.backgroundScale,
        '--hero-background-scale-tablet':
          media?.scaleTablet ?? media?.scale ?? config.backgroundScale,
        '--hero-background-scale-mobile':
          media?.scaleMobile ?? media?.scale ?? config.backgroundScale,
        '--hero-background-offset-desktop':
          media?.offsetDesktop ?? media?.offset ?? '0%',
        '--hero-background-offset-tablet':
          media?.offsetTablet ?? media?.offset ?? '0%',
        '--hero-background-offset-mobile':
          media?.offsetMobile ?? media?.offset ?? '0%',
        '--hero-media-fit-desktop': media?.fitDesktop ?? media?.fit ?? 'cover',
        '--hero-media-fit-tablet': media?.fitTablet ?? media?.fit ?? 'cover',
        '--hero-media-fit-mobile': media?.fitMobile ?? media?.fit ?? 'cover',
        '--hero-background-brightness':
          media?.brightness ?? config.brightness,
        '--hero-background-saturation':
          media?.saturation ?? config.saturation,
        '--hero-background-contrast': media?.contrast ?? 1,
      }}
    >
      {content}
    </div>
  );
}
