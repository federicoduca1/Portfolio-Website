import RotatingIdentity from './RotatingIdentity.jsx';

export default function AboutHero({ content }) {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative left-1/2 flex min-h-[calc(100svh-9rem)] w-[100dvw] -translate-x-1/2 items-center overflow-x-clip py-8 sm:py-12 lg:py-14"
    >
      <div className="mx-auto grid w-full max-w-[104rem] gap-14 px-5 sm:gap-16 sm:px-8 lg:grid-cols-[minmax(14rem,20fr)_minmax(0,80fr)] lg:items-center lg:gap-16 lg:px-12 xl:gap-20">
        <aside className="about-hero__heading" aria-label="Quick profile">
          <p className="text-sm font-semibold uppercase text-neutral-500 sm:text-base">
            {content.eyebrow}
          </p>
          <h1
            id="about-hero-title"
            className="mt-3 max-w-[12ch] text-3xl leading-[1.1] font-medium text-neutral-900 sm:text-4xl lg:text-4xl"
          >
            {content.title}
          </h1>

          <img
            src={content.portrait.src}
            alt={content.portrait.alt}
            loading="eager"
            decoding="async"
            className="mt-6 block aspect-[4/5] w-24 rounded-md object-cover object-center sm:w-28 lg:w-32"
          />

          <dl className="mt-8 grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-x-0">
            {content.profile.map((item) => (
              <div
                key={item.label}
                className="border-b border-neutral-200 py-5 first:pt-0"
              >
                <dt className="text-sm text-neutral-500 sm:text-base">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-base font-medium text-neutral-900 sm:text-lg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="w-full lg:self-center">
          <p className="about-hero__lead text-xl leading-[1.4] font-normal text-neutral-500 sm:text-2xl lg:text-3xl">
            {content.leadIn}
          </p>

          <div className="about-hero__identity mt-7 sm:mt-9 lg:mt-10">
            <RotatingIdentity statements={content.identities} />
          </div>
        </div>
      </div>
    </section>
  );
}
