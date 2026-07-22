import { useEffect, useRef, useState } from 'react';
import OutcomeCatalogChapter from './OutcomeCatalogChapter.jsx';
import OutcomeComparisonChapter from './OutcomeComparisonChapter.jsx';
import OutcomeDeviceContinuation from './OutcomeDeviceContinuation.jsx';
import OutcomeNarrativeRow from './OutcomeNarrativeRow.jsx';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const ENHANCED_WALKTHROUGH_QUERY =
  '(min-width: 1180px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)';

function getMediaGroupClass(theme) {
  return theme === 'dark'
    ? 'rounded-2xl bg-[var(--project-surface)] px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16'
    : '';
}

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

function useEnhancedWalkthrough(enabled) {
  const [isEnhanced, setIsEnhanced] = useState(() =>
    typeof window === 'undefined'
      ? false
      : enabled && window.matchMedia(ENHANCED_WALKTHROUGH_QUERY).matches,
  );

  useEffect(() => {
    if (!enabled) {
      setIsEnhanced(false);
      return undefined;
    }

    const mediaQuery = window.matchMedia(ENHANCED_WALKTHROUGH_QUERY);
    const handleChange = (event) => setIsEnhanced(event.matches);

    setIsEnhanced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enabled]);

  return isEnhanced;
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

function OutcomeMedia({ item, className = '', playbackEnabled = true }) {
  const videoRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const media = item.media ?? {};
  const hasVideo = Boolean(media.webm || media.mp4);
  const autoplay = media.autoplay ?? true;
  const showStaticPoster = reducedMotion && media.poster;
  const isDark = item.theme === 'dark';
  const isTransparent = item.surface === 'transparent';
  const isDarkMuted = item.surface === 'dark-muted';
  const hasBorder = item.border !== false && !isTransparent;
  const mediaStyle =
    media.scale || media.blendMode
      ? {
          ...(media.scale ? { transform: `scale(${media.scale})` } : {}),
          ...(media.blendMode ? { mixBlendMode: media.blendMode } : {}),
        }
      : undefined;

  useVisibleVideo(
    videoRef,
    hasVideo && autoplay && !reducedMotion && playbackEnabled,
  );

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
            : isDarkMuted
            ? 'border-neutral-700 bg-neutral-800 text-neutral-400'
            : isDark
            ? 'border-neutral-700 bg-[var(--project-surface)] text-neutral-300'
            : 'border-neutral-300 bg-neutral-200 text-neutral-600'
        } ${hasBorder ? 'border' : ''}`}
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

function OutcomeMediaNarrative({ item }) {
  return (
    <div className="mt-6 max-w-[43rem]">
      <h5 className="text-2xl leading-tight font-medium text-neutral-50 sm:text-3xl">
        {item.title}
      </h5>
      <p className="mt-3 text-base leading-[1.7] text-neutral-400 sm:text-lg">
        {item.description}
      </p>
    </div>
  );
}

function OutcomeExplodedVisual({
  continuationMedia,
  detailMedia,
  deviceMedia,
  overlapStrength = 'medium',
}) {
  const desktopPositions =
    overlapStrength === 'subtle'
      ? {
          continuation: 'lg:top-[38%] lg:left-[4%]',
          detail: 'lg:right-[1%] lg:bottom-[2%]',
        }
      : {
          continuation: 'lg:top-[34%] lg:left-[3%]',
          detail: 'lg:right-[1%] lg:bottom-[4%]',
        };

  return (
    <div className="mx-auto grid w-full gap-5 md:grid-cols-12 lg:relative lg:block lg:h-[clamp(34rem,48vw,44rem)] lg:w-[88%]">
      {deviceMedia ? (
        <OutcomeMedia
          item={deviceMedia}
          className="md:col-span-8 md:col-start-3 lg:absolute lg:top-0 lg:left-[18%] lg:z-20 lg:w-[62%]"
        />
      ) : null}
      {continuationMedia ? (
        <OutcomeMedia
          item={continuationMedia}
          className={`md:col-span-9 lg:absolute lg:z-10 lg:w-[66%] ${desktopPositions.continuation}`}
        />
      ) : null}
      {detailMedia ? (
        <OutcomeMedia
          item={detailMedia}
          className={`md:col-span-5 md:col-start-8 md:-mt-12 lg:absolute lg:z-30 lg:mt-0 lg:w-[38%] ${desktopPositions.detail}`}
        />
      ) : null}
    </div>
  );
}

function OutcomeInteractionChapter({ content }) {
  return (
    <section className="mt-16 rounded-2xl bg-[var(--project-surface)] px-4 py-10 text-neutral-50 sm:mt-20 sm:px-8 sm:py-14 lg:mt-24 lg:px-12 lg:py-16">
      <header>
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {content.eyebrow}
        </p>
        <h4 className="mt-4 max-w-[18ch] text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.08] font-medium">
          {content.title}
        </h4>
        <p className="mt-5 max-w-[44rem] text-base leading-[1.7] text-neutral-400 sm:text-lg">
          {content.copy}
        </p>
      </header>

      <div className="mt-12 sm:mt-16">
        <OutcomeMedia item={content.primary} />
        <OutcomeMediaNarrative item={content.primary} />
      </div>

      <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(14rem,0.65fr)] lg:items-start lg:gap-8">
        <div>
          <OutcomeMedia item={content.supporting} />
          <OutcomeMediaNarrative item={content.supporting} />
        </div>
        {content.detail ? <OutcomeMedia item={content.detail} /> : null}
      </div>
    </section>
  );
}

function OutcomeStepText({ index, step, compact = false }) {
  return (
    <div className="max-w-[40rem]">
      <p className="text-sm font-semibold text-[var(--project-accent)]">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h5
        className={`${compact ? 'mt-1 text-2xl' : 'mt-2 text-2xl sm:text-3xl'} leading-tight font-medium text-neutral-50`}
      >
        {step.title}
      </h5>
      <p
        className={`${compact ? 'mt-1.5 text-base' : 'mt-3 text-base sm:text-lg'} leading-[1.65] text-neutral-400`}
      >
        {step.description}
      </p>
    </div>
  );
}

function OutcomeStepIndicator({ activeIndex, stepCount }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 flex-col items-center justify-between self-center"
    >
      <span className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-neutral-700" />
      <span
        className="absolute top-2 bottom-2 left-1/2 w-px origin-top -translate-x-1/2 bg-[var(--project-accent)]"
        style={{ transform: 'translateX(-50%) scaleY(var(--outcome-progress))' }}
      />
      {Array.from({ length: stepCount }, (_, index) => (
        <span
          key={index}
          className={`relative z-10 size-3 rounded-full border transition-colors duration-200 ${
            index === activeIndex
              ? 'border-[var(--project-accent)] bg-[var(--project-accent)]'
              : 'border-neutral-500 bg-[var(--project-surface)]'
          }`}
        />
      ))}
    </div>
  );
}

function StackedOutcomeWalkthrough({ steps }) {
  return (
    <div className="space-y-14 sm:space-y-16">
      {steps.map((step, index) => (
        <article key={step.id}>
          <OutcomeMedia item={step} />
          <div className="mt-7">
            <OutcomeStepText index={index} step={step} />
          </div>
        </article>
      ))}
    </div>
  );
}

function StickyOutcomeWalkthrough({ sectionHeightPerStep = 75, steps }) {
  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isEnhanced = useEnhancedWalkthrough(true);

  useEffect(() => {
    if (!isEnhanced || steps.length < 2) return undefined;

    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return undefined;

    let frameId = 0;

    const update = () => {
      frameId = 0;
      const bounds = track.getBoundingClientRect();
      const stickyTop = Number.parseFloat(getComputedStyle(sticky).top) || 0;
      const scrollRange = Math.max(track.offsetHeight - sticky.offsetHeight, 1);
      const progress = Math.min(
        1,
        Math.max(0, (stickyTop - bounds.top) / scrollRange),
      );

      track.style.setProperty('--outcome-progress', progress);
      setActiveIndex((current) => {
        const midpoint = 0.5;
        const hysteresis = 0.025;

        if (current === 0 && progress >= midpoint + hysteresis) return 1;
        if (current === 1 && progress <= midpoint - hysteresis) return 0;
        return current;
      });
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
      track.style.removeProperty('--outcome-progress');
    };
  }, [isEnhanced, steps.length]);

  if (!isEnhanced || steps.length < 2) {
    return <StackedOutcomeWalkthrough steps={steps} />;
  }

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{
        height: `${Math.max(150, steps.length * sectionHeightPerStep)}svh`,
        '--outcome-progress': 0,
      }}
    >
      <div
        ref={stickyRef}
        className="sticky top-[calc(var(--site-header-height)+0.75rem)] h-[clamp(40rem,calc(100svh-var(--site-header-height)-1.5rem),54rem)]"
      >
        <div className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_12rem]">
          <div className="grid min-h-0 grid-cols-[minmax(0,1fr)_1.25rem] gap-4">
            <div className="relative min-h-0">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                const translateClass =
                  index < activeIndex ? '-translate-y-3' : 'translate-y-3';

                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 flex items-center transition-[opacity,transform] duration-300 ease-out ${
                      isActive
                        ? 'z-10 translate-y-0 opacity-100'
                        : `${translateClass} pointer-events-none opacity-0`
                    }`}
                  >
                    <OutcomeMedia
                      item={step}
                      className="mx-auto w-[90%] max-w-[64rem]"
                      playbackEnabled={isActive}
                    />
                  </div>
                );
              })}
            </div>

            <OutcomeStepIndicator
              activeIndex={activeIndex}
              stepCount={steps.length}
            />
          </div>

          <div className="relative">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const translateClass =
                index < activeIndex ? '-translate-y-2' : 'translate-y-2';

              return (
                <div
                  key={step.id}
                  className={`absolute inset-x-0 top-5 transition-[opacity,transform] duration-300 ease-out ${
                    isActive
                      ? 'translate-y-0 opacity-100'
                      : `${translateClass} pointer-events-none opacity-0`
                  }`}
                >
                  <OutcomeStepText compact index={index} step={step} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChapterMedia({ chapter }) {
  const [primary, ...supporting] = chapter.items ?? [];

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

  if (chapter.layout === 'staggered') {
    const walkthroughSteps = supporting.slice(0, 2);
    const usesWalkthrough = chapter.supportingPresentation === 'walkthrough';

    return (
      <div>
        <OutcomeMedia item={primary} />

        <div
          className={`mt-12 sm:mt-16 lg:mt-20 ${getMediaGroupClass(
            chapter.supportingMediaGroupTheme,
          )}`}
        >
          {chapter.supportingIntroduction ? (
            <header>
              <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
                {chapter.supportingIntroduction.eyebrow}
              </p>
              <h4 className="mt-4 max-w-[18ch] text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.08] font-medium text-neutral-50">
                {chapter.supportingIntroduction.title}
              </h4>
              <p className="mt-5 max-w-[44rem] text-base leading-[1.7] text-neutral-400 sm:text-lg">
                {chapter.supportingIntroduction.copy}
              </p>
            </header>
          ) : null}

          <div
            className={
              chapter.supportingIntroduction ? 'mt-12 sm:mt-16' : ''
            }
          >
            {usesWalkthrough ? (
              <StickyOutcomeWalkthrough
                sectionHeightPerStep={chapter.sectionHeightPerStep}
                steps={walkthroughSteps}
              />
            ) : (
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-y-0">
                {supporting[0] ? (
                  <OutcomeMedia
                    item={supporting[0]}
                    className="relative z-0 lg:col-span-8 lg:col-start-1"
                  />
                ) : null}
                {supporting[1] ? (
                  <OutcomeMedia
                    item={supporting[1]}
                    className="relative z-10 lg:col-span-8 lg:col-start-5 lg:-mt-[9%]"
                  />
                ) : null}
              </div>
            )}
          </div>

          {supporting.slice(2).map((item) => (
            <OutcomeMedia
              key={item.id}
              item={item}
              className="mt-12 sm:mt-16 lg:mt-20"
            />
          ))}
        </div>
      </div>
    );
  }

  if (chapter.layout === 'exploded') {
    return (
      <div>
        <OutcomeExplodedVisual {...chapter.explodedVisual} />
        {chapter.interaction ? (
          <OutcomeInteractionChapter content={chapter.interaction} />
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

function OutcomeDeviceContinuationChapter({ chapter }) {
  return (
    <article className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1.12fr)] lg:items-center lg:gap-[clamp(2rem,4vw,4.5rem)]">
      <div>
        <header className="max-w-[42rem]">
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {chapter.label}
          </p>
          {chapter.title ? (
            <h3 className="mt-4 max-w-[18ch] text-[clamp(2.15rem,4vw,3.8rem)] leading-[1.08] font-medium text-neutral-950">
              {chapter.title}
            </h3>
          ) : null}
          <p
            className={`${chapter.title ? 'mt-5' : 'mt-4'} text-base leading-[1.65] text-neutral-700 sm:text-lg`}
          >
            {chapter.copy}
          </p>
        </header>

        <div className="mt-7 border-b border-neutral-300 sm:mt-8">
          {chapter.rows.map((row) => (
            <OutcomeNarrativeRow
              key={row.number}
              {...row}
              compact={chapter.compactNarrative}
            />
          ))}
        </div>
      </div>

      <OutcomeDeviceContinuation
        {...chapter.visual}
        renderMedia={(item, className) => (
          <OutcomeMedia item={item} className={className} />
        )}
      />
    </article>
  );
}

export default function OutcomeVisualChapter({ chapter }) {
  if (chapter.layout === 'device-continuation') {
    return <OutcomeDeviceContinuationChapter chapter={chapter} />;
  }

  if (chapter.layout === 'comparison') {
    return (
      <OutcomeComparisonChapter
        content={chapter}
        renderMedia={(item, className) => (
          <OutcomeMedia item={item} className={className} />
        )}
      />
    );
  }

  if (chapter.layout === 'catalog') {
    return (
      <OutcomeCatalogChapter
        content={chapter}
        renderMedia={(item, className) => (
          <OutcomeMedia item={item} className={className} />
        )}
      />
    );
  }

  const hasHeader = Boolean(chapter.label || chapter.title || chapter.copy);
  const mediaGroupClass = getMediaGroupClass(chapter.mediaGroupTheme);

  return (
    <article>
      {hasHeader ? (
        <header className="max-w-[44rem]">
          {chapter.label ? (
            chapter.title ? (
              <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
                {chapter.label}
              </p>
            ) : (
              <h3 className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
                {chapter.label}
              </h3>
            )
          ) : null}
          {chapter.title ? (
            <h3 className="mt-4 max-w-[18ch] text-[clamp(2.15rem,4vw,3.8rem)] leading-[1.08] font-medium text-neutral-950">
              {chapter.title}
            </h3>
          ) : null}
          {chapter.copy ? (
            <p
              className={`${chapter.title ? 'mt-5' : 'mt-4'} text-lg leading-[1.65] text-neutral-700 sm:text-xl`}
            >
              {chapter.copy}
            </p>
          ) : null}
        </header>
      ) : null}

      <div
        className={`${hasHeader ? 'mt-8 sm:mt-10' : ''} ${mediaGroupClass}`}
      >
        <ChapterMedia chapter={chapter} />
      </div>
    </article>
  );
}
