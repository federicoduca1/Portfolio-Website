export default function JourneyMilestone({ milestone }) {
  return (
    <li
      data-journey-milestone
      className="relative pb-20 pl-8 last:pb-0 sm:pb-24 sm:pl-12 lg:pb-28"
    >
      <span
        aria-hidden="true"
        className="design-journey__marker absolute top-2 left-[-0.22rem] size-2.5 rounded-full border border-neutral-400 bg-neutral-50"
      />
      <p className="text-sm font-semibold uppercase text-neutral-500 sm:text-base">
        {milestone.year}
      </p>
      <h3 className="mt-4 max-w-[20ch] text-3xl leading-[1.1] font-medium text-neutral-950 sm:text-4xl lg:text-[3.4rem]">
        {milestone.title}
      </h3>
      <p className="design-journey__description mt-6 max-w-[46rem] text-lg leading-[1.65] text-neutral-600 sm:text-xl">
        {milestone.description}
      </p>
    </li>
  );
}
