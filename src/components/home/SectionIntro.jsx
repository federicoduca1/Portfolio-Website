export default function SectionIntro({ id, title, description, size = 'default' }) {
  const titleSize =
    size === 'large'
      ? 'text-4xl sm:text-5xl lg:text-6xl'
      : 'text-3xl sm:text-4xl lg:text-5xl';

  return (
    <div className="max-w-3xl">
      <h2
        id={id}
        className={`${titleSize} font-semibold leading-tight text-neutral-950`}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
