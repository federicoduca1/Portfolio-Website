import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';

function ProfileTrustChapter({ chapter }) {
  return (
    <section>
      <header className="max-w-[48rem]">
        <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
          {chapter.label}
        </p>
        <h3 className="mt-4 max-w-[20ch] text-[clamp(2.25rem,4vw,4rem)] leading-[1.06] font-medium">
          {chapter.title}
        </h3>
        <p className="mt-6 max-w-[44rem] text-lg leading-[1.7] text-neutral-600 sm:text-xl">
          {chapter.description}
        </p>
      </header>

      <div className="mt-10 max-w-[62rem] sm:mt-12">
        <CaseStudyMediaPlaceholder
          {...chapter.media}
          theme="soft"
          width="full"
        />
        <p className="mt-4 max-w-[44rem] text-sm leading-[1.65] text-neutral-500 sm:text-base">
          {chapter.caption}
        </p>
      </div>
    </section>
  );
}

function CoordinationTrustChapter({ chapter }) {
  return (
    <section className="mt-20 border-t border-neutral-300 pt-14 sm:mt-24 sm:pt-16 lg:mt-28 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-16 xl:gap-20">
        <header className="lg:order-2">
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {chapter.label}
          </p>
          <h3 className="mt-4 text-[clamp(2.25rem,4vw,4rem)] leading-[1.06] font-medium">
            {chapter.title}
          </h3>
          <p className="mt-6 text-lg leading-[1.7] text-neutral-600 sm:text-xl">
            {chapter.description}
          </p>

          <ul className="mt-8 border-t border-neutral-300">
            {chapter.notes.map((note) => (
              <li
                key={note}
                className="border-b border-neutral-300 py-4 text-base leading-[1.5] text-neutral-700 sm:text-lg"
              >
                {note}
              </li>
            ))}
          </ul>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 sm:items-start lg:order-1">
          <CaseStudyMediaPlaceholder
            {...chapter.media[0]}
            theme="soft"
          />
          <CaseStudyMediaPlaceholder
            {...chapter.media[1]}
            className="sm:mt-16"
            theme="light"
          />
        </div>
      </div>
    </section>
  );
}

export default function TrustProgression({ steps = [] }) {
  const [profileChapter, coordinationChapter] = steps;

  return (
    <div>
      {profileChapter ? (
        <ProfileTrustChapter chapter={profileChapter} />
      ) : null}
      {coordinationChapter ? (
        <CoordinationTrustChapter chapter={coordinationChapter} />
      ) : null}
    </div>
  );
}
