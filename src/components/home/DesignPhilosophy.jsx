import DesignPrinciple from './DesignPrinciple.jsx';

export default function DesignPhilosophy({ content }) {
  return (
    <section
      aria-labelledby="design-philosophy"
      className="pb-20 sm:pb-24 lg:pb-32"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-16">
        <div className="max-w-xl">
          <h2
            id="design-philosophy"
            className="text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.principles.map((principle) => (
            <DesignPrinciple key={principle.number} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
}
