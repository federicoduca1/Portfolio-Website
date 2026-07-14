import DesignPhilosophy from './DesignPhilosophy.jsx';
import ManifestoHero from './ManifestoHero.jsx';

export default function IdentityBlock({ content }) {
  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      <ManifestoHero manifesto={content.manifesto} />
      <DesignPhilosophy content={content.designPhilosophy} />
    </div>
  );
}
