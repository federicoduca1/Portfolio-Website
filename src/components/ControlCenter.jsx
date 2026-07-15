import { useEffect, useRef, useState } from 'react';
import { controlCenterOptions } from '../data/controlCenterOptions.js';

const CLOSE_TOLERANCE = 180;

function ControlCenterIcon({ type }) {
  if (type === 'theme') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3a9 9 0 1 0 0 18V3Z" fill="currentColor" />
        <path d="M12 6a6 6 0 0 1 0 12V6Z" fill="currentColor" opacity="0.28" />
      </svg>
    );
  }

  if (type === 'language') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M4 5h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-4 3v-3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
          fill="currentColor"
        />
        <circle cx="6" cy="10.5" r="1.25" fill="white" />
        <circle cx="10" cy="10.5" r="1.25" fill="white" />
        <circle cx="14" cy="10.5" r="1.25" fill="white" />
      </svg>
    );
  }

  if (type === 'scroll') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m12 2 5 5h-3v10h3l-5 5-5-5h3V7H7l5-5Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'motion') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="7" cy="12" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="14" cy="12" r="5" fill="currentColor" opacity="0.68" />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2.2">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </g>
      <circle cx="9" cy="6" r="2.2" fill="currentColor" />
      <circle cx="15" cy="12" r="2.2" fill="currentColor" />
      <circle cx="7" cy="18" r="2.2" fill="currentColor" />
    </svg>
  );
}

function ControlCenterTrigger({ isOpen, onClick, triggerRef }) {
  return (
    <button
      ref={triggerRef}
      type="button"
      aria-controls="control-center-options"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close Control Center' : 'Open Control Center'}
      className="control-center__trigger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
      onClick={onClick}
    >
      <ControlCenterIcon type="controls" />
    </button>
  );
}

function ControlCenterOption({ index, isOpen, option }) {
  return (
    <button
      type="button"
      aria-label={option.label}
      title={option.label}
      tabIndex={isOpen ? 0 : -1}
      className="control-center__option focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
      style={{
        '--control-index': index,
        '--control-x': `${option.position.x}px`,
        '--control-y': `${option.position.y}px`,
      }}
      onClick={(event) => event.preventDefault()}
    >
      <ControlCenterIcon type={option.icon} />
    </button>
  );
}

export default function ControlCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const controlCenterRef = useRef(null);
  const triggerRef = useRef(null);

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function closeControlCenter({ restoreFocus = false } = {}) {
    clearCloseTimer();
    setIsOpen(false);

    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      const controlCenter = controlCenterRef.current;

      if (
        controlCenter?.matches(':hover') ||
        controlCenter?.contains(document.activeElement)
      ) {
        return;
      }

      setIsOpen(false);
    }, CLOSE_TOLERANCE);
  }

  function handlePointerEnter() {
    clearCloseTimer();

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleDocumentPointerDown(event) {
      if (!controlCenterRef.current?.contains(event.target)) {
        closeControlCenter();
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeControlCenter({ restoreFocus: true });
      }
    }

    document.addEventListener('pointerdown', handleDocumentPointerDown, true);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleDocumentPointerDown,
        true,
      );
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(
    () => () => {
      clearCloseTimer();
    },
    [],
  );

  return (
    <>
      <div
        aria-hidden="true"
        className="control-center__dim"
        data-open={isOpen}
      />
      <div
        ref={controlCenterRef}
        className="control-center"
        data-open={isOpen}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            scheduleClose();
          }
        }}
        onFocusCapture={(event) => {
          clearCloseTimer();

          if (event.target.matches(':focus-visible')) {
            setIsOpen(true);
          }
        }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={scheduleClose}
      >
        <div
          id="control-center-options"
          aria-hidden={!isOpen}
          className="control-center__options"
        >
          {controlCenterOptions.map((option, index) => (
            <ControlCenterOption
              key={option.id}
              index={index}
              isOpen={isOpen}
              option={option}
            />
          ))}
        </div>
        <ControlCenterTrigger
          isOpen={isOpen}
          triggerRef={triggerRef}
          onClick={() => setIsOpen((current) => !current)}
        />
      </div>
    </>
  );
}
