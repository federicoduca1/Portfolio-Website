import ProjectGrid from './ProjectGrid.jsx';
import SectionIntro from './SectionIntro.jsx';

export default function FeaturedProjectsSection({ content }) {
  return (
    <section aria-labelledby="featured-projects" className="space-y-12">
      <SectionIntro
        id="featured-projects"
        title={content.title}
        description={content.description}
        size="large"
      />
      <ProjectGrid projects={content.projects} />
    </section>
  );
}
