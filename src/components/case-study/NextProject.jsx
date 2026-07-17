import { Link } from 'react-router';
import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function NextProject({ project }) {
  return (
    <section className="border-t border-neutral-200 bg-neutral-100">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div>
          <p className="text-sm font-semibold tracking-[0.12em] text-neutral-500 uppercase">
            {project.eyebrow}
          </p>
          <h2>
            <Link
              to={project.path}
              className="group mt-5 inline-flex items-center gap-4 text-[clamp(3rem,7vw,7rem)] leading-none font-medium text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-focus-ring"
            >
              <span>{project.title}</span>
              <span
                aria-hidden="true"
                className="text-[0.55em] text-[var(--project-accent)] transition-transform duration-200 group-hover:translate-x-2 group-focus-visible:translate-x-2"
              >
                →
              </span>
            </Link>
          </h2>
          <p className="mt-6 max-w-[32rem] text-xl leading-[1.5] text-neutral-700 sm:text-2xl">
            {project.statement}
          </p>
          <p className="mt-6 text-sm text-neutral-500 sm:text-base">
            {project.metadata}
          </p>
        </div>

        <Link
          to={project.path}
          aria-label={`View ${project.title} project`}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-focus-ring"
        >
          <MediaPlaceholder
            label={project.mediaLabel}
            aspect="landscape"
            tone="light"
          />
        </Link>
      </div>
    </section>
  );
}
