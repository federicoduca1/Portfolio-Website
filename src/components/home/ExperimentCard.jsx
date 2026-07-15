import { Link } from 'react-router';

export default function ExperimentCard({ experiment, state }) {
  const isActive = state === 'active';
  const isHidden = state === 'far-previous' || state === 'far-next';

  return (
    <article
      aria-hidden={isHidden || undefined}
      className="experiment-card border border-neutral-200 bg-neutral-50"
      data-state={state}
    >
      <Link
        aria-label={`Open ${experiment.title} in Playground`}
        className="experiment-card__link block outline-none"
        draggable={false}
        tabIndex={isActive ? undefined : -1}
        to="/playground"
      >
        <div className="experiment-card__visual overflow-hidden">
          <div
            aria-hidden="true"
            className="experiment-card__media aspect-[4/3] bg-neutral-200"
            data-preview-playing={isActive ? 'true' : 'false'}
          />
        </div>
        <div className="mt-4 px-5 pb-8 sm:px-6">
          <h3 className="experiment-card__title text-2xl font-semibold leading-tight text-neutral-900">
            {experiment.title}
          </h3>
          <p className="experiment-card__description text-base leading-7 text-neutral-600">
            {experiment.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
