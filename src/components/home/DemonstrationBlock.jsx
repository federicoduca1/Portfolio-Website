import FeaturedProjectsSection from './FeaturedProjectsSection.jsx';
import PlaygroundSection from './PlaygroundSection.jsx';

export default function DemonstrationBlock({ content }) {
  return (
    <div className="relative left-1/2 w-[calc(100dvw-3rem)] -translate-x-1/2 space-y-24 sm:w-[calc(100dvw-5rem)] sm:space-y-28 lg:w-[calc(100dvw-8rem)] lg:space-y-36">
      <FeaturedProjectsSection content={content.featuredProjects} />
      <PlaygroundSection content={content.playgroundPreview} />
    </div>
  );
}
