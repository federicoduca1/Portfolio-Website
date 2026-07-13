import EditorialTextLink from './EditorialTextLink.jsx';

export default function ContactPreview({ content }) {
  return (
    <section aria-labelledby="home-contact-preview" className="max-w-5xl">
      <h2
        id="home-contact-preview"
        className="max-w-3xl text-3xl font-semibold leading-tight text-neutral-50 sm:text-4xl lg:text-5xl"
      >
        {content.title}
      </h2>

      <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
        {content.description}
      </p>

      <div className="mt-14 grid gap-8 border-y border-neutral-800 py-8 sm:grid-cols-[1.1fr_0.8fr_0.8fr] sm:gap-10">
        {content.methods.map((method) => (
          <div key={method.label}>
            <p
              className={
                method.primary
                  ? 'text-2xl font-semibold text-neutral-50 sm:text-3xl'
                  : 'text-lg font-medium text-neutral-200'
              }
            >
              {method.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              {method.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-base font-medium">
        <EditorialTextLink to="/contact">{content.cta}</EditorialTextLink>
      </p>
    </section>
  );
}
