import { useMemo, useState } from 'react';
import ProjectIndexCard from '../components/projects/ProjectIndexCard.jsx';
import {
  projectIndexProjects,
  projectMediumFilters,
} from '../data/projects.js';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'ALL'
        ? projectIndexProjects
        : projectIndexProjects.filter((project) =>
            project.mediums.includes(activeFilter),
          ),
    [activeFilter],
  );

  return (
    <section aria-labelledby="projects-title" className="pb-12 sm:pb-20">
      <header className="grid gap-6 pt-1 sm:pt-3 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center lg:gap-20">
        <h1
          id="projects-title"
          className="text-[clamp(3rem,4vw,4rem)] leading-[1.05] font-medium text-neutral-950"
        >
          Selected Projects
        </h1>
        <p className="max-w-[46rem] text-xl leading-[1.6] text-neutral-600 sm:text-[1.375rem] lg:justify-self-end">
          A selection of complete case studies showing how I approach product
          problems through systems, interaction and digital experience design.
        </p>
      </header>

      <div
        aria-label="Filter projects by medium"
        className="mt-9 border-b border-neutral-200 pb-4 sm:mt-10"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
          {projectMediumFilters.map((filter) => {
            const isActive = filter === activeFilter;
            const filterLabel =
              filter === 'XR'
                ? filter
                : `${filter.charAt(0)}${filter.slice(1).toLowerCase()}`;

            return (
              <button
                key={filter}
                type="button"
                aria-controls="project-index-grid"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`border-b py-1 text-xs font-semibold tracking-[0.1em] transition-colors duration-200 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring sm:text-sm ${
                  isActive
                    ? 'border-accent-600 text-accent-600'
                    : 'border-transparent text-neutral-400 hover:text-neutral-800'
                }`}
              >
                {filterLabel}
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length}{' '}
        {filteredProjects.length === 1 ? 'project' : 'projects'}.
      </p>

      <div
        id="project-index-grid"
        className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-9 lg:gap-x-12 lg:gap-y-20"
      >
        {filteredProjects.map((project) => (
          <ProjectIndexCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
