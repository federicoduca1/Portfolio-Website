import { useEffect, useRef, useState } from 'react';

const CLICK_THRESHOLD = 7;
const SNAP_THRESHOLD = 36;

export default function usePlaygroundCarousel(itemCount) {
  const carouselRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (activeIndex >= itemCount) {
      setActiveIndex(0);
    }
  }, [activeIndex, itemCount]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cursor = cursorRef.current;

    if (!carousel || itemCount === 0) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;

    let cursorFrame;
    let clickResetTimer;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let latestX = 0;
    let isPointerDown = false;
    let didDrag = false;
    let suppressClick = false;
    let cursorTargetX = -120;
    let cursorTargetY = -120;
    let cursorX = -120;
    let cursorY = -120;

    carousel.dataset.customCursor = finePointer && !reducedMotion ? 'true' : 'false';

    function stepCarousel(direction) {
      setActiveIndex((currentIndex) => (
        currentIndex + direction + itemCount
      ) % itemCount);
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

    function handlePointerEnter(event) {
      if (!finePointer || event.pointerType === 'touch') {
        return;
      }

      cursorTargetX = event.clientX;
      cursorTargetY = event.clientY;

      if (cursor && !reducedMotion) {
        cursor.dataset.hidden = 'false';
      }
    }

    function handlePointerLeave() {
      if (cursor && !isPointerDown) {
        cursor.dataset.hidden = 'true';
      }
    }

    function handlePointerDown(event) {
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }

      isPointerDown = true;
      didDrag = false;
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      latestX = event.clientX;
      carousel.dataset.dragging = 'true';
      carousel.setPointerCapture(event.pointerId);
      setIsDragging(true);

      if (cursor && finePointer) {
        cursor.dataset.dragging = 'true';
      }
    }

    function handlePointerMove(event) {
      if (finePointer && event.pointerType !== 'touch') {
        cursorTargetX = event.clientX;
        cursorTargetY = event.clientY;
      }

      if (!isPointerDown || event.pointerId !== pointerId) {
        return;
      }

      latestX = event.clientX;
      const horizontalDistance = event.clientX - startX;
      const verticalDistance = event.clientY - startY;

      if (Math.abs(horizontalDistance) > CLICK_THRESHOLD) {
        didDrag = true;
      }

      if (Math.abs(horizontalDistance) > Math.abs(verticalDistance)) {
        event.preventDefault();
      }
    }

    function finishDrag(event) {
      if (!isPointerDown || event.pointerId !== pointerId) {
        return;
      }

      if (carousel.hasPointerCapture(event.pointerId)) {
        carousel.releasePointerCapture(event.pointerId);
      }

      const dragDistance = latestX - startX;
      isPointerDown = false;
      pointerId = null;
      carousel.dataset.dragging = 'false';
      setIsDragging(false);

      if (cursor) {
        cursor.dataset.dragging = 'false';
        cursor.dataset.hidden = carousel.matches(':hover') ? 'false' : 'true';
      }

      if (Math.abs(dragDistance) >= SNAP_THRESHOLD) {
        stepCarousel(dragDistance < 0 ? 1 : -1);
      }

      if (didDrag) {
        suppressClick = true;
        window.clearTimeout(clickResetTimer);
        clickResetTimer = window.setTimeout(() => {
          suppressClick = false;
        }, 0);
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

    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        stepCarousel(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        stepCarousel(-1);
      }
    }

    if (finePointer && !reducedMotion) {
      cursorFrame = requestAnimationFrame(runCursor);
    }

    carousel.addEventListener('pointerenter', handlePointerEnter);
    carousel.addEventListener('pointerleave', handlePointerLeave);
    carousel.addEventListener('pointerdown', handlePointerDown);
    carousel.addEventListener('pointermove', handlePointerMove);
    carousel.addEventListener('pointerup', finishDrag);
    carousel.addEventListener('pointercancel', finishDrag);
    carousel.addEventListener('click', handleClick, true);
    carousel.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(cursorFrame);
      window.clearTimeout(clickResetTimer);
      carousel.removeEventListener('pointerenter', handlePointerEnter);
      carousel.removeEventListener('pointerleave', handlePointerLeave);
      carousel.removeEventListener('pointerdown', handlePointerDown);
      carousel.removeEventListener('pointermove', handlePointerMove);
      carousel.removeEventListener('pointerup', finishDrag);
      carousel.removeEventListener('pointercancel', finishDrag);
      carousel.removeEventListener('click', handleClick, true);
      carousel.removeEventListener('keydown', handleKeyDown);
    };
  }, [itemCount]);

  return {
    activeIndex,
    carouselRef,
    cursorRef,
    goTo: setActiveIndex,
    isDragging,
  };
}
