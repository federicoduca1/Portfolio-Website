import ProjectCardCursor from './ProjectCardCursor.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectGrid({ projects, layout = 'featured' }) {
  if (layout === 'grid') {
    return (
      <div className="project-card-group grid gap-8 md:grid-cols-2 lg:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="grid" />
        ))}
        <ProjectCardCursor />
      </div>
    );
  }

  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <div className="project-card-group space-y-8 lg:space-y-12">
      <ProjectCard project={featuredProject} variant="featured" />

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="square" />
        ))}
      </div>
      <ProjectCardCursor />
    </div>
  );
}
