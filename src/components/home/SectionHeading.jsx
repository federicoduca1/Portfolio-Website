export default function SectionHeading({ description, id, title }) {
  return (
    <header className="mx-auto w-full max-w-7xl text-center">
      <h2
        id={id}
        className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] text-neutral-950"
      >
        {title}
      </h2>
      <p className="mx-auto mt-7 max-w-5xl text-lg leading-8 text-neutral-600 min-[900px]:whitespace-nowrap sm:text-xl">
        {description}
      </p>
    </header>
  );
}
