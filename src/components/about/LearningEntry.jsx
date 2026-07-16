export default function LearningEntry({ entry, type }) {
  return (
    <li
      data-learning-reveal
      className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-3 border-b border-neutral-300 py-7 sm:py-8 lg:grid-cols-[8rem_minmax(0,1.4fr)_minmax(9rem,0.8fr)_8rem] lg:items-baseline lg:gap-x-8 lg:py-9"
    >
      <time className="col-start-1 row-start-1 text-sm text-neutral-500 sm:text-base lg:col-start-1 lg:row-start-1">
        {entry.year}
      </time>
      <h3 className="col-span-2 row-start-2 max-w-[34ch] text-xl leading-[1.3] font-normal text-neutral-950 sm:text-2xl lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:text-[1.35rem]">
        {entry.qualification}
      </h3>
      {entry.institution ? (
        <p className="col-span-2 row-start-3 text-base font-semibold text-neutral-800 sm:text-lg lg:col-span-1 lg:col-start-3 lg:row-start-1">
          {entry.institution}
        </p>
      ) : null}
      <p className="col-start-2 row-start-1 text-right text-sm text-neutral-500 sm:text-base lg:col-start-4 lg:row-start-1">
        ({type})
      </p>
    </li>
  );
}
