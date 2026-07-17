export default function ProjectAtAGlance({
  eyebrow = 'At a glance',
  items = [],
}) {
  return (
    <div className="mt-16 border-t border-neutral-300/60 pt-10 sm:mt-20 sm:pt-12">
      <p className="text-sm font-semibold tracking-[0.12em] text-neutral-500 uppercase sm:text-base">
        {eyebrow}
      </p>

      <dl className="mt-7 grid gap-y-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-4 xl:gap-y-0">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="py-2 xl:min-h-[13rem]"
          >
            <dt className="sm:px-6 xl:min-h-[4.75rem] xl:px-7">
              <span className="block text-sm font-semibold tracking-[0.12em] text-[var(--project-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-3 block text-lg font-semibold text-neutral-950 sm:text-xl">
                {item.label}
              </span>
            </dt>
            <dd
              className={`mt-3 max-w-[20rem] text-base leading-[1.7] text-neutral-600 sm:px-6 sm:text-lg xl:px-7 ${
                index % 2 === 1
                  ? 'sm:border-l sm:border-neutral-300/60'
                  : ''
              } ${
                index > 0
                  ? 'xl:border-l xl:border-neutral-300/60'
                  : 'xl:border-l-0'
              }`}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
