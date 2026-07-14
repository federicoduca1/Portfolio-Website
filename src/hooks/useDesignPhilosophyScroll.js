import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACTIVE_TEXT_COLOR = '#0a0a0a';
const INACTIVE_NUMBER_COLOR = '#d4d4d4';
const INACTIVE_TEXT_COLOR = '#525252';
const COMPACT_TEXT_COLOR = '#262626';
const EYEBROW_TEXT_COLOR = '#737373';
const PROGRESS_TRACK_COLOR = '#e5e5e5';
const ACTIVE_NUMBER_SIZE = 112;
const INACTIVE_NUMBER_SIZE = 64;
const ACTIVE_TITLE_SIZE = 44;
const INACTIVE_TITLE_SIZE = 32;
const PRINCIPLES_START = 0.07;
const FINAL_STATE_START = 0.84;
const GUIDED_EXIT_THRESHOLD = 24;
const GUIDED_EXIT_TIMEOUT = 1600;

export function useDesignPhilosophyScroll(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const context = gsap.context(() => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add(
        {
          desktop: '(min-width: 900px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        ({ conditions }) => {
          const shouldAnimate = conditions.desktop && !conditions.reduceMotion;
          const story = section.querySelector('[data-design-philosophy-story]');
          const principlesViewport = section.querySelector(
            '[data-design-principles-viewport]',
          );
          const principlesTrack = section.querySelector(
            '[data-design-principles]',
          );
          const principles = gsap.utils.toArray(
            section.querySelectorAll('[data-design-principle]'),
          );

          if (
            !story ||
            !principlesViewport ||
            !principlesTrack ||
            principles.length === 0
          ) {
            return undefined;
          }

          const descriptions = principles.map((principle) =>
            principle.querySelector('[data-design-principle-description]'),
          );
          const titles = principles.map((principle) =>
            principle.querySelector('[data-design-principle-title]'),
          );
          const numbers = principles.map((principle) =>
            principle.querySelector('[data-design-principle-number]'),
          );
          const eyebrows = principles.map((principle) =>
            principle.querySelector('[data-design-principle-eyebrow]'),
          );
          const lines = principles.map((principle) =>
            principle.querySelector('[data-design-principle-line]'),
          );
          const separators = principles.map((principle) =>
            principle.querySelector('[data-design-principle-separator]'),
          );
          const topSeparator = section.querySelector(
            '[data-design-principles-top-separator]',
          );
          const progressCurrent = section.querySelector(
            '[data-design-progress-current]',
          );
          const progressSegments = gsap.utils.toArray(
            section.querySelectorAll('[data-design-progress-segment]'),
          );
          const accentColor = window
            .getComputedStyle(section)
            .getPropertyValue('--color-accent-600')
            .trim();

          if (!shouldAnimate) {
            gsap.set(
              [
                ...principles,
                ...descriptions,
                ...titles,
                ...numbers,
                ...eyebrows,
                ...lines,
                ...separators,
                ...progressSegments,
                principlesTrack,
                topSeparator,
              ],
              { clearProps: 'all' },
            );

            return undefined;
          }

          let activeIndex = -1;
          let transitionTimeline = null;
          let guidedScrollFrame = null;
          let guidedScrollStartedAt = 0;
          let exitScrollIntent = 0;
          let isGuidedScrollActive = false;

          function updateProgress(nextIndex) {
            if (progressCurrent) {
              progressCurrent.textContent = String(nextIndex + 1).padStart(
                2,
                '0',
              );
            }
          }

          function getCenteredTrackOffset(element, targetRatio = 0.5) {
            const viewportBounds = principlesViewport.getBoundingClientRect();
            const elementBounds = element.getBoundingClientRect();
            const currentTrackY =
              Number.parseFloat(gsap.getProperty(principlesTrack, 'y')) || 0;

            return (
              currentTrackY +
              viewportBounds.top +
              viewportBounds.height * targetRatio -
              (elementBounds.top + elementBounds.height / 2)
            );
          }

          function setCompactState({ final = false } = {}) {
            transitionTimeline?.kill();
            const progressIndex = final ? principles.length - 1 : 0;
            activeIndex = final ? principles.length : -1;

            transitionTimeline = gsap.timeline({
              defaults: { ease: 'power2.out', overwrite: true },
            });

            transitionTimeline.to(principles, {
              paddingTop: 32,
              paddingBottom: 32,
              duration: 0.35,
            }, 0);
            transitionTimeline.to(final ? principles.slice(1) : principles, {
              opacity: 0.88,
              duration: 0.35,
            }, 0);

            if (final) {
              transitionTimeline.set(principles[0], { opacity: 0 }, 0);
              transitionTimeline.to(principles[0], {
                opacity: 0.88,
                duration: 0.22,
              }, 0.3);
            }
            transitionTimeline.to(descriptions, {
              height: 0,
              opacity: 0,
              y: 10,
              marginTop: 0,
              duration: 0.35,
            }, 0);
            transitionTimeline.to(titles, {
              color: COMPACT_TEXT_COLOR,
              fontSize: INACTIVE_TITLE_SIZE,
              duration: 0.35,
            }, 0);
            transitionTimeline.to(numbers, {
              color: INACTIVE_NUMBER_COLOR,
              fontSize: INACTIVE_NUMBER_SIZE,
              duration: 0.35,
            }, 0);
            transitionTimeline.to(eyebrows, {
              color: EYEBROW_TEXT_COLOR,
              opacity: 0.68,
              y: 0,
              duration: 0.3,
            }, 0);
            transitionTimeline.to(lines, {
              scaleX: 0,
              duration: 0.3,
            }, 0);
            if (final) {
              transitionTimeline.set(
                [topSeparator, separators[0]],
                { opacity: 0 },
                0,
              );
              transitionTimeline.to(separators.slice(1), {
                opacity: 1,
                duration: 0.25,
              }, 0);
              transitionTimeline.to([topSeparator, separators[0]], {
                opacity: 1,
                duration: 0.22,
              }, 0.3);
            } else {
              transitionTimeline.to([topSeparator, ...separators], {
                opacity: 1,
                duration: 0.25,
              }, 0);
            }
            transitionTimeline.to(principlesTrack, {
              y: 0,
              duration: final ? 0.46 : 0.4,
            }, final ? 0 : 0.28);
            transitionTimeline.call(
              () => updateProgress(progressIndex),
              [],
              0.18,
            );
            transitionTimeline.to(progressSegments, {
              backgroundColor: (index) =>
                index <= progressIndex ? accentColor : PROGRESS_TRACK_COLOR,
              duration: 0.3,
            }, 0.18);
          }

          function setFinalCompactState() {
            if (activeIndex !== principles.length) {
              setCompactState({ final: true });
            }
          }

          function finishGuidedScroll(targetTop) {
            if (
              Math.abs(window.scrollY - targetTop) < 2 ||
              window.performance.now() - guidedScrollStartedAt >
                GUIDED_EXIT_TIMEOUT ||
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
              exitScrollIntent = 0;
              return;
            }

            if (
              scrollTrigger.progress < FINAL_STATE_START ||
              activeIndex !== principles.length
            ) {
              return;
            }

            const featuredHeading = document.getElementById('featured-projects');
            const featuredSection = featuredHeading?.closest('section');

            if (!featuredSection) {
              return;
            }

            event.preventDefault();

            if (isGuidedScrollActive) {
              return;
            }

            exitScrollIntent += event.deltaY;

            if (exitScrollIntent < GUIDED_EXIT_THRESHOLD) {
              return;
            }

            const navbar = document
              .querySelector('nav[aria-label="Global navigation"]')
              ?.closest('header');
            const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
            const targetTop = Math.max(
              0,
              window.scrollY +
                featuredSection.getBoundingClientRect().top -
                navbarHeight,
            );

            exitScrollIntent = 0;
            guidedScrollStartedAt = window.performance.now();
            isGuidedScrollActive = true;

            window.scrollTo({
              top: targetTop,
              behavior: 'smooth',
            });

            guidedScrollFrame = window.requestAnimationFrame(() =>
              finishGuidedScroll(targetTop),
            );
          }

          function setActivePrinciple(nextIndex) {
            if (activeIndex === nextIndex) {
              return;
            }

            transitionTimeline?.kill();
            activeIndex = nextIndex;

            const inactiveIndexes = principles
              .map((_, index) => index)
              .filter((index) => index !== nextIndex);
            const visibleIndexes = [nextIndex - 1, nextIndex].filter(
              (index) => index >= 0,
            );
            const concealedIndexes = principles
              .map((_, index) => index)
              .filter((index) => !visibleIndexes.includes(index));
            const visibleInactiveIndexes = inactiveIndexes.filter(
              (index) => !concealedIndexes.includes(index),
            );
            const inactivePrinciples = inactiveIndexes.map(
              (index) => principles[index],
            );
            const visibleInactivePrinciples = visibleInactiveIndexes.map(
              (index) => principles[index],
            );
            const concealedPrinciples = concealedIndexes.map(
              (index) => principles[index],
            );
            const inactiveDescriptions = inactiveIndexes.map(
              (index) => descriptions[index],
            );
            const inactiveTitles = inactiveIndexes.map(
              (index) => titles[index],
            );
            const inactiveNumbers = inactiveIndexes.map(
              (index) => numbers[index],
            );
            const inactiveEyebrows = inactiveIndexes.map(
              (index) => eyebrows[index],
            );
            const inactiveLines = inactiveIndexes.map((index) => lines[index]);

            transitionTimeline = gsap.timeline({
              defaults: { ease: 'power2.out', overwrite: true },
            });

            transitionTimeline.to(inactivePrinciples, {
              paddingTop: 28,
              paddingBottom: 28,
              duration: 0.3,
            }, 0);
            transitionTimeline.to(visibleInactivePrinciples, {
              opacity: 0.78,
              duration: 0.3,
            }, 0);
            transitionTimeline.to(concealedPrinciples, {
              opacity: 0,
              duration: 0.3,
            }, 0);
            transitionTimeline.to(topSeparator, {
              opacity: visibleIndexes.includes(0) ? 1 : 0,
              duration: 0.25,
            }, 0);
            transitionTimeline.to(separators, {
              opacity: (index) =>
                visibleIndexes.includes(index) ? 1 : 0,
              duration: 0.25,
            }, 0);
            transitionTimeline.to(inactiveDescriptions, {
              height: 0,
              opacity: 0,
              y: 10,
              marginTop: 0,
              duration: 0.3,
            }, 0);
            transitionTimeline.to(inactiveNumbers, {
              color: INACTIVE_NUMBER_COLOR,
              fontSize: INACTIVE_NUMBER_SIZE,
              duration: 0.32,
            }, 0);
            transitionTimeline.to(inactiveTitles, {
              color: INACTIVE_TEXT_COLOR,
              fontSize: INACTIVE_TITLE_SIZE,
              y: 0,
              duration: 0.32,
            }, 0);
            transitionTimeline.to(inactiveEyebrows, {
              color: EYEBROW_TEXT_COLOR,
              opacity: 0.78,
              y: 0,
              duration: 0.28,
            }, 0);
            transitionTimeline.to(inactiveLines, {
              scaleX: 0,
              duration: 0.26,
            }, 0);

            transitionTimeline.to(principles[nextIndex], {
              opacity: 1,
              paddingTop: 64,
              paddingBottom: 64,
              duration: 0.48,
            }, 0.1);
            transitionTimeline.to(numbers[nextIndex], {
              color: accentColor,
              fontSize: ACTIVE_NUMBER_SIZE,
              duration: 0.46,
            }, 0.12);
            transitionTimeline.to(eyebrows[nextIndex], {
              color: COMPACT_TEXT_COLOR,
              opacity: 1,
              y: 0,
              duration: 0.36,
            }, 0.18);
            transitionTimeline.fromTo(
              titles[nextIndex],
              { y: 4 },
              {
                color: ACTIVE_TEXT_COLOR,
                fontSize: ACTIVE_TITLE_SIZE,
                y: 0,
                duration: 0.42,
              },
              0.2,
            );
            transitionTimeline.to(descriptions[nextIndex], {
              height: 'auto',
              opacity: 1,
              y: 0,
              marginTop: 28,
              duration: 0.48,
            }, 0.28);
            transitionTimeline.to(principlesTrack, {
              y: () => getCenteredTrackOffset(principles[nextIndex], 0.44),
              duration: 0.52,
            }, 0.26);
            transitionTimeline.to(lines[nextIndex], {
              scaleX: 1,
              duration: 0.4,
            }, 0.34);

            if (progressCurrent) {
              transitionTimeline.to(progressCurrent, {
                opacity: 0,
                y: -4,
                duration: 0.14,
              }, 0.3);
              transitionTimeline.call(
                () => updateProgress(nextIndex),
                [],
                0.43,
              );
              transitionTimeline.to(progressCurrent, {
                color: accentColor,
                opacity: 1,
                y: 0,
                duration: 0.2,
              }, 0.44);
            }

            transitionTimeline.to(progressSegments, {
              backgroundColor: (index) =>
                index <= nextIndex ? accentColor : PROGRESS_TRACK_COLOR,
              duration: 0.34,
              stagger: 0.04,
            }, 0.4);
          }

          gsap.set(descriptions, {
            height: 0,
            opacity: 0,
            overflow: 'hidden',
            y: 10,
            marginTop: 0,
          });
          gsap.set(principles, { opacity: 0.88 });
          gsap.set(titles, {
            color: COMPACT_TEXT_COLOR,
            fontSize: INACTIVE_TITLE_SIZE,
          });
          gsap.set(numbers, {
            color: INACTIVE_NUMBER_COLOR,
            fontSize: INACTIVE_NUMBER_SIZE,
          });
          gsap.set(eyebrows, {
            color: EYEBROW_TEXT_COLOR,
            opacity: 0.68,
          });
          gsap.set(lines, { scaleX: 0 });
          gsap.set([topSeparator, ...separators], { opacity: 1 });
          gsap.set(principlesTrack, { y: 0 });
          gsap.set(progressSegments, {
            backgroundColor: (index) =>
              index === 0 ? accentColor : PROGRESS_TRACK_COLOR,
          });
          updateProgress(0);

          const scrollTrigger = ScrollTrigger.create({
            trigger: section,
            pin: story,
            start: 'top 6%',
            end: '+=165%',
            scrub: 0.35,
            invalidateOnRefresh: true,
            onEnter: () => {
              if (activeIndex !== -1) {
                setCompactState();
              }
            },
            onEnterBack: () => setActivePrinciple(2),
            onLeave: setFinalCompactState,
            onLeaveBack: setCompactState,
            onUpdate: (self) => {
              if (self.progress < PRINCIPLES_START) {
                if (activeIndex !== -1) {
                  setCompactState();
                }

                return;
              }

              if (self.progress >= FINAL_STATE_START) {
                if (self.direction > 0) {
                  setFinalCompactState();
                } else {
                  setActivePrinciple(principles.length - 1);
                }

                return;
              }

              const progressIndex = Math.min(
                principles.length - 1,
                Math.floor(
                  ((self.progress - PRINCIPLES_START) /
                    (FINAL_STATE_START - PRINCIPLES_START)) *
                    principles.length,
                ),
              );

              setActivePrinciple(progressIndex);
            },
          });

          section.addEventListener('wheel', handleGuidedExit, {
            passive: false,
          });

          ScrollTrigger.refresh();

          return () => {
            section.removeEventListener('wheel', handleGuidedExit);

            if (guidedScrollFrame !== null) {
              window.cancelAnimationFrame(guidedScrollFrame);
            }

            transitionTimeline?.kill();
            scrollTrigger.kill();
          };
        },
      );

      return () => {
        matchMedia.revert();
      };
    }, section);

    return () => {
      context.revert();
    };
  }, [sectionRef]);
}
