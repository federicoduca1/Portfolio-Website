export default function ProjectPreviewMedia({ project }) {
  const { media } = project;
  const isHouraPhones = media?.presentation === 'houra-phones';
  const isNintendoPan = media?.presentation === 'nintendo-pan';
  const mediaStyle = media
    ? {
        objectFit: media.objectFit ?? 'cover',
        objectPosition: media.objectPosition ?? 'center',
      }
    : undefined;

  let content = (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-neutral-200 px-5 text-center text-xs font-medium tracking-[0.12em] text-neutral-500 uppercase sm:text-sm"
    >
      {project.placeholderLabel ?? project.mediaLabel ?? project.title}
    </div>
  );

  if (
    isHouraPhones &&
    media?.type === 'image' &&
    media.src &&
    media.secondarySrc
  ) {
    content = (
      <div
        role="img"
        aria-label={media.alt ?? `${project.title} mobile interfaces`}
        className="relative size-full"
      >
        <img
          src={media.src}
          alt=""
          aria-hidden="true"
          width={media.width}
          height={media.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute top-[-38%] left-[9%] z-20 w-[54%] max-w-none object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-linear motion-safe:group-hover:translate-y-[3%] motion-safe:group-focus-visible:translate-y-[3%]"
        />
        <img
          src={media.secondarySrc}
          alt=""
          aria-hidden="true"
          width={media.secondaryWidth}
          height={media.secondaryHeight}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute top-[31%] left-[48%] z-10 w-[54%] max-w-none object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-linear motion-safe:group-hover:-translate-x-[0.75%] motion-safe:group-hover:-translate-y-[1.5%] motion-safe:group-focus-visible:-translate-x-[0.75%] motion-safe:group-focus-visible:-translate-y-[1.5%]"
        />
      </div>
    );
  } else if (media?.type === 'image' && media.src) {
    content = (
      <img
        src={media.src}
        alt={media.decorative ? '' : (media.alt ?? project.title)}
        loading={isNintendoPan ? 'eager' : 'lazy'}
        fetchPriority={isNintendoPan ? 'high' : 'auto'}
        decoding="async"
        className={
          isNintendoPan
            ? 'absolute top-1/2 left-0 h-[78%] w-auto max-w-none -translate-x-[28%] -translate-y-1/2 object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-linear motion-safe:group-hover:-translate-x-[25.5%] motion-safe:group-focus-visible:-translate-x-[25.5%]'
            : 'h-full w-full'
        }
        style={isNintendoPan ? undefined : mediaStyle}
      />
    );
  } else if (
    media?.type === 'video' &&
    (media.webm || media.mp4)
  ) {
    content = (
      <video
        aria-hidden={media.decorative ? 'true' : undefined}
        aria-label={
          media.decorative
            ? undefined
            : (media.ariaLabel ?? media.alt ?? `${project.title} preview`)
        }
        autoPlay={media.autoplay}
        loop={media.loop}
        muted={media.muted ?? true}
        playsInline={media.playsInline ?? true}
        poster={media.poster}
        preload={media.preload ?? 'metadata'}
        className="h-full w-full"
        style={mediaStyle}
      >
        {media.webm ? <source src={media.webm} type="video/webm" /> : null}
        {media.mp4 ? <source src={media.mp4} type="video/mp4" /> : null}
      </video>
    );
  }

  return (
    <div
      className={`aspect-[8/5] overflow-hidden rounded-md border ${
        isNintendoPan
          ? 'border-[#E84A3C] bg-[#E84A3C]'
          : isHouraPhones
            ? 'border-[#205B69] bg-[#205B69]'
            : 'border-neutral-200 bg-neutral-200'
      }`}
    >
      <div
        className={`relative h-full w-full ${
          isNintendoPan || isHouraPhones
            ? ''
            : 'motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.015] motion-safe:group-focus-visible:scale-[1.015]'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
