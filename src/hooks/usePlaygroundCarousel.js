import { useEffect, useRef } from 'react';

const DRAG_THRESHOLD = 6;
const AUTO_SCROLL_SPEED = 7;
const IDLE_DELAY = 1400;

export default function usePlaygroundCarousel() {
  const carouselRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cursor = cursorRef.current;

    if (!carousel) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;

    let autoFrame;
    let cursorFrame;
    let inertiaFrame;
    let clickResetTimer;
    let previousAutoTime = performance.now();
    let idleUntil = 0;
    let isHovered = false;
    let isFocused = false;
    let isDragging = false;
    let isTouching = false;
    let didDrag = false;
    let suppressClick = false;
    let pointerId = null;
    let previousPointerX = 0;
    let previousPointerTime = 0;
    let scrollVelocity = 0;
    let cursorTargetX = -120;
    let cursorTargetY = -120;
    let cursorX = -120;
    let cursorY = -120;

    carousel.dataset.customCursor = finePointer && !reducedMotion ? 'true' : 'false';

    function loopWidth() {
      return carousel.querySelector('[data-carousel-sequence]')?.offsetWidth ?? 0;
    }

    function normalizeScrollPosition() {
      const width = loopWidth();

      if (width > 0 && carousel.scrollLeft >= width) {
        carousel.scrollLeft -= width;
      }
    }

    function pauseTemporarily() {
      idleUntil = performance.now() + IDLE_DELAY;
    }

    function isAutoScrollPaused(now) {
      return (
        reducedMotion ||
        isHovered ||
        isFocused ||
        isDragging ||
        isTouching ||
        inertiaFrame !== undefined ||
        now < idleUntil
      );
    }

    function runAutoScroll(now) {
      const delta = Math.min(now - previousAutoTime, 40);
      previousAutoTime = now;

      if (!isAutoScrollPaused(now)) {
        carousel.scrollLeft += (AUTO_SCROLL_SPEED * delta) / 1000;
        normalizeScrollPosition();
      }

      autoFrame = requestAnimationFrame(runAutoScroll);
    }

    function runCursor() {
      if (cursor) {
        cursorX += (cursorTargetX - cursorX) * 0.16;
        cursorY += (cursorTargetY - cursorY) * 0.16;
        cursor.style.setProperty('--drag-cursor-x', `${cursorX}px`);
        cursor.style.setProperty('--drag-cursor-y', `${cursorY}px`);
      }

      cursorFrame = requestAnimationFrame(runCursor);
    }

    function stopInertia() {
      if (inertiaFrame !== undefined) {
        cancelAnimationFrame(inertiaFrame);
        inertiaFrame = undefined;
      }
    }

    function startInertia() {
      if (reducedMotion || Math.abs(scrollVelocity) < 0.04) {
        pauseTemporarily();
        return;
      }

      let previousTime = performance.now();

      function glide(now) {
        const delta = Math.min(now - previousTime, 32);
        previousTime = now;
        carousel.scrollLeft += scrollVelocity * delta;
        normalizeScrollPosition();
        scrollVelocity *= Math.pow(0.92, delta / 16.67);

        if (Math.abs(scrollVelocity) < 0.02) {
          inertiaFrame = undefined;
          pauseTemporarily();
          return;
        }

        inertiaFrame = requestAnimationFrame(glide);
      }

      inertiaFrame = requestAnimationFrame(glide);
    }

    function handlePointerEnter(event) {
      if (!finePointer || event.pointerType === 'touch') {
        return;
      }

      isHovered = true;
      cursorTargetX = event.clientX;
      cursorTargetY = event.clientY;

      if (cursor && !reducedMotion) {
        cursor.dataset.hidden = 'false';
      }
    }

    function handlePointerLeave() {
      isHovered = false;
      pauseTemporarily();

      if (cursor && !isDragging) {
        cursor.dataset.hidden = 'true';
      }
    }

    function handlePointerMove(event) {
      if (finePointer && event.pointerType !== 'touch') {
        cursorTargetX = event.clientX;
        cursorTargetY = event.clientY;
      }

      if (!isDragging || event.pointerId !== pointerId) {
        return;
      }

      event.preventDefault();
      const now = performance.now();
      const movement = event.clientX - previousPointerX;
      const elapsed = Math.max(now - previousPointerTime, 1);

      if (Math.abs(movement) > 0) {
        carousel.scrollLeft -= movement;
        normalizeScrollPosition();
        scrollVelocity = -movement / elapsed;
      }

      if (Math.abs(event.clientX - Number(carousel.dataset.dragStartX)) > DRAG_THRESHOLD) {
        didDrag = true;
      }

      previousPointerX = event.clientX;
      previousPointerTime = now;
    }

    function handlePointerDown(event) {
      if (event.pointerType === 'touch') {
        isTouching = true;
        return;
      }

      if (!finePointer || event.button !== 0) {
        pauseTemporarily();
        return;
      }

      stopInertia();
      isDragging = true;
      didDrag = false;
      pointerId = event.pointerId;
      previousPointerX = event.clientX;
      previousPointerTime = performance.now();
      scrollVelocity = 0;
      carousel.dataset.dragStartX = String(event.clientX);
      carousel.dataset.dragging = 'true';
      carousel.setPointerCapture(event.pointerId);

      if (cursor) {
        cursor.dataset.dragging = 'true';
      }
    }

    function finishDrag(event) {
      if (event.pointerType === 'touch') {
        isTouching = false;
        pauseTemporarily();
        return;
      }

      if (!isDragging || event.pointerId !== pointerId) {
        return;
      }

      if (carousel.hasPointerCapture(event.pointerId)) {
        carousel.releasePointerCapture(event.pointerId);
      }

      isDragging = false;
      pointerId = null;
      carousel.dataset.dragging = 'false';
      delete carousel.dataset.dragStartX;

      if (cursor) {
        cursor.dataset.dragging = 'false';
        cursor.dataset.hidden = isHovered ? 'false' : 'true';
      }

      if (didDrag) {
        suppressClick = true;
        window.clearTimeout(clickResetTimer);
        clickResetTimer = window.setTimeout(() => {
          suppressClick = false;
        }, 0);
        startInertia();
      } else {
        pauseTemporarily();
      }
    }

    function handleClick(event) {
      if (!suppressClick) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }

    function handleFocusIn() {
      isFocused = true;
    }

    function handleFocusOut(event) {
      if (carousel.contains(event.relatedTarget)) {
        return;
      }

      isFocused = false;
      pauseTemporarily();
    }

    function handleWheel() {
      pauseTemporarily();
    }

    autoFrame = requestAnimationFrame(runAutoScroll);

    if (finePointer && !reducedMotion) {
      cursorFrame = requestAnimationFrame(runCursor);
    }

    carousel.addEventListener('pointerenter', handlePointerEnter);
    carousel.addEventListener('pointerleave', handlePointerLeave);
    carousel.addEventListener('pointermove', handlePointerMove);
    carousel.addEventListener('pointerdown', handlePointerDown);
    carousel.addEventListener('pointerup', finishDrag);
    carousel.addEventListener('pointercancel', finishDrag);
    carousel.addEventListener('click', handleClick, true);
    carousel.addEventListener('focusin', handleFocusIn);
    carousel.addEventListener('focusout', handleFocusOut);
    carousel.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      cancelAnimationFrame(autoFrame);
      cancelAnimationFrame(cursorFrame);
      stopInertia();
      window.clearTimeout(clickResetTimer);
      carousel.removeEventListener('pointerenter', handlePointerEnter);
      carousel.removeEventListener('pointerleave', handlePointerLeave);
      carousel.removeEventListener('pointermove', handlePointerMove);
      carousel.removeEventListener('pointerdown', handlePointerDown);
      carousel.removeEventListener('pointerup', finishDrag);
      carousel.removeEventListener('pointercancel', finishDrag);
      carousel.removeEventListener('click', handleClick, true);
      carousel.removeEventListener('focusin', handleFocusIn);
      carousel.removeEventListener('focusout', handleFocusOut);
      carousel.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return { carouselRef, cursorRef };
}
