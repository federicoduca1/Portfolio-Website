import ProjectCard from './ProjectCard.jsx';

export default function ProjectGrid({ projects }) {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <div className="space-y-8 lg:space-y-10">
      <ProjectCard project={featuredProject} variant="featured" />

      <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="square" />
        ))}
      </div>
    </div>
  );
}
