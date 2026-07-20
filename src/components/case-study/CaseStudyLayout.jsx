import { useRef } from 'react';
import useActiveCaseStudySection from '../../hooks/useActiveCaseStudySection.js';
import useCaseStudyProgress from '../../hooks/useCaseStudyProgress.js';
import CaseStudyNavigation from './CaseStudyNavigation.jsx';

export default function CaseStudyLayout({ project, children }) {
  const containerRef = useRef(null);
  const activeSectionId = useActiveCaseStudySection(project.navigation);

  useCaseStudyProgress(containerRef);

  return (
    <div
      ref={containerRef}
      className="case-study-body bg-neutral-50"
    >
      <div className="mx-auto grid max-w-[110rem] px-0 min-[1180px]:grid-cols-[clamp(10.625rem,15vw,13.75rem)_minmax(0,1fr)] min-[1180px]:gap-[clamp(1.75rem,2.5vw,2.5rem)] min-[1180px]:px-[clamp(1.5rem,2.5vw,2.5rem)]">
        <CaseStudyNavigation
          activeSectionId={activeSectionId}
          project={project}
          sections={project.navigation}
        />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
