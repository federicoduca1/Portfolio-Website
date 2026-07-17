import ProjectAtAGlance from './ProjectAtAGlance.jsx';

export default function ProjectOverview({
  description,
  disclaimer,
  id = 'overview',
  metadata = [],
  sectionIndex = '01',
  sectionLabel = 'Overview',
  summaryItems = [],
  statement,
  title = 'Project overview',
}) {
  const titleId = `${id}-title`;
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-[calc(var(--site-header-height)+4rem)] bg-neutral-50"
      data-case-study-section
    >
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
          <span className="text-[var(--project-accent)]">{sectionIndex}</span>
          <span className="text-neutral-500">— {sectionLabel}</span>
        </p>
        <h2
          id={titleId}
          tabIndex="-1"
          data-case-study-heading
          className="mt-5 text-[clamp(2.75rem,4.2vw,4.25rem)] leading-[1.04] font-medium focus:outline-none"
        >
          {title}
        </h2>

        <div className="mt-10 grid gap-14 sm:mt-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.85fr)] lg:items-start lg:gap-20 xl:gap-28">
          <div>
            {statement ? (
              <p className="max-w-[18ch] text-[clamp(2rem,3.5vw,3.75rem)] leading-[1.08] font-medium text-neutral-950">
                {statement}
              </p>
            ) : null}

            <div className="mt-7 max-w-[44rem] space-y-5 text-lg leading-[1.75] text-neutral-600 sm:mt-8 sm:text-xl">
              {paragraphs.filter(Boolean).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <dl className="border-t border-neutral-300">
              {metadata.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 border-b border-neutral-300 py-5 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-6 sm:py-6 lg:grid-cols-1 xl:grid-cols-[6.5rem_minmax(0,1fr)]"
                >
                  <dt className="text-xs font-semibold tracking-[0.1em] text-neutral-500 uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-base leading-relaxed font-medium text-neutral-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {disclaimer ? (
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
                {disclaimer}
              </p>
            ) : null}
          </div>
        </div>

        {summaryItems.length > 0 ? (
          <ProjectAtAGlance items={summaryItems} />
        ) : null}
      </div>
    </section>
  );
}
