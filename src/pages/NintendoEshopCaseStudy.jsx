import CaseStudyHero from '../components/case-study/CaseStudyHero.jsx';
import CaseStudyLayout from '../components/case-study/CaseStudyLayout.jsx';
import MediaPlaceholder from '../components/case-study/MediaPlaceholder.jsx';
import NextProject from '../components/case-study/NextProject.jsx';
import CaseStudyVisualBreak from '../components/case-study/CaseStudyVisualBreak.jsx';
import ProjectOverview from '../components/case-study/ProjectOverview.jsx';
import NintendoCaseStudySections from '../components/projects/nintendo/NintendoCaseStudySections.jsx';
import {
  nintendoCaseStudyContent,
  nintendoProjectConfig,
} from '../data/nintendoCaseStudy.js';

export default function NintendoEshopCaseStudy() {
  const project = nintendoProjectConfig;
  const content = nintendoCaseStudyContent;

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
        className="bg-neutral-50 pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <MediaPlaceholder
            {...content.heroVisual}
            presentation="hero"
          />
        </div>
      </section>
      <ProjectOverview {...content.overview} />
      <CaseStudyVisualBreak {...content.visualBreak} />

      <CaseStudyLayout project={project}>
        <NintendoCaseStudySections content={content} />
      </CaseStudyLayout>

      <NextProject project={project.nextProject} />
    </article>
  );
}
