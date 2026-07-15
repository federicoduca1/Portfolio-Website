import HighlightedTitle from '../components/HighlightedTitle.jsx';

export default function About() {
  return (
    <section aria-labelledby="about-title" className="space-y-3">
      <HighlightedTitle
        as="h1"
        id="about-title"
        className="text-3xl font-semibold"
      >
        About
      </HighlightedTitle>
      <p className="max-w-2xl text-neutral-600">
        Temporary placeholder for Federico's profile and design perspective.
      </p>
    </section>
  );
}
