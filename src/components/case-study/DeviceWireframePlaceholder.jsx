export default function DeviceWireframePlaceholder({
  aspectRatio = '16 / 11',
  caption,
  className = '',
  label,
  media,
  scale = 1,
}) {
  return (
    <figure className={className}>
      <div
        className={`relative w-full text-neutral-500 ${
          media?.src
            ? 'overflow-visible bg-transparent'
            : 'overflow-hidden rounded-lg bg-neutral-100'
        }`}
        style={{ aspectRatio }}
      >
        {media?.src ? (
          <img
            src={media.src}
            alt={media.alt ?? ''}
            className="size-full object-contain"
            loading="lazy"
            decoding="async"
            style={{ transform: `scale(${scale})` }}
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-[6%]">
            <div className="absolute top-0 right-[3%] left-[3%] z-10 aspect-video rounded-xl border-2 border-neutral-400 bg-neutral-200">
              <div className="absolute inset-[8%] flex items-end rounded-md bg-neutral-50 p-4 sm:p-6">
                <p className="text-[0.65rem] font-medium tracking-[0.1em] uppercase opacity-70 sm:text-xs">
                  Device / header area
                </p>
              </div>
            </div>

            <div className="absolute top-[25%] right-[12%] bottom-0 left-[12%] border-x border-b border-neutral-300 bg-neutral-50/80 px-[7%] pt-[14%]">
              <div className="space-y-[6%]">
                <span className="block h-[12%] min-h-6 w-2/3 bg-neutral-200" />
                <span className="block h-[18%] min-h-9 w-full bg-neutral-200" />
                <span className="block h-[18%] min-h-9 w-[82%] bg-neutral-200" />
                <span className="block h-[14%] min-h-7 w-full bg-neutral-200" />
              </div>
              <p className="absolute right-4 bottom-4 left-4 text-center text-[0.6rem] font-medium tracking-[0.08em] uppercase opacity-65 sm:text-xs">
                {label}
              </p>
            </div>
          </div>
        )}
      </div>

      {caption ? (
        <figcaption className="mt-4 max-w-[44rem] text-sm leading-[1.65] text-neutral-600 sm:text-base">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
