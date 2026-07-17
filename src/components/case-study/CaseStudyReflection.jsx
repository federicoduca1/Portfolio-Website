import CaseStudySection from './CaseStudySection.jsx';

export default function CaseStudyReflection({ content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="content"
    >
      <div className="border-t border-neutral-300">
        {content.groups.map((group, index) => (
          <article
            key={group.title}
            className="grid gap-4 border-b border-neutral-300 py-8 md:grid-cols-[3rem_minmax(11rem,0.55fr)_minmax(0,1fr)] md:items-start md:gap-7 md:py-9"
          >
            <p className="text-sm font-semibold text-[var(--project-accent)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-xl font-medium text-neutral-950 sm:text-2xl">
              {group.title}
            </h3>
            <p className="max-w-[32rem] text-base leading-[1.7] text-neutral-600 sm:text-lg">
              {group.description}
            </p>
          </article>
        ))}
      </div>
    </CaseStudySection>
  );
}
