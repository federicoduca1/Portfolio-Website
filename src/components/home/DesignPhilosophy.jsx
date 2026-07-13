import DesignPrinciple from './DesignPrinciple.jsx';

function SectionHeader({ title, description }) {
  return (
    <div className="max-w-3xl">
      <h2
        id="design-philosophy"
        className="text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function DesignPhilosophy({ content }) {
  return (
    <section
      aria-labelledby="design-philosophy"
      className="pb-20 sm:pb-24 lg:pb-32"
    >
      <div className="space-y-14 sm:space-y-16 lg:space-y-20">
        <SectionHeader
          title={content.title}
          description={content.description}
        />

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {content.principles.map((principle) => (
            <DesignPrinciple key={principle.number} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
}
