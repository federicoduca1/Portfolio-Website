import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import OrbitCursor from '../OrbitCursor.jsx';

export default function ProjectCardCursor() {
  const anchorRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    const cursor = cursorRef.current;
    const group = anchor?.parentElement;
    const supportsCustomCursor = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;

    if (!cursor || !group || !supportsCustomCursor) {
      return undefined;
    }

    function hideCursor() {
      cursor.dataset.hidden = 'true';
    }

    function handlePointerMove(event) {
      if (!event.target.closest('.project-card__link')) {
        hideCursor();
        return;
      }

      cursor.style.setProperty('--project-cursor-x', `${event.clientX}px`);
      cursor.style.setProperty('--project-cursor-y', `${event.clientY}px`);
      cursor.dataset.hidden = 'false';
    }

    group.addEventListener('pointermove', handlePointerMove, { passive: true });
    group.addEventListener('pointerleave', hideCursor);
    window.addEventListener('blur', hideCursor);

    return () => {
      group.removeEventListener('pointermove', handlePointerMove);
      group.removeEventListener('pointerleave', hideCursor);
      window.removeEventListener('blur', hideCursor);
    };
  }, []);

  return (
    <>
      <span ref={anchorRef} hidden aria-hidden="true" />
      {createPortal(
        <OrbitCursor
          className="project-card-cursor"
          cursorRef={cursorRef}
          label="VIEW PROJECT"
        />,
        document.body,
      )}
    </>
  );
}
