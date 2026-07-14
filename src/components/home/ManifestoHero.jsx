import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import HeroBackground from './HeroBackground.jsx';
import ManifestoToolIcon from './ManifestoToolIcon.jsx';

const contextNumberById = {
  'digital-experiences': '01',
  technology: '02',
};

function InteractiveKeyword({ activeKeywordId, keyword, onActivate }) {
  const isActive = activeKeywordId === keyword.id;
  const animationFrameRef = useRef(null);
  const letterRefs = useRef([]);
  const magnificationRef = useRef({
    currentX: 0,
    fontSize: 0,
    isActive: false,
    targetX: 0,
  });

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  function applyMagnification(pointerX) {
    const { fontSize } = magnificationRef.current;
    const influenceRadius = fontSize * 2.65;

    letterRefs.current.forEach((letter) => {
      if (!letter || letter.dataset.space === 'true') {
        return;
      }

      const letterCenter = letter.offsetLeft + letter.offsetWidth / 2;
      const normalizedDistance = Math.min(
        Math.abs(pointerX - letterCenter) / influenceRadius,
        1,
      );
      const influence =
        normalizedDistance < 1
          ? (Math.cos(normalizedDistance * Math.PI) + 1) / 2
          : 0;

      letter.style.setProperty(
        '--letter-scale',
        (1 + influence * 0.14).toFixed(4),
      );
      letter.style.setProperty(
        '--letter-lift',
        `${(-fontSize * influence * 0.075).toFixed(3)}px`,
      );
    });
  }

  function animateMagnification() {
    const magnification = magnificationRef.current;

    magnification.currentX +=
      (magnification.targetX - magnification.currentX) * 0.22;
    applyMagnification(magnification.currentX);

    if (
      magnification.isActive &&
      Math.abs(magnification.targetX - magnification.currentX) > 0.05
    ) {
      animationFrameRef.current =
        window.requestAnimationFrame(animateMagnification);
    } else {
      animationFrameRef.current = null;
    }
  }

  function updateMagnification(event) {
    if (event.pointerType === 'touch') {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const magnification = magnificationRef.current;
    const pointerX = event.clientX - bounds.left;

    if (!magnification.isActive) {
      magnification.currentX = pointerX;
      magnification.fontSize = Number.parseFloat(
        window.getComputedStyle(event.currentTarget).fontSize,
      );
      magnification.isActive = true;
      event.currentTarget.dataset.magnifying = 'true';
    }

    magnification.targetX = pointerX;

    if (animationFrameRef.current === null) {
      animationFrameRef.current =
        window.requestAnimationFrame(animateMagnification);
    }
  }

  function resetMagnification(event) {
    magnificationRef.current.isActive = false;
    event.currentTarget.dataset.magnifying = 'false';

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    letterRefs.current.forEach((letter) => {
      letter?.style.removeProperty('--letter-scale');
      letter?.style.removeProperty('--letter-lift');
    });
  }

  function toggleKeyword() {
    onActivate(isActive ? null : keyword.id);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleKeyword();
    }
  }

  return (
    <button
      type="button"
      aria-expanded={isActive}
      aria-controls="manifesto-context"
      className="manifesto-keyword whitespace-nowrap italic"
      data-active={isActive}
      data-magnifying="false"
      onClick={toggleKeyword}
      onFocus={() => onActivate(keyword.id)}
      onMouseEnter={() => onActivate(keyword.id)}
      onMouseLeave={() => onActivate(null)}
      onPointerMove={updateMagnification}
      onPointerLeave={resetMagnification}
      onKeyDown={handleKeyDown}
    >
      <span className="sr-only">{keyword.label}</span>
      <span aria-hidden="true" className="manifesto-keyword__text">
        {[...keyword.label].map((character, index) => (
          <span
            key={`${character}-${index}`}
            ref={(letter) => {
              letterRefs.current[index] = letter;
            }}
            className="manifesto-keyword__letter"
            data-space={character === ' '}
          >
            {character}
          </span>
        ))}
      </span>
    </button>
  );
}

function ManifestoSegment({ activeKeywordId, keyword, onActivate, segment }) {
  if (!segment.keywordId) {
    return segment.text;
  }

  return (
    <InteractiveKeyword
      activeKeywordId={activeKeywordId}
      keyword={keyword}
      onActivate={onActivate}
    />
  );
}

function ManifestoHint() {
  return (
    <div className="manifesto-hint">
      <span aria-hidden="true" className="manifesto-context__marker">
        ●
      </span>
      <span>HOVER THE HIGHLIGHTED IDEAS</span>
    </div>
  );
}

