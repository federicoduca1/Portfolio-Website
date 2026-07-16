import DesignPrincipleGraphic from './DesignPrincipleGraphic.jsx';

export default function DesignPrinciple({ principle, showTopSeparator }) {
  return (
    <article
      data-design-principle
      className="relative grid gap-8 py-10 sm:py-12 lg:grid-cols-[7rem_minmax(0,1fr)_8rem] lg:gap-8 lg:py-16 xl:grid-cols-[8.5rem_minmax(0,1fr)_9.5rem] xl:gap-10"
    >
      {showTopSeparator ? (
        <span
          aria-hidden="true"
          data-design-principles-top-separator
          className="absolute inset-x-0 top-0 h-px bg-neutral-200"
        />
      ) : null}

      <div className="relative min-h-16 sm:min-h-20 lg:min-h-24">
        <p
          data-design-principle-number
          className="absolute top-0 left-0 text-5xl font-semibold leading-none tracking-tight text-neutral-300 sm:text-6xl lg:text-7xl"
        >
          {principle.number}
        </p>
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <p
          data-design-principle-eyebrow
          className="mb-3 text-xs font-semibold text-neutral-500 uppercase sm:text-sm"
        >
          {principle.number} — {principle.eyebrow}
        </p>
        <h3
          data-design-principle-title
          className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl lg:text-4xl"
        >
          {principle.title}
        </h3>
        <div
          data-design-principle-description
          className="mt-7 max-w-3xl"
        >
          <p className="max-w-2xl text-xl font-medium leading-snug text-neutral-900 sm:text-2xl">
            {principle.statement}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            {principle.supporting}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        data-design-principle-graphic={principle.graphic}
        className="relative hidden self-stretch text-neutral-900 opacity-0 lg:block"
      >
        <DesignPrincipleGraphic
          type={principle.graphic}
          className="pointer-events-none absolute top-1/2 left-1/2 w-[clamp(10rem,18vw,19rem)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.11]"
        />
      </div>

      <span
        aria-hidden="true"
        data-design-principle-separator
        className="absolute inset-x-0 bottom-0 h-px bg-neutral-200"
      />

      <span
        aria-hidden="true"
        data-design-principle-line
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-accent-600"
      />
    </article>
  );
}
