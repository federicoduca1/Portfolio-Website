import { useEffect, useRef, useState } from 'react';

const DISPLAY_DURATION = 4000;
const TRANSITION_DURATION = 620;

function getStatementText(statement) {
  return statement.parts.map((part) => part.text).join('');
}

function IdentityStatement({ statement }) {
  return statement.parts.map((part, index) => (
    <span
      key={`${part.text}-${index}`}
      className={part.accent ? 'text-accent-600' : undefined}
    >
      {part.text}
    </span>
  ));
}

export default function RotatingIdentity({ statements }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const activeIndexRef = useRef(0);
  const cycleTimeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion || statements.length < 2) {
      return undefined;
    }

    const clearTimers = () => {
      window.clearTimeout(cycleTimeoutRef.current);
      window.clearTimeout(transitionTimeoutRef.current);
    };

    const scheduleNextSentence = () => {
      cycleTimeoutRef.current = window.setTimeout(() => {
        if (document.hidden) {
          return;
        }

        const upcomingIndex =
          activeIndexRef.current === statements.length - 1
            ? 0
            : activeIndexRef.current + 1;

        setNextIndex(upcomingIndex);

        transitionTimeoutRef.current = window.setTimeout(() => {
          activeIndexRef.current = upcomingIndex;
          setActiveIndex(upcomingIndex);
          setNextIndex(null);
          scheduleNextSentence();
        }, TRANSITION_DURATION);
      }, DISPLAY_DURATION);
    };

    const handleVisibilityChange = () => {
      clearTimers();

      if (document.hidden) {
        setNextIndex(null);
        return;
      }

      scheduleNextSentence();
    };

    scheduleNextSentence();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimers();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [statements]);

  return (
    <div
      className="relative min-h-[13rem] overflow-hidden sm:min-h-[14rem] lg:min-h-[15rem]"
      aria-live="off"
    >
      <span className="sr-only">
        {getStatementText(statements[activeIndex])}
      </span>
      <p
        aria-hidden="true"
        className={`rotating-identity__line ${
          nextIndex !== null ? 'rotating-identity__line--outgoing' : ''
        }`}
      >
        <IdentityStatement statement={statements[activeIndex]} />
      </p>
      {nextIndex !== null ? (
        <p
          aria-hidden="true"
          className="rotating-identity__line rotating-identity__line--incoming"
        >
          <IdentityStatement statement={statements[nextIndex]} />
        </p>
      ) : null}
    </div>
  );
}
