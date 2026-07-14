export default function DesignPrinciple({ principle }) {
  return (
    <article
      data-design-principle
      className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[minmax(7rem,0.35fr)_minmax(0,1fr)] lg:gap-16 lg:py-16"
    >
      <p
        data-design-principle-number
        className="text-5xl font-semibold leading-none tracking-tight text-neutral-300 sm:text-6xl lg:text-7xl"
      >
        {principle.number}
      </p>

      <div className="max-w-4xl">
        <h3
          data-design-principle-title
          className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl lg:text-4xl"
        >
          {principle.title}
        </h3>
        <p
          data-design-principle-description
          className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
        >
          {principle.description}
        </p>
      </div>
    </article>
  );
}
