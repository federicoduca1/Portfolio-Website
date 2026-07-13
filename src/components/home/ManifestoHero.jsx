function ManifestoSegment({ segment }) {
  if (!segment.keyword) {
    return segment.text;
  }

  return (
    <span
      data-manifesto-keyword={segment.keyword}
      className="font-semibold text-neutral-950 underline decoration-neutral-300 decoration-2 underline-offset-[0.14em]"
    >
      {segment.text}
    </span>
  );
}

export default function ManifestoHero({ manifesto }) {
  return (
    <section
      aria-labelledby="home-manifesto"
      className="flex min-h-[62vh] items-center py-16 sm:min-h-[68vh] sm:py-20 lg:min-h-[72vh] lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl text-left sm:text-center">
        <h1
          id="home-manifesto"
          className="text-4xl font-semibold leading-[1.08] text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          {manifesto.map((segment) => (
            <ManifestoSegment
              key={`${segment.text}-${segment.keyword ?? ''}`}
              segment={segment}
            />
          ))}
        </h1>

        {/* Reserved for future contextual copy triggered by manifesto keywords. */}
        <div aria-hidden="true" className="mt-8 min-h-6" />
      </div>
    </section>
  );
}
