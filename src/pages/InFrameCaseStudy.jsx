import CaseStudyHero from '../components/case-study/CaseStudyHero.jsx';
import CaseStudyLayout from '../components/case-study/CaseStudyLayout.jsx';
import CaseStudyMediaPlaceholder from '../components/case-study/CaseStudyMediaPlaceholder.jsx';
import CaseStudyVisualBreak from '../components/case-study/CaseStudyVisualBreak.jsx';
import NextProject from '../components/case-study/NextProject.jsx';
import ProjectOverview from '../components/case-study/ProjectOverview.jsx';
import InFrameCaseStudySections from '../components/projects/inframe/InFrameCaseStudySections.jsx';
import {
  inFrameCaseStudyContent,
  inFrameProjectConfig,
} from '../data/inFrameCaseStudy.js';

export default function InFrameCaseStudy() {
  const project = inFrameProjectConfig;
  const content = inFrameCaseStudyContent;

  return (
    <article
      className="case-study-page overflow-x-clip bg-neutral-50"
      style={{
        '--project-accent': project.theme.accent,
        '--project-accent-soft': project.theme.accentSoft,
        '--project-surface': project.theme.surface,
        '--project-surface-elevated': project.theme.surfaceElevated,
      }}
    >
      <CaseStudyHero project={project} variant={project.hero.variant} />

      <section
        aria-label={content.heroVisual.label}
        className="bg-neutral-50 pb-14 sm:pb-16 lg:pb-20"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <CaseStudyMediaPlaceholder
            {...content.heroVisual}
            className="mx-auto"
          />
        </div>
      </section>

      <ProjectOverview {...content.overview} />
      <CaseStudyVisualBreak {...content.visualBreak} />

      <CaseStudyLayout
        navigationStickyEndId="next-project"
        navigationStickyStartId="challenge"
        navigationStickyStopId="reflection"
        project={project}
      >
        <InFrameCaseStudySections content={content} />
      </CaseStudyLayout>

      <NextProject project={project.nextProject} />
    </article>
  );
}
