import FeaturedProjectsSection from './FeaturedProjectsSection.jsx';
import PlaygroundSection from './PlaygroundSection.jsx';

export default function DemonstrationBlock({ content }) {
  return (
    <div className="space-y-24 sm:space-y-28 lg:space-y-36">
      <FeaturedProjectsSection content={content.featuredProjects} />
      <PlaygroundSection content={content.playgroundPreview} />
    </div>
  );
}
