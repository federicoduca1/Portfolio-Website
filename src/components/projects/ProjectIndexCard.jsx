import { Link } from 'react-router';
import ProjectPreviewMedia from './ProjectPreviewMedia.jsx';

function ProjectIndexContent({ project }) {
  return (
    <>
      <ProjectPreviewMedia project={project} />

      <div className="mt-5 sm:mt-6">
        <div className="flex items-start justify-between gap-5">
          <h2 className="text-2xl leading-tight font-semibold text-neutral-950 transition-colors duration-200 group-hover:text-accent-600 group-focus-visible:text-accent-600 sm:text-[1.75rem]">
            <span>
              {project.title}
            </span>
          </h2>
          <span className="shrink-0 pt-1 text-sm font-medium tabular-nums text-neutral-500 sm:text-base">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed font-semibold tracking-[0.1em] text-neutral-500 uppercase sm:text-sm">
          {project.metadata}
        </p>
        <p className="mt-3 max-w-[38rem] text-base leading-[1.65] text-neutral-600 sm:text-lg">
          {project.description}
        </p>
      </div>
    </>
  );
}

export default function ProjectIndexCard({ project }) {
  const content = <ProjectIndexContent project={project} />;

  return (
    <article id={project.id} className="min-w-0">
      {project.path ? (
        <Link
          to={project.path}
          aria-label={`View ${project.title} case study`}
          className="group block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-focus-ring"
        >
          {content}
        </Link>
      ) : (
        <div>{content}</div>
      )}
    </article>
  );
}
