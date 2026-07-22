import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';

export default function TrustProgression({ steps = [] }) {
  return (
    <ol className="space-y-14 sm:space-y-18 lg:space-y-24">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="grid items-center gap-8 border-t border-neutral-300 pt-8 md:grid-cols-[minmax(15rem,0.75fr)_minmax(0,1.25fr)] md:gap-12 lg:gap-16"
        >
          <div className={index % 2 === 1 ? 'md:order-2' : ''}>
            <span className="text-sm font-semibold text-[var(--project-accent)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-3xl leading-tight font-medium sm:text-4xl">
              {step.title}
            </h3>
            <p className="mt-5 max-w-[34rem] text-lg leading-[1.7] text-neutral-600">
              {step.description}
            </p>
          </div>
          <CaseStudyMediaPlaceholder
            label={step.mediaLabel}
            aspectRatio="16 / 9"
            theme="soft"
            className={index % 2 === 1 ? 'md:order-1' : ''}
          />
        </li>
      ))}
    </ol>
  );
}
