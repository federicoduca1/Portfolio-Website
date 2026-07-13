import ClosingSection from './ClosingSection.jsx';
import DemonstrationBlock from './DemonstrationBlock.jsx';
import IdentityBlock from './IdentityBlock.jsx';

export default function HomePage({ content }) {
  return (
    <div className="space-y-24 sm:space-y-28 lg:space-y-36">
      <IdentityBlock content={content} />
      <DemonstrationBlock content={content} />
      <ClosingSection content={content.closing} />
    </div>
  );
}
