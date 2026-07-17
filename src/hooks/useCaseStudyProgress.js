import { useEffect } from 'react';

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

export default function useCaseStudyProgress(containerRef) {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    let animationFrame = null;

    function updateProgress() {
      animationFrame = null;

      const bounds = container.getBoundingClientRect();
      const start = window.scrollY + bounds.top;
      const end = start + container.offsetHeight - window.innerHeight;
      const range = Math.max(end - start, 1);
      const progress = clamp((window.scrollY - start) / range, 0, 1);

      container.style.setProperty(
        '--case-study-progress',
        progress.toFixed(4),
      );
    }

    function scheduleProgressUpdate() {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    }

    const resizeObserver =
      'ResizeObserver' in window
        ? new ResizeObserver(scheduleProgressUpdate)
        : null;

    updateProgress();
    resizeObserver?.observe(container);
    window.addEventListener('scroll', scheduleProgressUpdate, {
      passive: true,
    });
    window.addEventListener('resize', scheduleProgressUpdate);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      resizeObserver?.disconnect();
      window.removeEventListener('scroll', scheduleProgressUpdate);
      window.removeEventListener('resize', scheduleProgressUpdate);
    };
  }, [containerRef]);
}
