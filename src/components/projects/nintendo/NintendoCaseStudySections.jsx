import CaseStudyReflection from '../../case-study/CaseStudyReflection.jsx';
import CaseStudySection from '../../case-study/CaseStudySection.jsx';
import DesignPrinciples from '../../case-study/DesignPrinciples.jsx';
import FeatureChapter from '../../case-study/FeatureChapter.jsx';
import InsightChapter from '../../case-study/InsightChapter.jsx';
import InteractionModule from '../../case-study/InteractionModule.jsx';
import MediaPlaceholder from '../../case-study/MediaPlaceholder.jsx';
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
      <div className="space-y-20 sm:space-y-24">
        {content.insights.map((insight, index) => (
          <InsightChapter
            key={insight.number}
            index={index}
            insight={insight}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}

function ArchitectureSection({ content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="dark"
      width="wide"
    >
      <DesignPrinciples principles={content.principles} />

      <div className="mt-16 sm:mt-20">
        <div className="grid gap-5 sm:grid-cols-2">
          <MediaPlaceholder
            label={content.comparison.original}
            aspect="detail"
            tone="dark"
          />
          <MediaPlaceholder
            label={content.comparison.redesigned}
            aspect="detail"
            tone="dark"
          />
        </div>
        <p className="mt-5 max-w-[48rem] text-sm leading-relaxed text-neutral-400 sm:text-base">
          {content.comparison.caption}
        </p>
      </div>
    </CaseStudySection>
  );
}

function DiscoverySection({ content }) {
  const [discover, browse, deals, allGames] = content.features;

  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
    >
      <div className="space-y-16 sm:space-y-20">
        <FeatureChapter feature={discover} />
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          <FeatureChapter feature={browse} />
          <FeatureChapter feature={deals} />
        </div>
        <FeatureChapter feature={allGames} />
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
