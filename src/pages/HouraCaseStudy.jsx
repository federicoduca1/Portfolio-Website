import CaseStudyHero from '../components/case-study/CaseStudyHero.jsx';
import CaseStudyLayout from '../components/case-study/CaseStudyLayout.jsx';
import CaseStudyMediaPlaceholder from '../components/case-study/CaseStudyMediaPlaceholder.jsx';
import CaseStudyVisualBreak from '../components/case-study/CaseStudyVisualBreak.jsx';
import NextProject from '../components/case-study/NextProject.jsx';
import ProjectOverview from '../components/case-study/ProjectOverview.jsx';
import HouraCaseStudySections from '../components/projects/houra/HouraCaseStudySections.jsx';
import {
  houraCaseStudyContent,
  houraProjectConfig,
} from '../data/houraCaseStudy.js';

export default function HouraCaseStudy() {
  const project = houraProjectConfig;
  const content = houraCaseStudyContent;

  return (
    <article
      className="case-study-page overflow-x-clip bg-neutral-50"
      style={{
        '--project-accent': project.theme.accent,
        '--project-accent-soft': project.theme.accentSoft,
        '--project-accent-secondary': project.theme.secondary,
        '--project-surface': project.theme.surface,
        '--project-surface-elevated': project.theme.surfaceElevated,
      }}
    >
      <CaseStudyHero project={project} variant={project.hero.variant} />

      <section
        aria-label={content.heroVisual.label}
        className="-mt-20 bg-neutral-50 pb-16 sm:-mt-28 sm:pb-20 lg:-mt-36 lg:pb-24"
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
        navigationStickyStartId="challenge"
        project={project}
      >
        <HouraCaseStudySections content={content} />
      </CaseStudyLayout>

      <NextProject project={project.nextProject} />
    </article>
  );
}
