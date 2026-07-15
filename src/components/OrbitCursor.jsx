import { useId } from 'react';

export default function OrbitCursor({ className, cursorRef, label }) {
  const pathId = `orbit-cursor-path-${useId().replaceAll(':', '')}`;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={className}
      data-hidden="true"
    >
      <svg
        className="hero-scroll-cursor__orbit"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text>
          <textPath href={`#${pathId}`} startOffset="2%">
            {label}
          </textPath>
          <textPath href={`#${pathId}`} startOffset="52%">
            {label}
          </textPath>
        </text>
      </svg>
      <svg
        className="hero-scroll-cursor__pointer"
        viewBox="0 0 24 24"
      >
        <path d="M5 3.7v15.1l4.1-3.8 2.8 6 2.6-1.2-2.8-5.9 5.5-.5L5 3.7Z" />
      </svg>
    </div>
  );
}
