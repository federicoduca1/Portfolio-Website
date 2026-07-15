import { useEffect } from 'react';

const EXIT_INTENT_THRESHOLD = 30;
const EXIT_ZONE_RATIO = 0.94;
const GUIDED_SCROLL_TIMEOUT = 1600;

export default function useGuidedSectionExit(sectionRef, targetSelector) {
  useEffect(() => {
    const section = sectionRef.current;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!section) {
      return undefined;
    }

    let accumulatedIntent = 0;
    let guidedScrollFrame = null;
    let guidedScrollStartedAt = 0;
    let isGuidedScrollActive = false;

    function finishGuidedScroll(targetTop) {
      if (
        Math.abs(window.scrollY - targetTop) < 2 ||
        window.performance.now() - guidedScrollStartedAt >
          GUIDED_SCROLL_TIMEOUT ||
        !isGuidedScrollActive
      ) {
        isGuidedScrollActive = false;
        guidedScrollFrame = null;
        return;
      }

      guidedScrollFrame = window.requestAnimationFrame(() =>
        finishGuidedScroll(targetTop),
      );
    }

    function handleGuidedExit(event) {
      if (event.deltaY <= 0) {
        accumulatedIntent = 0;
        return;
      }

      const sectionBounds = section.getBoundingClientRect();
      const isInExitZone =
        sectionBounds.bottom <= window.innerHeight * EXIT_ZONE_RATIO;

      if (!isInExitZone) {
        accumulatedIntent = 0;
        return;
      }

      const target = document.querySelector(targetSelector);

      if (!target) {
        return;
      }

      event.preventDefault();

      if (isGuidedScrollActive) {
        return;
      }

      accumulatedIntent += event.deltaY;

      if (accumulatedIntent < EXIT_INTENT_THRESHOLD) {
        return;
      }

      const navbarHeight =
        document
          .querySelector('nav[aria-label="Global navigation"]')
          ?.closest('header')
          ?.getBoundingClientRect().height ?? 0;
      const targetTop = Math.max(
        0,
        window.scrollY + target.getBoundingClientRect().top - navbarHeight,
      );

      accumulatedIntent = 0;
      guidedScrollStartedAt = window.performance.now();
      isGuidedScrollActive = true;

      window.scrollTo({
        top: targetTop,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      if (prefersReducedMotion) {
        isGuidedScrollActive = false;
      } else {
        guidedScrollFrame = window.requestAnimationFrame(() =>
          finishGuidedScroll(targetTop),
        );
      }
    }

    function resetIntent() {
      accumulatedIntent = 0;
    }

    section.addEventListener('wheel', handleGuidedExit, { passive: false });
    section.addEventListener('pointerleave', resetIntent);

    return () => {
      section.removeEventListener('wheel', handleGuidedExit);
      section.removeEventListener('pointerleave', resetIntent);

      if (guidedScrollFrame !== null) {
        window.cancelAnimationFrame(guidedScrollFrame);
      }
    };
  }, [sectionRef, targetSelector]);
}
