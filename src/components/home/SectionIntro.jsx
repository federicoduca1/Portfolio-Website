import HighlightedTitle from '../HighlightedTitle.jsx';

export default function SectionIntro({
  id,
  title,
  description,
  descriptionClassName = 'max-w-2xl text-base leading-7 sm:text-lg',
  revealSequence = false,
  size = 'default',
  titleClassName,
}) {
  const titleSize = titleClassName ?? (
    size === 'large'
      ? 'text-4xl sm:text-5xl lg:text-6xl'
      : 'text-3xl sm:text-4xl lg:text-5xl'
  );

  return (
    <div className="max-w-3xl">
      <HighlightedTitle
        id={id}
        className={`${titleSize} font-semibold leading-tight text-neutral-950`}
        data-playground-reveal={revealSequence ? 'title' : undefined}
      >
        {title}
      </HighlightedTitle>
      <p
        className={`mt-5 text-neutral-600 ${descriptionClassName}`}
        data-playground-reveal={revealSequence ? 'copy' : undefined}
      >
        {description}
      </p>
    </div>
  );
}
