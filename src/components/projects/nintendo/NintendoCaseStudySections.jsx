import CaseStudyReflection from '../../case-study/CaseStudyReflection.jsx';
import CaseStudySection from '../../case-study/CaseStudySection.jsx';
import DestinationWireframeChapter from '../../case-study/DestinationWireframeChapter.jsx';
import DiagnosticInsight from '../../case-study/DiagnosticInsight.jsx';
import DesignPrinciples from '../../case-study/DesignPrinciples.jsx';
import ExplorationMarquee from '../../case-study/ExplorationMarquee.jsx';
import InteractionModule from '../../case-study/InteractionModule.jsx';
import MediaPlaceholder from '../../case-study/MediaPlaceholder.jsx';
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
      theme="dark"
      width="wide"
    >
      <div className="space-y-16 sm:space-y-20">
        {content.modules.map((module, index) => (
          <InteractionModule key={module.id} index={index} module={module} />
        ))}
      </div>
    </CaseStudySection>
  );
}

function OutcomeSection({ content }) {
  const [primaryGroup, ...detailGroups] = content.groups;

  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      theme="dark"
      width="wide"
    >
      <MediaPlaceholder
        label={primaryGroup.mediaLabel}
        caption={primaryGroup.title}
        aspect="video"
        tone="dark"
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-[1.15fr_0.85fr]">
        {detailGroups.map((group, index) => (
          <MediaPlaceholder
            key={group.title}
            label={group.mediaLabel}
            caption={group.title}
            aspect={index === 0 ? 'landscape' : 'detail'}
            tone="dark"
          />
        ))}
      </div>

      <div className="mt-16 sm:mt-20">
        <ValidationSplit content={content.validation} />
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
