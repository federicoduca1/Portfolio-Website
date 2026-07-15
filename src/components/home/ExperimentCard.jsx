import { Link } from 'react-router';

export default function ExperimentCard({ experiment, isClone = false }) {
  return (
    <article
      aria-hidden={isClone || undefined}
      className="experiment-card w-56 shrink-0 sm:w-60 lg:w-64"
    >
      <Link
        aria-label={`Open ${experiment.title} in Playground`}
        className="experiment-card__link block outline-none"
        draggable={false}
        tabIndex={isClone ? -1 : undefined}
        to="/playground"
      >
        <div className="experiment-card__visual overflow-hidden">
          <div
            aria-hidden="true"
            className="experiment-card__media aspect-square bg-neutral-200"
          />
        </div>
        <div className="mt-5">
          <h3 className="experiment-card__title text-xl font-semibold leading-tight text-neutral-900">
            {experiment.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            {experiment.description}
          </p>
          <span className="experiment-card__cue mt-4 inline-block text-sm font-medium text-accent-700">
            Open experiment &nearr;
          </span>
        </div>
      </Link>
    </article>
  );
}
