import { useEffect, useState } from 'react';

export default function useActiveCaseStudySection(sections) {
  const [activeSectionId, setActiveSectionId] = useState(() => {
    const hash = window.location.hash.slice(1);
    return sections.some((section) => section.id === hash)
      ? hash
      : sections[0]?.id;
  });

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const visibleSections = new Map();
    const activationLine = window.innerHeight * 0.34;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.target);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (!visibleSections.size) {
          return;
        }

        const closestSection = [...visibleSections.values()].sort(
          (first, second) =>
            Math.abs(first.getBoundingClientRect().top - activationLine) -
            Math.abs(second.getBoundingClientRect().top - activationLine),
        )[0];

        setActiveSectionId((current) =>
          current === closestSection.id ? current : closestSection.id,
        );
      },
      {
        rootMargin: '-28% 0px -62% 0px',
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  return activeSectionId;
}
