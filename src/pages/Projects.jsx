import ProjectGrid from '../components/home/ProjectGrid.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section aria-labelledby="projects-title" className="space-y-12">
      <header className="space-y-3">
        <h1 id="projects-title" className="text-3xl font-semibold">
          Projects
        </h1>
        <p className="max-w-2xl text-neutral-600">
          Temporary placeholder for future case studies and selected work.
        </p>
      </header>

      <ProjectGrid projects={projects} layout="grid" />
    </section>
  );
}
