import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ProjectGrid from './ProjectGrid.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function FeaturedProjectsSection({ content }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          animate: '(prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        ({ conditions }) => {
          const title = section.querySelector('[data-section-title]');
          const letters = gsap.utils.toArray(
            section.querySelectorAll('[data-section-title-letter]'),
          );
          const highlight = title?.querySelector(
            '.section-title-highlight__stroke',
          );
          const description = section.querySelector(
            '[data-section-description]',
          );
          const cards = gsap.utils.toArray(
            section.querySelectorAll('.project-card'),
          );

          if (!title || !highlight || !description || cards.length === 0) {
            return undefined;
          }

          if (conditions.reduceMotion) {
            title.dataset.highlightVisible = 'true';
            gsap.set([...letters, description, ...cards, highlight], {
              clearProps: 'all',
            });
            return undefined;
          }

          title.dataset.highlightVisible = 'false';
          gsap.set(letters, { opacity: 0, x: -6 });
          gsap.set(highlight, {
            scaleX: 0,
            transformOrigin: 'left center',
            transition: 'none',
          });
          gsap.set(description, { opacity: 0, y: 14 });
          gsap.set(cards, { opacity: 0, y: 24 });

          const timeline = gsap.timeline({ paused: true });

          timeline.to(letters, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.025,
            ease: 'power2.out',
          });
          timeline.to(highlight, {
            scaleX: 1,
            duration: 1.25,
            ease: 'power2.inOut',
          });
          timeline.call(() => {
            title.dataset.highlightVisible = 'true';
            gsap.set(highlight, { clearProps: 'all' });
          });
          timeline.to(description, {
            opacity: 1,
            y: 0,
            duration: 0.52,
            ease: 'power2.out',
          });
          timeline.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.62,
            ease: 'power2.out',
            onComplete: () => {
              gsap.set([...letters, description, ...cards], {
                clearProps: 'opacity,transform',
              });
            },
          });

          if (!('IntersectionObserver' in window)) {
            timeline.play(0);
            return () => timeline.kill();
          }

          const observer = new IntersectionObserver(
            ([entry]) => {
              if (!entry.isIntersecting) {
                return;
              }

              observer.disconnect();
              timeline.play(0);
            },
            {
              rootMargin: '0px 0px -12% 0px',
              threshold: 0.08,
            },
          );

          observer.observe(section);

          return () => {
            observer.disconnect();
            timeline.kill();
          };
        },
      );
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-projects"
      className="space-y-12 pt-8 sm:pt-12 lg:space-y-16 lg:pt-16"
    >
      <SectionHeading
        id="featured-projects"
        title={content.title}
        description={content.description}
        variant="featured"
      />
      <ProjectGrid projects={content.projects} />
    </section>
  );
}
