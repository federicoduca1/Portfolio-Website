import CaseStudyHeroMedia from './CaseStudyHeroMedia.jsx';
import MediaPlaceholder from './MediaPlaceholder.jsx';

function HeroMetadata({ items, project }) {
  const metadataItems =
    items ??
    [
      { value: project.eyebrow, accent: true },
      { value: project.year },
      { value: project.projectType },
    ];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold tracking-[0.13em] uppercase sm:flex-nowrap sm:text-sm">
      {metadataItems.map((item) => (
        <div key={item.value} className="flex shrink-0 items-center">
          <p
            className={`whitespace-nowrap ${
              item.accent ? 'text-[var(--project-accent)]' : 'text-neutral-400'
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function HeroTitle({
  project,
  showStatement = true,
  titleLines,
  wide = false,
}) {
  return (
    <div className={wide ? 'case-study-hero__reading-block w-full' : 'w-full'}>
      <h1
        className={
          wide
            ? 'case-study-hero__background-title leading-[0.9]'
            : 'max-w-[11ch] text-[clamp(3.5rem,7vw,7.75rem)] leading-[0.92] font-medium'
        }
      >
        {titleLines?.length
          ? titleLines.map((line, index) => (
              <span
                key={line}
                className={index === 0 ? 'block lg:whitespace-nowrap' : 'block'}
              >
                {line}
              </span>
            ))
          : project.title}
      </h1>
      {showStatement ? (
        <p className="mt-10 max-w-[35rem] text-xl leading-[1.58] text-neutral-200 sm:mt-12 sm:text-2xl">
          {project.statement}
        </p>
      ) : null}
    </div>
  );
}

function HeroDetails({ project, protectedArea = false, wide = false }) {
  const layoutClass = protectedArea
    ? 'max-w-[56rem] sm:grid-cols-2 xl:grid-cols-[0.7fr_1.4fr_0.9fr] xl:gap-10'
    : wide
      ? 'max-w-[64rem] sm:grid-cols-2 lg:grid-cols-[0.7fr_1.4fr_0.9fr] lg:gap-10'
      : 'max-w-[42rem] sm:grid-cols-3';

  return (
    <>
      <dl className={`grid w-full gap-6 border-t border-neutral-600/70 pt-6 ${layoutClass}`}>
        <div>
          <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-400 uppercase">
            Role
          </dt>
          <dd className="mt-2 text-sm text-neutral-100 sm:text-base">
            {project.role}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-400 uppercase">
            Disciplines
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-neutral-100 sm:text-base">
            {project.disciplines.join(' · ')}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-[0.12em] text-neutral-400 uppercase">
            Duration
          </dt>
          <dd className="mt-2 text-sm text-neutral-100 sm:text-base">
            {project.duration}
          </dd>
        </div>
      </dl>

      <p className="mt-7 text-xs leading-relaxed text-neutral-400 sm:text-sm">
        {project.disclaimer}
      </p>
    </>
  );
}

function BackgroundHero({ config, media, project }) {
  const overlay = config.overlay ?? {};
  const alignmentClass =
    config.contentAlignment === 'center'
      ? 'items-center text-center'
      : config.contentAlignment === 'right'
        ? 'items-end text-right'
        : 'items-start text-left';

  return (
    <header
      id="case-study-top"
      className={`case-study-hero case-study-hero--background relative isolate overflow-hidden bg-[var(--project-surface)] text-neutral-50 ${
        config.className ?? ''
      }`}
      style={{
        '--hero-overlay-angle': overlay.direction,
        '--hero-overlay-scrim': overlay.scrim,
        '--hero-overlay-mobile': overlay.mobile,
        '--hero-overlay-mobile-angle': overlay.mobileDirection,
        '--hero-overlay-left-start': overlay.left?.start,
        '--hero-overlay-left-shoulder': overlay.left?.shoulder,
        '--hero-overlay-left-center': overlay.left?.center,
        '--hero-overlay-left-fade': overlay.left?.fade,
        '--hero-overlay-left-edge': overlay.left?.edge,
        '--hero-overlay-vignette': overlay.vignette,
        '--hero-overlay-bottom-start': overlay.bottom?.start,
        '--hero-overlay-bottom-mid': overlay.bottom?.mid,
        '--hero-overlay-bottom-soft': overlay.bottom?.soft,
        '--hero-title-size': config.titleSize,
        '--hero-title-weight': config.titleWeight,
        '--hero-reading-width': config.readingWidth,
      }}
    >
      <CaseStudyHeroMedia config={config} media={media} />
      <div
        aria-hidden="true"
        className="case-study-hero__overlay case-study-hero__overlay--scrim absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="case-study-hero__overlay case-study-hero__overlay--reading absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="case-study-hero__overlay case-study-hero__overlay--vignette absolute inset-0"
      />
      {overlay.bottom !== false ? (
        <div
          aria-hidden="true"
          className="case-study-hero__overlay case-study-hero__overlay--bottom absolute inset-0"
        />
      ) : null}

      <div
        className={`relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[90rem] flex-col px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 ${alignmentClass}`}
      >
        <HeroMetadata project={project} />

        <div className="flex flex-1 items-center py-12 sm:py-14 lg:py-10">
          <HeroTitle
            project={project}
            showStatement={config.showStatement !== false}
            titleLines={config.titleLines}
            wide
          />
        </div>

        {config.showDetails !== false ? (
          <HeroDetails project={project} protectedArea />
        ) : null}
      </div>
    </header>
  );
}

function EditorialHero({ config, project }) {
  const eyebrow = config.eyebrow;
  const focusEyebrow = config.focusEyebrow;
  const statement = config.statement ?? project.statement;
  const title = config.title ?? project.title;
  const titleLines = config.titleLines;

  return (
    <header
      id="case-study-top"
      className={`case-study-hero--editorial bg-neutral-50 text-neutral-950 ${
        config.className ?? ''
      }`}
      style={config.theme}
    >
      <div className="grid w-full gap-12 px-4 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-28 min-[1100px]:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] min-[1100px]:items-start min-[1100px]:gap-[clamp(4rem,8vw,9rem)] lg:px-8 lg:pt-20 lg:pb-40">
        <div className="pl-3 sm:pl-4 lg:pl-6">
          {eyebrow ? (
            <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-[var(--project-accent)] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-[13ch] text-[clamp(3.25rem,5.6vw,6.25rem)] leading-[0.9] font-medium">
            {titleLines?.length
              ? titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))
              : title}
          </h1>
          {config.showMetadata ? (
            <div className="mt-8 sm:mt-10">
              <HeroMetadata items={config.metadata} project={project} />
            </div>
          ) : null}
        </div>

        <div className="max-w-[34rem] min-[1100px]:pt-10">
          {focusEyebrow ? (
            <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase sm:text-sm">
              {focusEyebrow}
            </p>
          ) : null}
          <p className="text-[clamp(1.2rem,1.75vw,1.65rem)] leading-[1.62] text-neutral-700">
            {statement}
          </p>
          {config.description ? (
            <p className="mt-6 max-w-[31rem] text-base leading-[1.75] text-neutral-500 sm:text-lg">
              {config.description}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function SplitHero({ project }) {
  return (
    <header
      id="case-study-top"
      className="case-study-hero bg-[var(--project-surface)] text-neutral-50"
    >
      <div className="mx-auto grid min-h-[inherit] max-w-[90rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative z-10">
          <HeroMetadata project={project} />
          <div className="mt-8">
            <HeroTitle project={project} />
          </div>
          <div className="mt-10">
            <HeroDetails project={project} />
          </div>
        </div>

        <MediaPlaceholder
          label={project.hero?.placeholderLabel ?? 'Project hero media'}
          aspect="landscape"
          tone="dark"
          media={project.hero?.media}
          className="w-full self-center"
        />
      </div>
    </header>
  );
}

function MinimalHero({ project }) {
  return (
    <header
      id="case-study-top"
      className="case-study-hero bg-[var(--project-surface)] text-neutral-50"
    >
      <div className="mx-auto flex min-h-[inherit] max-w-[90rem] flex-col justify-between gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <HeroMetadata project={project} />
        <HeroTitle project={project} />
        <HeroDetails project={project} wide />
      </div>
    </header>
  );
}

export default function CaseStudyHero({
  project,
  variant = project.hero?.variant ?? 'split',
}) {
  if (variant === 'editorial') {
    return <EditorialHero config={project.hero} project={project} />;
  }

  if (variant === 'background') {
    return (
      <BackgroundHero
        config={project.hero}
        media={project.hero?.media}
        project={project}
      />
    );
  }

  if (variant === 'minimal') {
    return <MinimalHero project={project} />;
  }

  return <SplitHero project={project} />;
}
