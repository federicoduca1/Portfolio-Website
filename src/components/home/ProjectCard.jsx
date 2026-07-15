import { Link } from 'react-router';

function ProjectMedia({ project, variant }) {
  const isFeatured = variant === 'featured';
  const media = project.media;
  const imageSource = media?.type === 'image' ? media.src : project.thumbnail;
  const frameClassName = isFeatured
    ? 'aspect-square md:aspect-[2/1] lg:aspect-[12/5]'
    : 'aspect-square';

  let mediaContent = (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-neutral-200 text-sm uppercase tracking-[0.18em] text-neutral-500"
    >
      Visual placeholder
    </div>
  );

  if (media?.type === 'video') {
    mediaContent = (
      <video
        aria-label={media.alt ?? `${project.title} project preview`}
        autoPlay
        loop
        muted
        playsInline
        poster={media.poster}
        className="h-full w-full object-cover"
      >
        <source src={media.src} type={media.mimeType} />
      </video>
    );
  } else if (imageSource) {
    mediaContent = (
      <img
        src={imageSource}
        alt={media?.alt ?? `${project.title} project preview`}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className={`project-card__visual relative overflow-hidden ${frameClassName}`}>
      <div className="project-card__media h-full w-full">{mediaContent}</div>
    </div>
  );
}

export default function ProjectCard({ project, variant = 'grid' }) {
  const isFeatured = variant === 'featured';
  const projectPath =
    project.path ??
    (project.slug ? `/projects/${project.slug}` : `/projects#${project.id}`);
  const titleClassName = isFeatured
    ? 'project-card__title text-2xl font-semibold leading-tight text-neutral-800 md:text-4xl'
    : 'project-card__title text-2xl font-semibold leading-tight text-neutral-800';
  const metadata = [project.category, project.year].filter(Boolean).join(' / ');

  return (
    <article
      id={project.id}
      className="project-card h-full border border-neutral-200 bg-neutral-50"
    >
      <Link
        to={projectPath}
        aria-label={`View ${project.title} project`}
        className="project-card__link block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
      >
        <ProjectMedia project={project} variant={variant} />

        <div
          className={
            isFeatured
              ? 'space-y-5 p-6 sm:p-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-6 lg:space-y-0 lg:p-10 xl:p-12'
              : 'space-y-5 p-6 sm:p-8 lg:p-10'
          }
        >
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
              {metadata}
            </p>
            {project.metadata ? (
              <p className="text-sm text-neutral-500">{project.metadata}</p>
            ) : null}
          </div>

          <div>
            <h3 className={titleClassName}>{project.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
