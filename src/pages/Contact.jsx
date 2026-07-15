import HighlightedTitle from '../components/HighlightedTitle.jsx';

export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className="space-y-3">
      <HighlightedTitle
        as="h1"
        id="contact-title"
        className="text-3xl font-semibold"
      >
        Contact
      </HighlightedTitle>
      <p className="max-w-2xl text-neutral-600">
        Temporary placeholder for future contact information.
      </p>
    </section>
  );
}
