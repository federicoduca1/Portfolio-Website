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

function useVisibleVideoPlayback(videoRef, enabled) {
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

function InteractionAnimationMedia({ media }) {
  const videoRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const hasVideo = Boolean(media.webm || media.mp4);
  const autoplay = media.autoplay ?? true;
  const showStaticPoster = reducedMotion && media.poster;
  const isDark = media.theme === 'dark';
  const isTransparent = media.surface === 'transparent';
  const radiusClass = media.radius === 'large' ? 'rounded-2xl' : 'rounded-lg';
  const fitClass = media.fit === 'cover' ? 'object-cover' : 'object-contain';

  useVisibleVideoPlayback(
    videoRef,
    hasVideo && autoplay && !reducedMotion,
  );

  const accessibilityProps = media.decorative
    ? { 'aria-hidden': true }
    : { 'aria-label': media.ariaLabel ?? media.label };

  return (
    <div
      className={`relative w-full overflow-hidden ${radiusClass} ${
        isTransparent
          ? 'bg-transparent'
          : isDark
          ? 'border-neutral-700 bg-[var(--project-surface)] text-neutral-300'
          : 'border-neutral-300 bg-neutral-200 text-neutral-600'
      } ${isTransparent ? '' : 'border'}`}
      style={{
        aspectRatio: media.aspectRatio ?? '16 / 9',
        clipPath:
          media.radius === 'large'
            ? 'inset(0 round 1rem)'
            : 'inset(0 round 0.5rem)',
      }}
    >
      {showStaticPoster ? (
        <img
          src={media.poster}
          alt={media.decorative ? '' : media.ariaLabel ?? media.label}
          className={`size-full ${fitClass} ${radiusClass}`}
        />
      ) : hasVideo ? (
        <video
          ref={videoRef}
          {...accessibilityProps}
          loop={media.loop ?? true}
          muted={media.muted ?? true}
          playsInline={media.playsInline ?? true}
          preload={media.preload ?? 'metadata'}
          poster={media.poster}
          className={`size-full ${fitClass} ${radiusClass}`}
        >
          {media.webm ? (
            <source src={media.webm} type="video/webm" />
          ) : null}
          {media.mp4 ? <source src={media.mp4} type="video/mp4" /> : null}
        </video>
      ) : media.poster ? (
        <img
          src={media.poster}
          alt={media.decorative ? '' : media.ariaLabel ?? media.label}
          className={`size-full ${fitClass} ${radiusClass}`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 flex items-end p-5 sm:p-6">
          <span className="text-[0.65rem] font-semibold tracking-[0.11em] uppercase sm:text-xs">
            {media.label}
          </span>
        </div>
      )}
    </div>
  );
}

function ChapterHeading({ chapterNumber, description, title }) {
  return (
    <header className="max-w-[40rem]">
      <h3 className="text-xs font-semibold tracking-[0.13em] uppercase sm:text-sm">
        <span className="text-[var(--project-accent)]">{chapterNumber}</span>
        <span className="text-neutral-500"> — {title}</span>
      </h3>
      <p className="mt-4 text-lg leading-[1.65] text-neutral-700 sm:text-xl">
        {description}
      </p>
    </header>
  );
}

function BehaviourSteps({ steps }) {
  return (
    <div
      className={`mt-6 grid gap-5 ${
        steps.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
      }`}
    >
      {steps.map((step) => (
        <div key={step.label}>
          <p className="text-xs font-semibold tracking-[0.1em] text-neutral-900 uppercase sm:text-sm">
            {step.label}
          </p>
          <p className="mt-2 max-w-[24rem] text-sm leading-[1.6] text-neutral-600 sm:text-base">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function InteractionAnimationChapter({
  chapterNumber,
  description,
  layout = 'stacked',
  media,
  steps,
  title,
}) {
  if (layout === 'split') {
    return (
      <article className="border-t border-neutral-300 pt-10 sm:pt-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.37fr)_minmax(0,0.63fr)] lg:items-center lg:gap-12 xl:gap-16">
          <ChapterHeading
            chapterNumber={chapterNumber}
            description={description}
            title={title}
          />
          <div>
            <InteractionAnimationMedia media={media} />
            <BehaviourSteps steps={steps} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="border-t border-neutral-300 pt-10 sm:pt-12">
      <ChapterHeading
        chapterNumber={chapterNumber}
        description={description}
        title={title}
      />
      <div className="mt-9 sm:mt-10">
        <InteractionAnimationMedia media={media} />
        <BehaviourSteps steps={steps} />
      </div>
    </article>
  );
}
