import DeviceWireframePlaceholder from './DeviceWireframePlaceholder.jsx';

function DestinationCopy({ destination }) {
  return (
    <div className="max-w-[34rem]">
      <p className="text-sm font-semibold tracking-[0.1em] text-[var(--project-accent)] uppercase">
        {destination.label} — {destination.intention}
      </p>
      <h3 className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.08] font-medium text-neutral-950">
        {destination.label}
      </h3>
      <p className="mt-5 text-lg leading-[1.6] font-medium text-neutral-800 sm:text-xl">
        {destination.audience}
      </p>
      <div className="mt-7 border-l-2 border-[var(--project-accent)] pl-5">
        <p className="text-xs font-semibold tracking-[0.11em] text-neutral-500 uppercase">
          Key design decision
        </p>
        <p className="mt-3 text-base leading-[1.7] text-neutral-700 sm:text-lg">
          {destination.decision}
        </p>
      </div>
    </div>
  );
}

export default function DestinationWireframeChapter({ destination }) {
  const isSideLayout =
    destination.layout === 'visual-right' ||
    destination.layout === 'visual-left';
  const visualFirst = destination.layout === 'visual-left';

  if (isSideLayout) {
    return (
      <article
        className="grid gap-10 border-t border-neutral-300 pt-10 sm:pt-12 xl:grid-cols-2 xl:items-start xl:gap-12"
      >
        <div className={visualFirst ? 'xl:order-2' : ''}>
          <DestinationCopy destination={destination} />
        </div>
        <DeviceWireframePlaceholder
          aspectRatio={destination.aspectRatio}
          caption={destination.caption}
          className={visualFirst ? 'xl:order-1' : ''}
          label={destination.mediaLabel}
          media={destination.media}
          scale={destination.scale}
        />
      </article>
    );
  }

  return (
    <article className="border-t border-neutral-300 pt-10 sm:pt-12">
      <DestinationCopy destination={destination} />

      <DeviceWireframePlaceholder
        aspectRatio={destination.aspectRatio}
        caption={destination.caption}
        className="mt-10 sm:mt-12"
        label={destination.mediaLabel}
        media={destination.media}
        scale={destination.scale}
      />
    </article>
  );
}
