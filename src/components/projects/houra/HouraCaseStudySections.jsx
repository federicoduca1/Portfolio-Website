import CaseStudyMediaPlaceholder from '../../case-study/CaseStudyMediaPlaceholder.jsx';
import CaseStudySection from '../../case-study/CaseStudySection.jsx';
import EditorialStatement from '../../case-study/EditorialStatement.jsx';
import JourneyPhase from '../../case-study/JourneyPhase.jsx';
import ParticipationComparison from '../../case-study/ParticipationComparison.jsx';
import ServiceEditorialList from '../../case-study/ServiceEditorialList.jsx';
import ServiceQuestionBlock from '../../case-study/ServiceQuestionBlock.jsx';
import SystemEquation from '../../case-study/SystemEquation.jsx';
import TrustProgression from '../../case-study/TrustProgression.jsx';

const sectionClassName = '!py-16 sm:!py-20 lg:!py-24';

function SubsectionHeader({ eyebrow, title, description }) {
  return (
    <header className="max-w-[48rem]">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-4 text-[clamp(2rem,3.2vw,3.25rem)] leading-[1.08] font-medium">
        {title}
      </h3>
      {description ? (
        <p className="mt-5 text-lg leading-[1.7] text-neutral-600 sm:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}

function ChallengeSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <EditorialStatement as="blockquote" accent="primary">
        {content.howMightWe}
      </EditorialStatement>

      <div className="mt-16 sm:mt-20">
        <header className="max-w-[42rem]">
          <h3 className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {content.tensionsEyebrow}
          </h3>
          <p className="mt-4 text-base leading-[1.7] text-neutral-600 sm:text-lg">
            {content.tensionsIntroduction}
          </p>
        </header>

        <ServiceEditorialList items={content.tensions} layout="rows" />
      </div>
    </CaseStudySection>
  );
}

function ParticipationSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:gap-14">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.13em] text-neutral-500 uppercase">
            One community, two behaviours
          </p>
          <ParticipationComparison items={content.behaviours} />
        </div>
        <CaseStudyMediaPlaceholder {...content.statesMedia} theme="light" />
      </div>

      <div className="mt-20 grid items-center gap-10 border-t border-neutral-300 pt-14 sm:mt-24 sm:pt-16 lg:grid-cols-[minmax(20rem,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <SubsectionHeader
          title={content.requests.title}
          description={content.requests.description}
        />
        <CaseStudyMediaPlaceholder {...content.requests.media} theme="light" />
      </div>

      <div className="mt-20 border-t border-neutral-300 pt-14 sm:mt-24 sm:pt-16">
        <SubsectionHeader
          title={content.discovery.title}
          description={content.discovery.description}
        />
        <CaseStudyMediaPlaceholder
          {...content.discovery.media}
          theme="light"
          className="mt-10 sm:mt-12"
        />
      </div>
    </CaseStudySection>
  );
}

function TimeEconomySection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <SystemEquation terms={content.equation} />

      <CaseStudyMediaPlaceholder
        {...content.media}
        theme="soft"
        className="mt-14 sm:mt-18 lg:mt-20"
      />

      <div className="mt-16 sm:mt-20">
        <ServiceEditorialList items={content.principles} layout="columns" />
      </div>

      <div className="mt-16 sm:mt-20">
        <ServiceQuestionBlock
          label="Open service questions"
          questions={content.questions}
        />
      </div>
    </CaseStudySection>
  );
}

function TrustSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      theme="neutral"
      className={sectionClassName}
    >
      <TrustProgression steps={content.steps} />
    </CaseStudySection>
  );
}

function ExchangeJourneySection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <div className="space-y-20 sm:space-y-24 lg:space-y-28">
        {content.phases.map((phase, index) => (
          <JourneyPhase key={phase.title} phase={phase} index={index} />
        ))}
      </div>
    </CaseStudySection>
  );
}

function SystemSynthesisSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      theme="neutral"
      className={sectionClassName}
    >
      <CaseStudyMediaPlaceholder {...content.media} theme="light" />
      <div className="mt-14 sm:mt-16">
        <ServiceEditorialList
          items={content.outcomes}
          layout="columns"
          numbered={false}
        />
      </div>
    </CaseStudySection>
  );
}

function ValidationQuestions({ questions }) {
  return (
    <ol className="mt-7 border-t border-neutral-300">
      {questions.map((question, index) => (
        <li
          key={question}
          className="grid gap-4 border-b border-neutral-300 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7 sm:py-8"
        >
          <span className="text-sm font-semibold text-[var(--project-accent-secondary)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h4 className="max-w-[52rem] text-xl leading-[1.45] font-medium sm:text-2xl">
            {question}
          </h4>
        </li>
      ))}
    </ol>
  );
}

function ValidationSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <ServiceEditorialList
        heading="What the concept demonstrates"
        items={content.demonstrates}
        layout="rows"
      />

      <div className="mt-20 sm:mt-24">
        <h3 className="text-sm font-semibold tracking-[0.13em] text-neutral-500 uppercase">
          What needs validation next
        </h3>
        <ValidationQuestions questions={content.questions} />
      </div>

      <p className="mt-14 border-t border-neutral-300 pt-7 text-base leading-[1.7] text-neutral-600 sm:text-lg">
        {content.methods}
      </p>
    </CaseStudySection>
  );
}

function ReflectionSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      theme="neutral"
      className={sectionClassName}
    >
      <ServiceEditorialList
        items={content.blocks}
        layout="columns"
        numbered={false}
      />

      <EditorialStatement accent="primary" className="mt-16 sm:mt-20">
        {content.closing}
      </EditorialStatement>
    </CaseStudySection>
  );
}

export default function HouraCaseStudySections({ content }) {
  return (
    <>
      <ChallengeSection content={content.challenge} />
      <ParticipationSection content={content.participation} />
      <TimeEconomySection content={content.timeEconomy} />
      <TrustSection content={content.trust} />
      <ExchangeJourneySection content={content.exchangeJourney} />
      <SystemSynthesisSection content={content.systemSynthesis} />
      <ValidationSection content={content.validation} />
      <ReflectionSection content={content.reflection} />
    </>
  );
}
