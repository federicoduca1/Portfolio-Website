export default function ParticipationComparison({ items = [] }) {
  return (
    <dl className="grid border-y border-neutral-300 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`py-8 md:px-9 md:py-10 ${
            index > 0 ? 'border-t border-neutral-300 md:border-t-0 md:border-l' : ''
          }`}
        >
          <dt className="text-sm font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase">
            {item.label}
          </dt>
          <dd className="mt-4 max-w-[28rem] text-xl leading-[1.5] text-neutral-700 sm:text-2xl">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
