export default function DesignPrinciple({ principle }) {
  return (
    <article className="border-t border-neutral-200 pt-5">
      <p className="text-sm font-medium text-neutral-500">{principle.number}</p>
      <h3 className="mt-5 text-xl font-semibold leading-snug text-neutral-950">
        {principle.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-neutral-600">
        {principle.description}
      </p>
    </article>
  );
}
