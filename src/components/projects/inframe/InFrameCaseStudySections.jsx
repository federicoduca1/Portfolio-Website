import CaseStudyMediaPlaceholder from '../../case-study/CaseStudyMediaPlaceholder.jsx';
import CaseStudySection from '../../case-study/CaseStudySection.jsx';
import GuidedStickySequence from '../../case-study/GuidedStickySequence.jsx';
import OutcomeNarrativeRow from '../../case-study/OutcomeNarrativeRow.jsx';

const sectionClassName = '!py-14 sm:!py-16 lg:!py-20';

function ChallengeSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <section
        aria-labelledby="inframe-origin-insight"
        className="mb-14 sm:mb-16 lg:mb-20"
      >
        <p
          id="inframe-origin-insight"
          className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm"
        >
          {content.originInsight.label}
        </p>
        <blockquote className="mt-5 max-w-[28ch] border-l-2 border-[var(--project-accent)] pl-5 text-3xl leading-[1.2] font-normal text-neutral-950 italic sm:pl-6 sm:text-4xl lg:text-5xl">
          {content.originInsight.quote}
        </blockquote>
        <div className="mt-7 max-w-[48rem] space-y-4 text-base leading-[1.7] text-neutral-600 sm:text-lg">
          {content.originInsight.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <div>
        {content.tensions.map((item, index) => (
          <OutcomeNarrativeRow
            key={item.number}
            {...item}
            compact
            headingLevel={3}
            layout="spread"
            separator={index > 0}
          />
        ))}
      </div>

      <div className="mt-14 sm:mt-16 lg:mt-20">
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {content.decisionLabel}
        </p>
        <div className="mt-6 grid md:grid-cols-2">
          {content.decisionModes.map((mode, index) => (
            <article
              key={mode.title}
              className={`grid grid-cols-[2rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-5 sm:py-8 ${
                index > 0
                  ? 'border-t border-neutral-300 md:border-t-0 md:border-l md:pl-8 lg:pl-10'
                  : 'md:pr-8 lg:pr-10'
              }`}
            >
              <p className="text-sm font-semibold text-[var(--project-accent)]">
                {mode.number}
              </p>
              <div>
                <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">
                  {mode.title}
                </h3>
                <p className="mt-4 text-xl leading-[1.35] font-medium text-neutral-800 sm:text-2xl">
                  {mode.quote}
                </p>
                <p className="mt-3 max-w-[32rem] text-base leading-[1.65] text-neutral-600">
                  {mode.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </CaseStudySection>
  );
}

function DiscoveryPath({ path }) {
  if (path.guidedSteps) {
    const isDark = path.tone === 'dark';

    return (
      <article>
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {path.label}
        </p>
        <h3
          className={`mt-3 max-w-[18ch] text-2xl leading-tight font-medium sm:text-3xl ${
            isDark ? 'text-neutral-50' : 'text-neutral-950'
          }`}
        >
          {path.title}
        </h3>
        <p
          className={`mt-4 max-w-[34rem] text-base leading-[1.7] sm:text-lg ${
            isDark ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          {path.description}
        </p>
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <GuidedStickySequence
            steps={path.guidedSteps}
            tone={path.tone}
            variant={path.guidedVariant}
          />
        </div>
      </article>
    );
  }

  const mediaFirst = path.layout === 'media-left';

  return (
    <article className="grid items-center gap-8 md:grid-cols-[minmax(15rem,0.38fr)_minmax(0,0.62fr)] md:gap-10 lg:gap-14">
      <div className={mediaFirst ? 'md:order-2' : ''}>
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {path.label}
        </p>
        <h3 className="mt-3 max-w-[18ch] text-2xl leading-tight font-medium text-neutral-950 sm:text-3xl">
          {path.title}
        </h3>
        <p className="mt-4 max-w-[34rem] text-base leading-[1.7] text-neutral-600 sm:text-lg">
          {path.description}
        </p>
      </div>

      <CaseStudyMediaPlaceholder
        {...path.media}
        className={mediaFirst ? 'md:order-1' : ''}
      />
    </article>
  );
}

function DiscoverySection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <div>
        {content.paths.map((path, index) => (
          <div
            key={path.id}
            className={
              path.tone === 'dark'
                ? 'mt-16 rounded-2xl bg-neutral-950 px-6 py-10 text-neutral-50 sm:mt-20 sm:px-8 sm:py-12 lg:px-10 lg:py-14'
                : index > 0
                  ? 'mt-16 sm:mt-20 lg:mt-24'
                : ''
            }
          >
            <DiscoveryPath path={path} />
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}

function BookingSection({ content }) {
  const {
    flowMedia,
    introduction,
    stages,
    takeaway,
    ...sectionContent
  } = content;

  return (
    <CaseStudySection
      {...sectionContent}
      width="wide"
      className={sectionClassName}
    >
      <div className="grid items-center gap-10 md:grid-cols-[minmax(16rem,0.4fr)_minmax(0,0.6fr)] md:gap-12 lg:gap-16">
        <div>
          <p className="max-w-[45rem] text-lg leading-[1.7] text-neutral-600 sm:text-xl">
            {introduction}
          </p>
          <p className="mt-8 max-w-[28rem] text-lg leading-[1.5] font-medium text-neutral-900 sm:text-xl">
            {takeaway}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[24rem] md:mx-0 md:max-w-[28rem] md:justify-self-center lg:max-w-[31rem]">
          <CaseStudyMediaPlaceholder {...flowMedia} />
        </div>
      </div>

      <div className="mt-16 grid gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-10">
        {stages.map((stage) => (
          <article key={stage.number} className="flex h-full flex-col">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.13em] uppercase sm:text-sm">
                <span className="tabular-nums text-[var(--project-accent)]">
                  {stage.number}
                </span>
                <span className="text-neutral-500">{stage.label}</span>
              </div>
              <h3 className="mt-3 text-xl leading-tight font-medium text-neutral-950 sm:text-2xl">
                {stage.title}
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-neutral-600">
                {stage.description}
              </p>
            </div>
            <div className="mx-auto mt-auto w-full max-w-[15rem] pt-8 sm:max-w-[16rem]">
              <CaseStudyMediaPlaceholder {...stage.media} />
            </div>
          </article>
        ))}
      </div>
    </CaseStudySection>
  );
}

function FinalExperienceSection({ content }) {
  const [wide, medium, small1, small2] = content.gallery;

  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <div>
        <CaseStudyMediaPlaceholder {...wide.media} />
        <div className="mt-5 grid items-start gap-5 sm:mt-6 sm:gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(14rem,0.9fr)] lg:gap-8">
          <CaseStudyMediaPlaceholder {...medium.media} />
          <div className="grid gap-5 sm:gap-6">
            <CaseStudyMediaPlaceholder {...small1.media} />
            <CaseStudyMediaPlaceholder {...small2.media} />
          </div>
        </div>
      </div>

      <article className="mt-20 grid items-start gap-10 rounded-2xl bg-neutral-950 px-6 py-10 text-neutral-50 sm:mt-24 sm:px-8 sm:py-12 md:grid-cols-[minmax(16rem,0.4fr)_minmax(0,0.6fr)] md:gap-12 lg:gap-16 lg:px-10 lg:py-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {content.secondary.label}
          </p>
          <h3 className="mt-3 text-2xl leading-tight font-medium text-neutral-50 sm:text-3xl">
            {content.secondary.title}
          </h3>
          <p className="mt-4 max-w-[34rem] text-base leading-[1.7] text-neutral-300 sm:text-lg">
            {content.secondary.description}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[24rem] sm:max-w-[27rem]">
          <CaseStudyMediaPlaceholder {...content.secondary.media} />
        </div>
      </article>
    </CaseStudySection>
  );
}

function ReflectionSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className="!pt-14 !pb-24 sm:!pt-16 sm:!pb-28 lg:!pt-20 lg:!pb-32"
    >
      <div>
        {content.points.map((point, index) => (
          <OutcomeNarrativeRow
            key={point.number}
            {...point}
            compact
            headingLevel={3}
            layout="spread"
            separator={index > 0}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}

export default function InFrameCaseStudySections({ content }) {
  return (
    <>
      <ChallengeSection content={content.challenge} />
      <DiscoverySection content={content.discovery} />
      <BookingSection content={content.booking} />
      <FinalExperienceSection content={content.finalExperience} />
      <ReflectionSection content={content.reflection} />
    </>
  );
}
