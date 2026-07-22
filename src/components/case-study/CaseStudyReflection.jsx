import CaseStudySection from './CaseStudySection.jsx';
import ReflectionStickySequence from './ReflectionStickySequence.jsx';

export default function CaseStudyReflection({ className = '', content }) {
  return (
    <CaseStudySection
      id={content.id}
      eyebrow={content.eyebrow}
      title={content.title}
      introduction={content.introduction}
      theme="light"
      width="wide"
      className={className}
    >
      <div className="mt-6 max-w-[68rem] sm:mt-10">
        <ReflectionStickySequence
          steps={content.steps}
          stopMarkerId={content.navigationStopId}
        />
      </div>

      {content.closing ? (
        <div className="mt-24 max-w-[55rem] sm:mt-32 lg:mt-40">
          <p className="text-[clamp(1.85rem,3.5vw,3.6rem)] leading-[1.2] font-medium text-neutral-950">
            {content.closing}
          </p>
        </div>
      ) : null}
    </CaseStudySection>
  );
}
