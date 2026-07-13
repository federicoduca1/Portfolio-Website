function ManifestoSegment({ segment }) {
  if (!segment.keyword) {
    return segment.text;
  }

  return (
    <span
      data-manifesto-keyword={segment.keyword}
      className="whitespace-nowrap italic"
    >
      {segment.text}
    </span>
  );
}

export default function ManifestoHero({ manifesto }) {
  const [firstContextFragment, secondContextFragment] = manifesto[4].text.split(',');
  const manifestoLines = [
    manifesto.slice(0, 2),
    [...manifesto.slice(2, 4), { text: `${firstContextFragment},` }],
    [{ text: secondContextFragment }],
  ];

  return (
    <section
      aria-labelledby="home-manifesto"
      className="flex min-h-[62vh] items-start pt-10 pb-22 sm:min-h-[68vh] sm:pt-14 sm:pb-28 lg:min-h-[72vh] lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl text-left sm:text-center">
        <h1
          id="home-manifesto"
          className="text-[clamp(1.55rem,7vw,1.875rem)] font-semibold leading-[1.12] tracking-[0.005em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {manifestoLines.map((line, lineIndex) => (
            <span
              key={line.map((segment) => segment.text).join('')}
              className="block whitespace-nowrap"
            >
              {line.map((segment) => (
                <ManifestoSegment
                  key={`${segment.text}-${segment.keyword ?? ''}`}
                  segment={segment}
                />
              ))}
              {lineIndex < manifestoLines.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        {/* Reserved for future contextual copy triggered by manifesto keywords. */}
        <div aria-hidden="true" className="mt-8 min-h-6" />
      </div>
    </section>
  );
}
