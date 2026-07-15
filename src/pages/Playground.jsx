import HighlightedTitle from '../components/HighlightedTitle.jsx';

export default function Playground() {
  return (
    <section aria-labelledby="playground-title" className="space-y-3">
      <HighlightedTitle
        as="h1"
        id="playground-title"
        className="text-3xl font-semibold"
      >
        Playground
      </HighlightedTitle>
      <p className="max-w-2xl text-neutral-600">
        Temporary placeholder for future experiments and prototypes.
      </p>
    </section>
  );
}
