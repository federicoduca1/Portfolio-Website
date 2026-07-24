import CaseStudyMediaPlaceholder from './CaseStudyMediaPlaceholder.jsx';

function ProfileTrustChapter({ chapter }) {
  return (
    <section>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <header>
          <p className="text-xs font-semibold tracking-[0.13em] text-[var(--project-accent)] uppercase sm:text-sm">
            {chapter.label}
          </p>
          <h3 className="mt-4 max-w-[20ch] text-[clamp(2.25rem,4vw,4rem)] leading-[1.06] font-medium">
            {chapter.title}
          </h3>
          <p className="mt-6 text-lg leading-[1.7] text-neutral-600 sm:text-xl">
            {chapter.description}
          </p>
        </header>

        <div className="w-full max-w-[22rem] justify-self-center sm:max-w-[24rem] lg:mt-11 lg:w-[58%] lg:max-w-none">
          <CaseStudyMediaPlaceholder
            {...chapter.media}
            theme={chapter.media.theme ?? 'soft'}
            width="full"
          />
        </div>
      </div>
    </section>
  );
}

function CoordinationTrustChapter({ chapter }) {
  return (
    <section className="mt-20 border-t border-neutral-300 pt-14 sm:mt-24 sm:pt-16 lg:mt-28 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
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

        <div className="lg:order-1">
          <CaseStudyMediaPlaceholder
            {...chapter.media}
            theme={chapter.media.theme ?? 'soft'}
            width="full"
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
