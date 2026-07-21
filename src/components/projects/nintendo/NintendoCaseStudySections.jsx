import CaseStudyReflection from '../../case-study/CaseStudyReflection.jsx';
import CaseStudySection from '../../case-study/CaseStudySection.jsx';
import DestinationWireframeChapter from '../../case-study/DestinationWireframeChapter.jsx';
import DiagnosticInsight from '../../case-study/DiagnosticInsight.jsx';
import DesignPrinciples from '../../case-study/DesignPrinciples.jsx';
import ExplorationMarquee from '../../case-study/ExplorationMarquee.jsx';
import InteractionModule from '../../case-study/InteractionModule.jsx';
import OutcomeVisualChapter from '../../case-study/OutcomeVisualChapter.jsx';
import StickyEvidenceWalkthrough from '../../case-study/StickyEvidenceWalkthrough.jsx';
import TransparentDiagramMedia from '../../case-study/TransparentDiagramMedia.jsx';
import ValidationSplit from '../../case-study/ValidationSplit.jsx';

function ChallengeSection({ content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
    >
      <p className="max-w-[52rem] border-l-2 border-[var(--project-accent)] pl-5 text-sm leading-[1.75] text-neutral-600 sm:text-base">
        {content.methodology}
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-[clamp(2.5rem,4vw,4rem)]">
        {content.insights.map((insight, index) => (
          <DiagnosticInsight
            key={insight.number}
            insight={insight}
            className={`${
              index === 2 ? 'md:col-span-2 xl:col-span-1' : ''
            } ${
              index > 0
                ? 'diagnostic-insight--divided border-t border-neutral-300 pt-8 md:border-t-0 md:pt-0'
                : ''
            }`}
          />
        ))}
      </div>

      <div className="mt-20 sm:mt-24">
        <StickyEvidenceWalkthrough
          heading={content.evidenceGallery.title}
          introduction={content.evidenceGallery.introduction}
          steps={content.evidenceGallery.steps}
        />
      </div>

      <div className="mt-16 border-t border-neutral-300 pt-10 sm:mt-20 sm:pt-12">
        <p className="max-w-[30ch] text-[clamp(1.75rem,3vw,3rem)] leading-[1.18] font-medium text-neutral-950">
          {content.synthesis}
        </p>
      </div>
    </CaseStudySection>
  );
}

function ArchitectureSection({ content }) {
  const { comparison } = content;

  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
    >
      <DesignPrinciples
        layout="rows"
        principles={content.principles}
        tone="light"
      />

      <div className="mt-16 rounded-2xl bg-[var(--project-surface)] px-6 py-12 text-neutral-50 sm:mt-20 sm:px-10 sm:py-16 lg:mt-24 lg:px-[clamp(3rem,6vw,6rem)] lg:py-20">
        <header className="max-w-[46rem]">
          <h3 className="text-xs font-semibold tracking-[0.14em] text-[var(--project-accent)] uppercase sm:text-sm">
            {comparison.chapterLabel}
          </h3>
          <p className="mt-4 text-xl leading-[1.45] text-neutral-300 sm:text-2xl">
            {comparison.introduction}
          </p>
        </header>

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-neutral-400 uppercase sm:text-sm">
            {comparison.original.label}
          </p>
          <TransparentDiagramMedia
            alignment={comparison.original.alignment}
            aspectRatio={comparison.original.aspectRatio}
            caption={comparison.original.caption}
            compactMaxWidth={comparison.original.compactMaxWidth}
            label={comparison.original.mediaLabel}
            maxWidth={comparison.original.maxWidth}
            media={comparison.original.media}
            scale={comparison.original.scale}
            tone="dark"
          />
        </div>

        <div className="my-16 flex max-w-[52rem] items-stretch gap-5 sm:my-20 sm:gap-6 lg:my-24">
          <span
            aria-hidden="true"
            className="block w-0.5 shrink-0 self-stretch rounded-full bg-[var(--project-accent)]"
          />
          <p className="text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.2] font-medium text-neutral-50">
            {comparison.transition}
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-neutral-400 uppercase sm:text-sm">
            {comparison.redesigned.label}
          </p>
          <TransparentDiagramMedia
            alignment={comparison.redesigned.alignment}
            aspectRatio={comparison.redesigned.aspectRatio}
            caption={comparison.redesigned.caption}
            compactMaxWidth={comparison.redesigned.compactMaxWidth}
            label={comparison.redesigned.mediaLabel}
            maxWidth={comparison.redesigned.maxWidth}
            media={comparison.redesigned.media}
            scale={comparison.redesigned.scale}
            tone="dark"
          />
        </div>
      </div>
    </CaseStudySection>
  );
}

function DiscoverySection({ content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
    >
      <ExplorationMarquee {...content.explorations} />

      <div className="my-16 flex max-w-[52rem] items-stretch gap-5 sm:my-20 sm:gap-6 lg:my-24">
        <span
          aria-hidden="true"
          className="block w-0.5 shrink-0 self-stretch rounded-full bg-[var(--project-accent)]"
        />
        <p className="text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.2] font-medium text-neutral-900 uppercase">
          {content.transition.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="space-y-20 sm:space-y-24 lg:space-y-32">
        {content.destinations.map((destination) => (
          <DestinationWireframeChapter
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}

function InteractionSection({ content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
      titleClassName="!max-w-[22ch] !text-[clamp(2.5rem,4.4vw,4.25rem)]"
    >
      <div className="space-y-20 sm:space-y-24 lg:space-y-32">
        {content.modules.map((module, index) => (
          <InteractionModule key={module.id} index={index} module={module} />
        ))}
      </div>

      <div className="mt-16 border-t border-neutral-300 pt-9 sm:mt-20 sm:pt-10">
        <p className="max-w-[38rem] text-[clamp(1.5rem,2.6vw,2.35rem)] leading-[1.3] font-medium text-neutral-900">
          {content.synthesis}
        </p>
      </div>
    </CaseStudySection>
  );
}

function OutcomeSection({ content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
      titleClassName="!max-w-[20ch] !text-[clamp(2.5rem,4.5vw,4.35rem)]"
    >
      <OutcomeVisualChapter chapter={content.finalExperience} />

      <div className="mt-24 space-y-24 sm:mt-28 sm:space-y-28 lg:mt-32 lg:space-y-36">
        {content.visualChapters.map((chapter) => (
          <OutcomeVisualChapter key={chapter.id} chapter={chapter} />
        ))}
      </div>

      <div className="mt-24 border-t border-neutral-300 pt-12 sm:mt-28 sm:pt-14 lg:mt-32 lg:pt-16">
        <ValidationSplit content={content.validation} />
      </div>

      <div className="mt-16 border-t border-neutral-300 pt-10 sm:mt-20 sm:pt-12">
        <p className="max-w-[40rem] text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.28] font-medium text-neutral-900">
          {content.closing}
        </p>
      </div>
    </CaseStudySection>
  );
}

export default function NintendoCaseStudySections({ content }) {
  return (
    <>
      <ChallengeSection content={content.challenge} />
      <ArchitectureSection content={content.architecture} />
      <DiscoverySection content={content.discovery} />
      <InteractionSection content={content.interaction} />
      <OutcomeSection content={content.outcome} />
      <CaseStudyReflection content={content.reflection} />
    </>
  );
}
