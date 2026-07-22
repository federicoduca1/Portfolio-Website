import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const DESKTOP_NAVIGATION_QUERY = '(min-width: 1180px)';

function useDesktopNavigationMode() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia(DESKTOP_NAVIGATION_QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_NAVIGATION_QUERY);
    const handleChange = (event) => setIsDesktop(event.matches);

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDesktop;
}

function navigateToSection(event, sectionId, onNavigate) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  event.preventDefault();
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  const wasKeyboardActivation = event.detail === 0;

  window.history.pushState(null, '', `#${sectionId}`);
  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });
  onNavigate?.();

  if (wasKeyboardActivation) {
    const heading = target.querySelector('[data-case-study-heading]');
    window.setTimeout(
      () => heading?.focus({ preventScroll: true }),
      prefersReducedMotion ? 0 : 450,
    );
  }
}

function SectionLinks({ activeSectionId, onNavigate, sections }) {
  return (
    <ol className="space-y-1">
      {sections.map((section, index) => {
        const isActive = section.id === activeSectionId;

        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={isActive ? 'location' : undefined}
              onClick={(event) =>
                navigateToSection(event, section.id, onNavigate)
              }
              className={`group flex items-center gap-3 py-2 text-sm transition-[color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--project-accent)] ${
                isActive
                  ? 'text-neutral-950'
                  : 'text-neutral-500 hover:translate-x-0.5 hover:text-neutral-800 focus-visible:translate-x-0.5'
              }`}
            >
              <span
                className={`w-5 shrink-0 font-medium tabular-nums transition-colors duration-200 ${
                  isActive
                    ? 'text-[var(--project-accent)]'
                    : 'text-neutral-400 group-hover:text-[var(--project-accent)]'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{section.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

function DesktopNavigation({
  activeSectionId,
  project,
  sections,
  stickyEndId,
  stickyStartId,
  stickyStopId,
}) {
  const asideRef = useRef(null);
  const navRef = useRef(null);
  const fixedFrameRef = useRef(null);
  const isBeforeStartRef = useRef(Boolean(stickyStartId));
  const isEndHiddenRef = useRef(false);
  const [fixedFrame, setFixedFrame] = useState(null);
  const [isBeforeStart, setIsBeforeStart] = useState(Boolean(stickyStartId));
  const [isEndHidden, setIsEndHidden] = useState(false);
  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSectionId),
    0,
  );

  useLayoutEffect(() => {
    if (!stickyStartId && !stickyStopId) {
      fixedFrameRef.current = null;
      isBeforeStartRef.current = false;
      isEndHiddenRef.current = false;
      setFixedFrame(null);
      setIsBeforeStart(false);
      setIsEndHidden(false);
      return undefined;
    }

    const aside = asideRef.current;
    const nav = navRef.current;
    const startSection = stickyStartId
      ? document.getElementById(stickyStartId)
      : null;
    const stopSection = stickyStopId
      ? document.getElementById(stickyStopId)
      : null;
    const endSection = stickyEndId
      ? document.getElementById(stickyEndId)
      : null;
    if (!aside || !nav || (stickyStopId && !stopSection)) return undefined;

    const stickyOffset = Number.parseFloat(getComputedStyle(nav).top) || 0;
    let frameId = 0;

    const update = () => {
      frameId = 0;

      const beforeStart = startSection
        ? startSection.getBoundingClientRect().top > stickyOffset
        : false;

      if (beforeStart !== isBeforeStartRef.current) {
        isBeforeStartRef.current = beforeStart;
        setIsBeforeStart(beforeStart);
      }

      if (beforeStart) {
        if (fixedFrameRef.current !== null) {
          fixedFrameRef.current = null;
          setFixedFrame(null);
        }
        if (isEndHiddenRef.current) {
          isEndHiddenRef.current = false;
          setIsEndHidden(false);
        }
        return;
      }

      const asideBounds = aside.getBoundingClientRect();
      const shouldStop = stopSection
        ? stopSection.getBoundingClientRect().top <= stickyOffset
        : false;

      if (shouldStop) {
        const nextFrame = {
          top: stickyOffset,
          left: asideBounds.left,
          width: asideBounds.width,
        };
        const currentFrame = fixedFrameRef.current;

        if (
          currentFrame === null ||
          Math.abs(currentFrame.left - nextFrame.left) > 0.5 ||
          Math.abs(currentFrame.width - nextFrame.width) > 0.5
        ) {
          fixedFrameRef.current = nextFrame;
          setFixedFrame(nextFrame);
        }

        const shouldHide = endSection
          ? endSection.getBoundingClientRect().top <=
            stickyOffset + nav.offsetHeight + 24
          : false;

        if (shouldHide !== isEndHiddenRef.current) {
          isEndHiddenRef.current = shouldHide;
          setIsEndHidden(shouldHide);
        }
      } else {
        if (fixedFrameRef.current !== null) {
          fixedFrameRef.current = null;
          setFixedFrame(null);
        }
        if (isEndHiddenRef.current) {
          isEndHiddenRef.current = false;
          setIsEndHidden(false);
        }
      }
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [stickyEndId, stickyStartId, stickyStopId]);

  return (
    <aside
      ref={asideRef}
      className="relative hidden min-[1180px]:block min-[1180px]:pt-20"
    >
      <nav
        ref={navRef}
        aria-label={`${project.shortTitle} case study sections`}
        className={`py-2 ${
          fixedFrame === null
            ? 'sticky top-[calc(var(--site-header-height)+1.5rem)]'
            : 'fixed z-20'
        } ${
          isBeforeStart || isEndHidden
            ? 'invisible opacity-0'
            : 'visible opacity-100'
        }`}
        style={fixedFrame ?? undefined}
      >
        <p className="text-xs font-semibold tracking-[0.13em] text-neutral-400 uppercase">
          Case study
        </p>
        <a
          href="#case-study-top"
          className="mt-3 inline-block text-base font-semibold text-neutral-900 transition-colors duration-200 hover:text-[var(--project-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--project-accent)]"
        >
          {project.shortTitle}
        </a>

        <div className="relative mt-8 pl-5">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-px bg-neutral-300"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-px origin-top bg-[color:var(--project-accent)] opacity-45"
            style={{ transform: 'scaleY(var(--case-study-progress))' }}
          />
          <span
            aria-hidden="true"
            className="absolute left-[-1px] w-[3px] bg-[var(--project-accent)] transition-[top] duration-300"
            style={{
              top: `${(activeIndex / sections.length) * 100}%`,
              height: `${100 / sections.length}%`,
            }}
          />
          <SectionLinks
            activeSectionId={activeSectionId}
            sections={sections}
          />
        </div>
      </nav>
    </aside>
  );
}

function CompactNavigation({ activeSectionId, project, sections }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSectionId),
    0,
  );
  const currentSection = sections[activeIndex];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [isOpen]);

  return (
    <nav
      ref={containerRef}
      aria-label={`${project.shortTitle} compact case study navigation`}
      className="sticky top-[var(--visible-site-header-height)] z-30 border-y border-neutral-200 bg-neutral-50/95 backdrop-blur-sm transition-[top] duration-300 ease-out min-[1180px]:hidden"
    >
      <div className="relative">
        <div className="flex min-h-12 items-center gap-4 px-4 sm:px-5">
          <p className="hidden text-xs font-semibold tracking-[0.1em] text-neutral-500 uppercase sm:block">
            {project.shortTitle}
          </p>
          <p className="min-w-0 flex-1 truncate text-sm font-medium text-neutral-900">
            {currentSection.label}
          </p>
          <p className="text-xs tabular-nums text-neutral-500">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(sections.length).padStart(2, '0')}
          </p>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="compact-case-study-index"
            aria-label={isOpen ? 'Close case study index' : 'Open case study index'}
            onClick={() => setIsOpen((current) => !current)}
            className="flex size-9 items-center justify-center text-xl text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--project-accent)]"
          >
            <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
          </button>
        </div>
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 left-0 h-px origin-left bg-[var(--project-accent)]"
          style={{ transform: 'scaleX(var(--case-study-progress))' }}
        />
      </div>

      <div
        id="compact-case-study-index"
        aria-hidden={!isOpen}
        className={`absolute inset-x-0 top-full border-b border-neutral-200 bg-neutral-50 px-5 py-5 shadow-[0_18px_32px_rgba(10,10,10,0.06)] transition-[opacity,transform,visibility] duration-200 sm:px-6 ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-neutral-400 uppercase">
          {project.title}
        </p>
        <SectionLinks
          activeSectionId={activeSectionId}
          sections={sections}
          onNavigate={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}

export default function CaseStudyNavigation(props) {
  const isDesktop = useDesktopNavigationMode();

  return isDesktop ? (
    <DesktopNavigation {...props} />
  ) : (
    <CompactNavigation {...props} />
  );
}
