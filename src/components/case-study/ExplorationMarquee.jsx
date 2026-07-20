import { useEffect, useRef, useState } from 'react';
import PlaygroundDragCursor from '../home/PlaygroundDragCursor.jsx';

const COMPACT_QUERY = '(max-width: 767px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const RESUME_DELAY = 1100;

const sizeClasses = {
  wide: 'h-[36rem]',
  medium: 'h-[34rem]',
  portrait: 'h-[36rem]',
};

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

function ExplorationItem({ compact = false, item }) {
  const sizeClass = sizeClasses[item.size] ?? sizeClasses.medium;

  return (
    <figure
      aria-label={`${item.label}: ${item.caption}`}
      className={
        compact
          ? 'h-[min(82vw,22rem)] w-full shrink-0 snap-center'
          : `shrink-0 ${sizeClass}`
      }
      style={compact ? undefined : { aspectRatio: item.aspectRatio }}
    >
      {item.media?.src ? (
        <img
          src={item.media.src}
          alt={item.media.alt ?? ''}
          className="size-full object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          aria-hidden="true"
          className="mx-auto h-full aspect-[3/4] rounded-lg bg-neutral-100"
        />
      )}
    </figure>
  );
}

function ExplorationGroup({ ariaHidden, groupRef, items }) {
  return (
    <div
      ref={groupRef}
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-[var(--exploration-gap)]"
    >
      {items.map((item) => (
        <ExplorationItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default function ExplorationMarquee({
  autoplay = true,
  gap = 'clamp(0.4rem, 0.8vw, 0.75rem)',
  introduction,
  items,
  label,
  pauseOnHover = false,
  speed = 26,
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const firstGroupRef = useRef(null);
  const cycleWidthRef = useRef(0);
  const animationRef = useRef(null);
  const playbackRateFrameRef = useRef(0);
  const resumeTimerRef = useRef(0);
  const compactScrollFrameRef = useRef(0);
  const cursorFrameRef = useRef(0);
  const cursorRef = useRef(null);
  const dragRef = useRef(null);
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isCompact = useMediaQuery(COMPACT_QUERY);
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const canAutoplay = autoplay && !isCompact && !prefersReducedMotion;

  const canResume = () =>
    !dragRef.current &&
    !focusedRef.current &&
    !(pauseOnHover && hoveredRef.current);

  const transitionPlaybackRate = (targetRate, duration = 900) => {
    window.cancelAnimationFrame(playbackRateFrameRef.current);

    const animation = animationRef.current;
    if (!animation) return;

    const initialRate = animation.playbackRate;
    const startTime = performance.now();

    if (targetRate > 0 && animation.playState === 'paused') {
      animation.play();
    }

    const update = (time) => {
      if (animation !== animationRef.current) return;

      const progress = Math.min(1, (time - startTime) / duration);
      const easedProgress = progress * progress * (3 - 2 * progress);
      animation.playbackRate =
        initialRate + (targetRate - initialRate) * easedProgress;

      if (progress < 1) {
        playbackRateFrameRef.current = window.requestAnimationFrame(update);
      } else if (targetRate === 0) {
        animation.pause();
      }
    };

    playbackRateFrameRef.current = window.requestAnimationFrame(update);
  };

  const resumeWhenReady = () => {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      if (canResume()) transitionPlaybackRate(1);
    }, RESUME_DELAY);
  };

  const pauseTemporarily = () => {
    animationRef.current?.pause();
    resumeWhenReady();
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;
    if (!canAutoplay || !viewport || !track || !firstGroup) return undefined;

    let setupFrame = 0;

    const createAnimation = () => {
      const gapSize = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const cycleWidth = firstGroup.getBoundingClientRect().width + gapSize;
      cycleWidthRef.current = cycleWidth;
      animationRef.current?.cancel();

      if (!cycleWidth) return;

      const animation = track.animate(
        [
          { transform: 'translate3d(0, 0, 0)' },
          { transform: `translate3d(${-cycleWidth}px, 0, 0)` },
        ],
        {
          duration: (cycleWidth / speed) * 1000,
          easing: 'linear',
          iterations: Infinity,
        },
      );

      animationRef.current = animation;
      if (!canResume()) animation.pause();
    };

    setupFrame = window.requestAnimationFrame(createAnimation);
    const resizeObserver = new ResizeObserver(createAnimation);
    resizeObserver.observe(firstGroup);
    resizeObserver.observe(viewport);

    return () => {
      window.cancelAnimationFrame(setupFrame);
      resizeObserver.disconnect();
      animationRef.current?.cancel();
      animationRef.current = null;
      cycleWidthRef.current = 0;
    };
  }, [canAutoplay, gap, items.length, pauseOnHover, speed]);

  useEffect(
    () => () => {
      window.clearTimeout(resumeTimerRef.current);
      window.cancelAnimationFrame(compactScrollFrameRef.current);
      window.cancelAnimationFrame(cursorFrameRef.current);
      window.cancelAnimationFrame(playbackRateFrameRef.current);
    },
    [],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const cursor = cursorRef.current;
    const supportsFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;

    if (
      !viewport ||
      !cursor ||
      isCompact ||
      prefersReducedMotion ||
      !supportsFinePointer
    ) {
      return undefined;
    }

    let currentX = -120;
    let currentY = -120;
    let targetX = -120;
    let targetY = -120;

    const updateCursor = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      cursor.style.setProperty('--drag-cursor-x', `${currentX}px`);
      cursor.style.setProperty('--drag-cursor-y', `${currentY}px`);
      cursorFrameRef.current = window.requestAnimationFrame(updateCursor);
    };

    const showCursor = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (currentX === -120 && currentY === -120) {
        currentX = targetX;
        currentY = targetY;
      }
      cursor.dataset.hidden = 'false';
    };

    const hideCursor = () => {
      if (!dragRef.current) cursor.dataset.hidden = 'true';
    };

    const resetCursor = () => {
      cursor.dataset.dragging = 'false';
      cursor.dataset.hidden = 'true';
    };

    viewport.dataset.customCursor = 'true';
    viewport.addEventListener('pointerenter', showCursor);
    viewport.addEventListener('pointermove', showCursor);
    viewport.addEventListener('pointerleave', hideCursor);
    window.addEventListener('blur', resetCursor);
    cursorFrameRef.current = window.requestAnimationFrame(updateCursor);

    return () => {
      viewport.removeAttribute('data-custom-cursor');
      viewport.removeEventListener('pointerenter', showCursor);
      viewport.removeEventListener('pointermove', showCursor);
      viewport.removeEventListener('pointerleave', hideCursor);
      window.removeEventListener('blur', resetCursor);
      window.cancelAnimationFrame(cursorFrameRef.current);
      resetCursor();
    };
  }, [isCompact, prefersReducedMotion]);

  const normalizeScroll = () => {
    if (!canAutoplay) return;

    const viewport = viewportRef.current;
    const cycleWidth = cycleWidthRef.current;
    if (!viewport || !cycleWidth) return;

    if (viewport.scrollLeft >= cycleWidth) {
      viewport.scrollLeft -= cycleWidth;
    } else if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += cycleWidth;
    }
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch' || (event.button ?? 0) !== 0) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    window.clearTimeout(resumeTimerRef.current);
    window.cancelAnimationFrame(playbackRateFrameRef.current);
    animationRef.current?.pause();
    if (animationRef.current) animationRef.current.playbackRate = 0;
    dragRef.current = {
      pointerId: event.pointerId,
      startScrollLeft: viewport.scrollLeft,
      startX: event.clientX,
    };
    if (cursorRef.current) cursorRef.current.dataset.dragging = 'true';
    viewport.setPointerCapture(event.pointerId);
    setIsDragging(true);
    event.preventDefault();
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (!drag || !viewport || drag.pointerId !== event.pointerId) return;

    viewport.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX);
    normalizeScroll();
    event.preventDefault();
  };

  const finishDrag = (event) => {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (!drag || !viewport || drag.pointerId !== event.pointerId) return;

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
    if (cursorRef.current) {
      cursorRef.current.dataset.dragging = 'false';
      cursorRef.current.dataset.hidden = viewport.matches(':hover')
        ? 'false'
        : 'true';
    }
    setIsDragging(false);
    resumeWhenReady();
  };

  const handleCompactScroll = () => {
    if (!isCompact) return;

    window.cancelAnimationFrame(compactScrollFrameRef.current);
    compactScrollFrameRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const slides = Array.from(track.children);
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    });
  };

  const scrollToItem = (index) => {
    const viewport = viewportRef.current;
    const slide = trackRef.current?.children[index];
    if (!viewport || !slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();

    if (isCompact) {
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = Math.min(
        items.length - 1,
        Math.max(0, activeIndex + direction),
      );
      scrollToItem(nextIndex);
      return;
    }

    pauseTemporarily();
    viewportRef.current?.scrollBy({
      left: event.key === 'ArrowRight' ? 220 : -220,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section aria-labelledby="discovery-explorations-title">
      <div className="max-w-[44rem]">
        <h3
          id="discovery-explorations-title"
          className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm"
        >
          {label}
        </h3>
        <p className="mt-4 text-lg leading-[1.65] text-neutral-700 sm:text-xl">
          {introduction}
        </p>
      </div>

      <div
        ref={viewportRef}
        role="region"
        aria-label={`${label} horizontal gallery`}
        tabIndex="0"
        data-dragging={isDragging}
        className={`exploration-marquee__viewport mt-9 overflow-x-auto overscroll-x-contain pb-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-4 sm:mt-10 ${
          isCompact ? 'snap-x snap-mandatory' : ''
        }`}
        style={{ '--exploration-gap': gap }}
        onBlur={() => {
          focusedRef.current = false;
          resumeWhenReady();
        }}
        onFocus={() => {
          focusedRef.current = true;
          animationRef.current?.pause();
        }}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => {
          hoveredRef.current = true;
          if (pauseOnHover) transitionPlaybackRate(0, 1300);
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
          if (pauseOnHover && canResume()) transitionPlaybackRate(1, 1100);
        }}
        onPointerCancel={finishDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onScroll={handleCompactScroll}
        onWheel={pauseTemporarily}
      >
        {isCompact ? (
          <div
            ref={trackRef}
            className="grid w-full grid-flow-col auto-cols-[100%] gap-[var(--exploration-gap)]"
          >
            {items.map((item) => (
              <ExplorationItem compact key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div
            ref={trackRef}
            className="flex w-max items-center gap-[var(--exploration-gap)] will-change-transform"
          >
            <ExplorationGroup groupRef={firstGroupRef} items={items} />
            {canAutoplay ? <ExplorationGroup ariaHidden items={items} /> : null}
          </div>
        )}
      </div>

      {isCompact ? (
        <div
          aria-label="Exploration position"
          className="mt-4 flex justify-center gap-1"
          role="group"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.label}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className="flex size-7 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]"
              onClick={() => scrollToItem(index)}
            >
              <span
                className={`block rounded-full transition-[width,background-color] duration-200 ${
                  activeIndex === index
                    ? 'size-2 bg-[var(--project-accent)]'
                    : 'size-1.5 bg-neutral-400'
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}

      <PlaygroundDragCursor
        cursorRef={cursorRef}
        label="DRAG TO EXPLORE"
      />
    </section>
  );
}
