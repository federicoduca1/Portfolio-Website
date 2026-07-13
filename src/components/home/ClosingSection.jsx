import AboutPreview from './AboutPreview.jsx';
import ContactPreview from './ContactPreview.jsx';

export default function ClosingSection({ content }) {
  return (
    <section
      aria-label="Home closing section"
      className="relative left-1/2 w-dvw -translate-x-1/2 bg-neutral-950 py-20 text-neutral-50 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[88rem] space-y-28 px-4 sm:space-y-32 sm:px-5 lg:space-y-40 lg:px-6">
        <ContactPreview content={content.contact} />
        <AboutPreview content={content.about} />
      </div>
    </section>
  );
}
