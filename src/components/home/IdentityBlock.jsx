import DesignPhilosophy from './DesignPhilosophy.jsx';
import ManifestoHero from './ManifestoHero.jsx';

export default function IdentityBlock({ content }) {
  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-16">
      <ManifestoHero manifesto={content.manifesto} />
      <DesignPhilosophy content={content.designPhilosophy} />
    </div>
  );
}
