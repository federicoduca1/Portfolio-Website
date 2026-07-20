import { useId } from 'react';
import { createPortal } from 'react-dom';

export default function PlaygroundDragCursor({ cursorRef, label = 'DRAG' }) {
  const pathId = `playground-drag-path-${useId().replaceAll(':', '')}`;

  return createPortal(
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="playground-drag-cursor"
      data-dragging="false"
      data-hidden="true"
    >
      <svg className="playground-drag-cursor__orbit" viewBox="0 0 100 100">
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text>
          <textPath href={`#${pathId}`} startOffset="4%">
            {label}
          </textPath>
          <textPath href={`#${pathId}`} startOffset="54%">
            {label}
          </textPath>
        </text>
      </svg>
      <svg className="playground-drag-cursor__mark" viewBox="0 0 28 18">
        <path d="M8 3 2 9l6 6M20 3l6 6-6 6M3 9h22" />
        <circle cx="14" cy="9" r="1.7" />
      </svg>
    </div>,
    document.body,
  );
}
