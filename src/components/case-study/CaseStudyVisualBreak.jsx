import { useEffect, useRef, useState } from 'react';
import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';

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

function useVisiblePlayback(videoRef, containerRef, enabled) {
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!enabled || !video || !container) return undefined;

    let isVisible = false;

    const syncPlayback = () => {
      if (document.hidden || !isVisible) {
        video.pause();
        return;
      }

      video.play()?.catch(() => {
        // The poster remains visible if autoplay is unavailable.
      });
    };

    const observer =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              isVisible = entry.isIntersecting;
              syncPlayback();
            },
            { rootMargin: '80px 0px', threshold: 0.08 },
          );

    const handleVisibilityChange = () => syncPlayback();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    observer?.observe(container);

    if (!observer) {
      isVisible = true;
      syncPlayback();
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer?.disconnect();
      video.pause();
    };
  }, [containerRef, enabled, videoRef]);
}

function VisualBreakVideo({ containerRef, media, reducedMotion }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sources = media.sources ?? [];
  const canPlay = !reducedMotion && sources.length > 0;

  useVisiblePlayback(videoRef, containerRef, canPlay);

  return (
    <>
      {media.poster ? (
        <img
          src={media.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-contain"
        />
      ) : null}

      {canPlay ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          tabIndex={-1}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.poster}
          className={`absolute inset-0 size-full object-contain transition-opacity duration-300 ${
            isPlaying ? 'opacity-100' : 'opacity-0'
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

function VisualBreakMedia({ containerRef, media, reducedMotion }) {
  if (!media) return null;

  if (media.type === 'video') {
    return (
      <VisualBreakVideo
        containerRef={containerRef}
        media={media}
        reducedMotion={reducedMotion}
      />
    );
  }

  if (media.type === 'image' && media.src) {
    return (
      <img
        src={media.src}
        alt={media.alt ?? ''}
        className="absolute inset-0 size-full"
        style={{
          objectFit: media.fit ?? 'contain',
          objectPosition: media.objectPosition ?? 'center',
          transform: media.scale ? `scale(${media.scale})` : undefined,
          transformOrigin: media.transformOrigin ?? media.objectPosition,
        }}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return null;
}

export default function CaseStudyVisualBreak({
  aspectRatio,
  caption,
  children,
  heading,
  headingLines,
  introduction,
  layout = 'contained',
  media,
  mediaAlignment = 'left',
  mediaFlushBottom = false,
  mediaFrame = 'framed',
  mediaWidth = '82%',
  placeholderLabel,
  spacing = 'default',
  theme = 'dark',
  variant = media?.type ?? 'custom',
}) {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const isDark = theme === 'dark';
  const isCompact = spacing === 'compact';
  const wideSpacingClass = mediaFlushBottom
    ? 'pt-12 pb-0 sm:pt-14 lg:pt-16'
    : isCompact
      ? 'py-12 sm:py-14 lg:py-16'
      : 'py-16 sm:py-20 lg:py-24';
  const containedSpacingClass = mediaFlushBottom
    ? 'pt-14 pb-0 sm:pt-16 lg:pt-20'
    : isCompact
      ? 'py-14 sm:py-16 lg:py-20'
      : 'py-20 sm:py-24 lg:py-32';
  const containerClass =
    layout === 'wide'
      ? `w-full px-4 sm:px-6 lg:px-8 ${wideSpacingClass}`
      : `mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 ${containedSpacingClass}`;
  const mediaAlignmentClass =
    mediaAlignment === 'center'
      ? 'mx-auto'
      : mediaAlignment === 'right'
        ? 'ml-auto'
        : '';

  return (
    <section
      className={`case-study-visual-break case-study-visual-break--${variant} ${
        isDark
          ? 'bg-neutral-950 text-neutral-50'
          : 'bg-neutral-50 text-neutral-950'
      }`}
    >
      <div className={containerClass}>
        <div
          className={`w-full lg:w-[var(--visual-break-media-width)] ${mediaAlignmentClass}`}
          style={{ '--visual-break-media-width': mediaWidth }}
        >
          <h2 className="text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.08] font-medium">
            {headingLines?.length
              ? headingLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))
              : heading}
          </h2>
          {introduction ? (
            <p className="mt-6 max-w-[48rem] text-lg leading-[1.7] text-neutral-300 sm:text-xl">
              {introduction}
            </p>
          ) : null}

          <figure className="mt-10 w-full sm:mt-12">
            <div
              ref={containerRef}
              className={`relative overflow-hidden ${
                mediaFrame === 'seamless'
                  ? 'bg-transparent'
                  : 'rounded-lg border border-white/10 bg-black'
              }`}
              style={{ aspectRatio: aspectRatio ?? media?.aspectRatio ?? '16 / 9' }}
            >
              {children ??
                (media ? (
                  <VisualBreakMedia
                    containerRef={containerRef}
                    media={media}
                    reducedMotion={reducedMotion}
                  />
                ) : (
                  <CaseStudyMediaPlaceholder
                    label={placeholderLabel ?? 'Project visual'}
                    theme="dark"
                    fill
                    embedded
                  />
                ))}
            </div>

            {caption ? (
              <figcaption className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
                {caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      </div>
    </section>
  );
}
