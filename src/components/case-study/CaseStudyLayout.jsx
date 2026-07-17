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
      <div className="mx-auto grid max-w-[90rem] px-0 min-[1180px]:grid-cols-[12rem_minmax(0,1fr)] min-[1180px]:gap-16 min-[1180px]:px-12 xl:gap-20">
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
