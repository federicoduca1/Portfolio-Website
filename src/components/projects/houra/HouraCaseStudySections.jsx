import CaseStudyMediaPlaceholder from '../../case-study/CaseStudyMediaPlaceholder.jsx';
import CaseStudySection from '../../case-study/CaseStudySection.jsx';
import EditorialStatement from '../../case-study/EditorialStatement.jsx';
import GuidedStickySequence from '../../case-study/GuidedStickySequence.jsx';
import JourneyRoleSection from '../../case-study/JourneyRoleSection.jsx';
import ServiceEditorialList from '../../case-study/ServiceEditorialList.jsx';
import ServiceQuestionBlock from '../../case-study/ServiceQuestionBlock.jsx';
import SystemEquation from '../../case-study/SystemEquation.jsx';
import TrustProgression from '../../case-study/TrustProgression.jsx';

const sectionClassName = '!py-16 sm:!py-20 lg:!py-24';

function ChallengeSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      className={sectionClassName}
    >
      <div>
        <header className="max-w-[42rem]">
          <h3 className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {content.participationContextsEyebrow}
          </h3>
          <p className="mt-4 text-base leading-[1.7] text-neutral-600 sm:text-lg">
            {content.participationContextsIntroduction}
          </p>
        </header>

        <ServiceEditorialList
          items={content.participationContexts}
          layout="columns"
        />
      </div>

      <EditorialStatement
        as="blockquote"
        accent="primary"
        className="mt-16 sm:mt-20"
      >
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
      <div>
        <header className="max-w-[44rem]">
          <h3 className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {content.modesEyebrow}
          </h3>
          <p className="mt-4 text-base leading-[1.7] text-neutral-600 sm:text-lg">
            {content.modesIntroduction}
          </p>
        </header>

        <div className="mt-10 sm:mt-12">
          <GuidedStickySequence steps={content.modes} />
        </div>
      </div>

      <EditorialStatement accent="primary" className="mt-16 sm:mt-20">
        {content.closing}
      </EditorialStatement>
    </CaseStudySection>
  );
}

function TimeEconomySection({ content }) {
  const { introduction, ...sectionContent } = content;

  return (
    <CaseStudySection
      {...sectionContent}
      width="wide"
      className={sectionClassName}
      contentClassName="!mt-9 sm:!mt-11"
    >
      <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-10 lg:gap-14 xl:gap-16">
        <div>
          <p className="max-w-[38rem] text-lg leading-[1.7] text-neutral-600 sm:text-xl">
            {introduction}
          </p>
          <div className="mt-9 sm:mt-10">
            <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
              The core rule
            </p>
            <div className="mt-4">
              <SystemEquation terms={content.equation} variant="editorial" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[84%] md:justify-self-start">
          <CaseStudyMediaPlaceholder
            {...content.media}
            theme={content.media.theme ?? 'soft'}
            width="full"
          />
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-neutral-950 px-6 py-12 text-neutral-50 sm:mt-20 sm:px-10 sm:py-14 lg:px-[clamp(3rem,6vw,6rem)] lg:py-16">
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {content.productEyebrow}
        </p>
        <div className="mt-7 grid items-start gap-10 sm:gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(14rem,0.9fr)] md:gap-12 lg:gap-16">
          <ServiceEditorialList
            items={content.principles}
            layout="compact"
            showOuterBorders={false}
            tone="dark"
          />
          <div className="flex justify-center md:justify-end">
            <CaseStudyMediaPlaceholder
              {...content.productMedia}
              className="w-full max-w-[16rem] lg:max-w-[18rem]"
              theme={content.productMedia.theme ?? 'soft'}
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <ServiceQuestionBlock
            accent="primary"
            label="Open service questions"
            questions={content.questions}
            showBottomBorder={false}
            tone="dark"
          />
        </div>
      </div>
    </CaseStudySection>
  );
}

function TrustSection({ content }) {
  return (
    <CaseStudySection
      {...content}
      width="wide"
      theme="light"
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
      <div>
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {content.overviewEyebrow}
        </p>
        <CaseStudyMediaPlaceholder
          {...content.overviewMedia}
          className="mt-7 sm:mt-9"
          theme={content.overviewMedia.theme ?? 'soft'}
        />
      </div>

      <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-28 lg:mt-28 lg:space-y-32">
        <JourneyRoleSection {...content.receiver} />
        <JourneyRoleSection {...content.helper} compact tone="dark" />
      </div>
    </CaseStudySection>
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
        items={content.areas}
        layout="rows"
      />

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
      <TimeEconomySection content={content.timeEconomy} />
      <ParticipationSection content={content.participation} />
      <ExchangeJourneySection content={content.exchangeJourney} />
      <TrustSection content={content.trust} />
      <ValidationSection content={content.validation} />
      <ReflectionSection content={content.reflection} />
    </>
  );
}
