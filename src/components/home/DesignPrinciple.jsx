export default function DesignPrinciple({ principle }) {
  return (
    <article className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[minmax(7rem,0.35fr)_minmax(0,1fr)] lg:gap-16 lg:py-16">
      <p className="text-5xl font-semibold leading-none tracking-tight text-neutral-300 sm:text-6xl lg:text-7xl">
        {principle.number}
      </p>

      <div className="max-w-4xl">
        <h3 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl lg:text-4xl">
          {principle.title}
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
          {principle.description}
        </p>
      </div>
    </article>
  );
}