function ManifestoContext({ activeKeyword }) {
  return (
    <div
      id="manifesto-context"
      className="manifesto-context mx-auto mt-5 h-52 max-w-3xl text-center sm:mt-6 sm:h-44"
      aria-live="polite"
    >
      {activeKeyword ? (
        <div key={activeKeyword.id} className="manifesto-context__content">
          <p className="manifesto-context__eyebrow text-base font-medium uppercase text-neutral-500 sm:text-lg">
            <span className="manifesto-context__marker">
              {contextNumberById[activeKeyword.id]}
            </span>
            <span aria-hidden="true"> — </span>
            <span>{activeKeyword.title}</span>
          </p>
          <p className="mt-3 text-lg leading-7 text-neutral-600 sm:text-xl sm:leading-8">
            {activeKeyword.description}
          </p>
          <ul
            className="manifesto-context__tools mt-5 flex items-center justify-center gap-4 sm:mt-6 sm:gap-5"
            aria-label="Related tools and technologies"
          >
            {activeKeyword.tools.map((tool) => (
              <li
                key={tool.id}
                className="manifesto-context__tool"
                title={tool.label}
              >
                <span className="sr-only">{tool.label}</span>
                <ManifestoToolIcon type={tool.id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ManifestoHint />
      )}
    </div>
  );
}

export default function ManifestoHero({ manifesto }) {
  const [activeKeywordId, setActiveKeywordId] = useState(null);
  const heroRef = useRef(null);
  const pointerFieldRef = useRef(null);
  const scrollCueRef = useRef(null);
  const { keywords, segments } = manifesto;
  const keywordById = Object.fromEntries(
    keywords.map((keyword) => [keyword.id, keyword]),
  );
  const activeKeyword = activeKeywordId ? keywordById[activeKeywordId] : null;
  const [firstContextFragment, secondContextFragment] = segments[4].text.split(',');
  const manifestoLines = [
    segments.slice(0, 2),
    [...segments.slice(2, 4), { text: `${firstContextFragment},` }],
    [{ text: secondContextFragment }],
  ];

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const pointerField = pointerFieldRef.current;
    const supportsPointerReaction = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (
      !hero ||
      !pointerField ||
      !supportsPointerReaction ||
      prefersReducedMotion
    ) {
      return undefined;
    }

    let animationFrame = null;
    let isPointerInside = false;

    function centerField() {
      const bounds = hero.getBoundingClientRect();

      return {
        x: bounds.width / 2,
        y: bounds.height * 0.42,
      };
    }

    const initialCenter = centerField();
    const currentPosition = { ...initialCenter };
    const targetPosition = { ...initialCenter };

    function updateFieldVariables() {
      hero.style.setProperty('--pointer-x', `${currentPosition.x}px`);
      hero.style.setProperty('--pointer-y', `${currentPosition.y}px`);
    }

    function animateField() {
      currentPosition.x += (targetPosition.x - currentPosition.x) * 0.065;
      currentPosition.y += (targetPosition.y - currentPosition.y) * 0.065;
      updateFieldVariables();

      if (
        Math.abs(targetPosition.x - currentPosition.x) > 0.1 ||
        Math.abs(targetPosition.y - currentPosition.y) > 0.1
      ) {
        animationFrame = window.requestAnimationFrame(animateField);
      } else {
        animationFrame = null;
      }
    }

    function scheduleFieldUpdate() {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(animateField);
      }
    }

    updateFieldVariables();

    function handlePointerMove(event) {
      const bounds = hero.getBoundingClientRect();
      isPointerInside = true;
      targetPosition.x = event.clientX - bounds.left;
      targetPosition.y = event.clientY - bounds.top;
      scheduleFieldUpdate();
    }

    function handlePointerLeave() {
      const nextCenter = centerField();
      isPointerInside = false;
      targetPosition.x = nextCenter.x;
      targetPosition.y = nextCenter.y;
      scheduleFieldUpdate();
    }

    function handleResize() {
      if (!isPointerInside) {
        handlePointerLeave();
      }
    }

    hero.addEventListener('pointermove', handlePointerMove, { passive: true });
    hero.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      hero.style.removeProperty('--pointer-x');
      hero.style.removeProperty('--pointer-y');

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const scrollCue = scrollCueRef.current;
    let animationFrame = null;
    let entranceTimer = null;

    if (!scrollCue) {
      return undefined;
    }

    function updateScrollCue() {
      scrollCue.dataset.hidden = String(window.scrollY > 24);
      animationFrame = null;
    }

    function handleScroll() {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScrollCue);
      }
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    scrollCue.dataset.ready = String(prefersReducedMotion);
    entranceTimer = window.setTimeout(
      () => {
        scrollCue.dataset.ready = 'true';
      },
      prefersReducedMotion ? 0 : 1100,
    );

    updateScrollCue();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(entranceTimer);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      aria-labelledby="home-manifesto"
      className="manifesto-hero relative left-1/2 isolate flex w-[100dvw] -translate-x-1/2 items-center overflow-hidden pb-6 sm:pb-8 lg:pb-10"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveKeywordId(null);
        }
      }}
    >
      <div aria-hidden="true" className="hero-light-fields">
        <div ref={pointerFieldRef} className="hero-pointer-field" />
      </div>

      <HeroBackground activeConcept={activeKeywordId} />
      <div aria-hidden="true" className="hero-readability-mask" />

      <div className="manifesto-composition relative z-10 mx-auto w-full max-w-7xl px-4 text-left sm:px-5 sm:text-center lg:px-6">
        <h1
          id="home-manifesto"
          className="manifesto-statement text-[clamp(1rem,5.35vw,1.875rem)] font-semibold leading-[1.12] tracking-[0.005em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          data-has-active-keyword={Boolean(activeKeywordId)}
        >
          {manifestoLines.map((line, lineIndex) => (
            <span
              key={line.map((segment) => segment.text).join('')}
              className="block sm:whitespace-nowrap"
            >
              {line.map((segment) => (
                <ManifestoSegment
                  key={`${segment.text}-${segment.keywordId ?? ''}`}
                  activeKeywordId={activeKeywordId}
                  keyword={keywordById[segment.keywordId]}
                  onActivate={setActiveKeywordId}
                  segment={segment}
                />
              ))}
              {lineIndex < manifestoLines.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <ManifestoContext activeKeyword={activeKeyword} />
      </div>

      <div
        ref={scrollCueRef}
        aria-hidden="true"
        className="hero-scroll-cue"
        data-hidden="false"
        data-ready="false"
      >
        <span>Scroll to explore</span>
        <span className="hero-scroll-cue__line" />
      </div>
    </section>
  );
}
