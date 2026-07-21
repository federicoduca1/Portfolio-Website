import InteractionAnimationChapter from './InteractionAnimationChapter.jsx';

function ChapterHeading({ index, module }) {
  return (
    <header className="max-w-[46rem]">
      <h3 className="text-xs font-semibold tracking-[0.13em] uppercase sm:text-sm">
        <span className="text-[var(--project-accent)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-neutral-500"> — {module.title}</span>
      </h3>
      <p className="mt-4 text-lg leading-[1.65] text-neutral-700 sm:text-xl">
        {module.description}
      </p>
    </header>
  );
}

function FocusSequence({ media }) {
  return (
    <div className="mt-9 rounded-2xl bg-[var(--project-surface)] px-5 py-8 sm:mt-10 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-9">
        {media.states.map((state) => (
          <figure key={state.label}>
            <div className="flex aspect-square items-center justify-center">
              <img
                src={state.src}
                alt={state.alt}
                className="size-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 text-[0.65rem] font-semibold tracking-[0.12em] text-neutral-300 uppercase sm:text-xs">
              {state.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function InteractionModule({ module, index }) {
  if (module.variant === 'animation') {
    return (
      <InteractionAnimationChapter
        chapterNumber={String(index + 1).padStart(2, '0')}
        description={module.description}
        layout={module.layout}
        media={module.media}
        steps={module.steps}
        title={module.title}
      />
    );
  }

  return (
    <article className="border-t border-neutral-300 pt-10 sm:pt-12">
      <ChapterHeading index={index} module={module} />

      {module.variant === 'focus-sequence' ? (
        <FocusSequence media={module.media} />
      ) : null}
    </article>
  );
}
