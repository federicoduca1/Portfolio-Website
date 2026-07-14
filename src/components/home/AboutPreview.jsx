import { Link } from 'react-router';
import EditorialTextLink from './EditorialTextLink.jsx';

export default function AboutPreview({ content }) {
  return (
    <section aria-labelledby="home-about-preview" className="space-y-10">
      <p className="text-base text-neutral-300 sm:text-lg">{content.intro}</p>

      <div className="relative">
        {/* Future custom cursor hook: connect ABOUT circular cursor interaction here. */}
        <div aria-hidden="true" data-about-cursor-placeholder />

        <h2 id="home-about-preview" className="text-center">
          <Link
            to="/about"
            aria-label="Go to About page"
            className="home-about-name mx-auto block max-w-7xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-focus-ring"
          >
            <span className="home-about-name__base">{content.name}</span>
            <span className="home-about-name__band" aria-hidden="true" />
            <span className="home-about-name__fill" aria-hidden="true">
              {content.name}
            </span>
          </Link>
        </h2>
      </div>

      <p className="text-base font-medium">
        <EditorialTextLink to="/about">{content.cta}</EditorialTextLink>
      </p>
    </section>
  );
}
