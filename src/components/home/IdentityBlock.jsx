import DesignPhilosophy from './DesignPhilosophy.jsx';
import ManifestoHero from './ManifestoHero.jsx';

export default function IdentityBlock({ content }) {
  return (
    <div className="space-y-24 sm:space-y-28 lg:space-y-32">
      <ManifestoHero manifesto={content.manifesto} />
      <DesignPhilosophy content={content.designPhilosophy} />
    </div>
  );
}
