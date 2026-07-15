import AboutPreview from './AboutPreview.jsx';
import ContactPreview from './ContactPreview.jsx';

export default function ClosingSection({ content }) {
  return (
    <section
      aria-label="Home closing section"
      className="relative z-0 py-20 text-neutral-50 before:absolute before:inset-y-0 before:left-1/2 before:z-[-1] before:w-screen before:-translate-x-1/2 before:bg-neutral-950 sm:py-28 lg:py-36"
      data-home-closing
    >
      <div className="mx-auto max-w-[88rem] space-y-24 px-4 sm:space-y-28 sm:px-5 lg:space-y-32 lg:px-6">
        <ContactPreview content={content.contact} />
        <AboutPreview content={content.about} />
      </div>
    </section>
  );
}
