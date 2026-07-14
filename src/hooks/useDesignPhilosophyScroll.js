import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACTIVE_NUMBER_COLOR = '#0a0a0a';
const ACTIVE_TEXT_COLOR = '#0a0a0a';
const INACTIVE_NUMBER_COLOR = '#d4d4d4';
const INACTIVE_TEXT_COLOR = '#525252';
const COMPACT_TEXT_COLOR = '#262626';

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
          const principles = gsap.utils.toArray(
            section.querySelectorAll('[data-design-principle]'),
          );

          if (!story || principles.length === 0) {
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

          if (!shouldAnimate) {
            gsap.set([...principles, ...descriptions, ...titles, ...numbers], {
              clearProps: 'all',
            });

            return undefined;
          }

          let activeIndex = -1;

          function setCompactState() {
            activeIndex = -1;

            gsap.to(principles, {
              opacity: 0.88,
              paddingTop: 32,
              paddingBottom: 32,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: true,
            });
            gsap.to(descriptions, {
              height: 0,
              opacity: 0,
              y: 10,
              marginTop: 0,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: true,
            });
            gsap.to(titles, {
              color: COMPACT_TEXT_COLOR,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: true,
            });
            gsap.to(numbers, {
              color: INACTIVE_NUMBER_COLOR,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: true,
            });
          }

          function setActivePrinciple(nextIndex) {
            if (activeIndex === nextIndex) {
              return;
            }

            activeIndex = nextIndex;

            principles.forEach((principle, index) => {
              const isActive = index === nextIndex;

              gsap.to(principle, {
                opacity: isActive ? 1 : 0.68,
                paddingTop: isActive ? 56 : 30,
                paddingBottom: isActive ? 56 : 30,
                duration: 0.48,
                ease: 'power2.out',
                overwrite: true,
              });

              gsap.to(numbers[index], {
                color: isActive ? ACTIVE_NUMBER_COLOR : INACTIVE_NUMBER_COLOR,
                duration: 0.45,
                ease: 'power2.out',
                overwrite: true,
              });

              gsap.to(titles[index], {
                color: isActive ? ACTIVE_TEXT_COLOR : INACTIVE_TEXT_COLOR,
                duration: 0.45,
                ease: 'power2.out',
                overwrite: true,
              });

              gsap.to(descriptions[index], {
                height: isActive ? 'auto' : 0,
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 10,
                marginTop: isActive ? 20 : 0,
                duration: 0.48,
                ease: 'power2.out',
                overwrite: true,
              });
            });
          }

          gsap.set(descriptions, {
            height: 0,
            opacity: 0,
            overflow: 'hidden',
            y: 10,
            marginTop: 0,
          });
          gsap.set(principles, { opacity: 0.88 });
          gsap.set(titles, { color: COMPACT_TEXT_COLOR });
          gsap.set(numbers, { color: INACTIVE_NUMBER_COLOR });

          const scrollTrigger = ScrollTrigger.create({
            trigger: section,
            pin: story,
            start: 'top 18%',
            end: '+=135%',
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => setActivePrinciple(0),
            onEnterBack: () => setActivePrinciple(2),
            onLeaveBack: setCompactState,
            onUpdate: (self) => {
              const progressIndex = Math.min(
                principles.length - 1,
                Math.floor(self.progress * principles.length),
              );

              setActivePrinciple(progressIndex);
            },
          });

          ScrollTrigger.refresh();

          return () => {
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
