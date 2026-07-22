export default function OutcomeDeviceContinuation({
  composedMedia,
  continuationMedia,
  continuationOffset = '-2.5rem',
  continuationOffsetMobile = '-1.25rem',
  continuationWidth = '60%',
  continuationWidthMobile = '72%',
  deviceMedia,
  deviceWidth = '80%',
  deviceWidthMobile = '100%',
  renderMedia,
}) {
  if (composedMedia) {
    return (
      <div className="flex w-full items-center justify-center">
        {renderMedia(composedMedia, 'w-full')}
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[48rem] flex-col items-center pt-3 sm:pt-5">
      <div
        className="relative z-20 w-[var(--device-width-mobile)] sm:w-[var(--device-width)]"
        style={{
          '--device-width': deviceWidth,
          '--device-width-mobile': deviceWidthMobile,
        }}
      >
        {renderMedia(deviceMedia, 'w-full')}
      </div>
      <div
        className="relative z-10 mt-[var(--continuation-offset-mobile)] w-[var(--continuation-width-mobile)] sm:mt-[var(--continuation-offset)] sm:w-[var(--continuation-width)]"
        style={{
          '--continuation-offset': continuationOffset,
          '--continuation-offset-mobile': continuationOffsetMobile,
          '--continuation-width': continuationWidth,
          '--continuation-width-mobile': continuationWidthMobile,
        }}
      >
        {renderMedia(continuationMedia, 'w-full')}
      </div>
    </div>
  );
}
