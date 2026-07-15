import ProjectGrid from './ProjectGrid.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function FeaturedProjectsSection({ content }) {
  return (
    <section
      aria-labelledby="featured-projects"
      className="space-y-12 pt-20 sm:pt-28 lg:space-y-16 lg:pt-36"
    >
      <SectionHeading
        id="featured-projects"
        title={content.title}
        description={content.description}
      />
      <ProjectGrid projects={content.projects} />
    </section>
  );
}
