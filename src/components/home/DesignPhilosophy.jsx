import { useRef } from 'react';
import DesignPrinciple from './DesignPrinciple.jsx';
import SectionHeading from './SectionHeading.jsx';
import { useDesignPhilosophyScroll } from '../../hooks/useDesignPhilosophyScroll.js';

function SectionProgress({ total }) {
  return (
    <div
      aria-hidden="true"
      className="design-philosophy-progress hidden flex-col items-end gap-4 pb-1 min-[900px]:flex"
    >
      <p className="text-sm font-medium tabular-nums text-neutral-500">
        <span
          data-design-progress-current
          className="text-accent-600"
        >
          01
        </span>{' '}
        / {String(total).padStart(2, '0')}
      </p>
      <div className="flex w-28 gap-1.5" data-design-progress-track>
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            data-design-progress-segment
            className={`h-0.5 flex-1 rounded-full ${
              index === 0 ? 'bg-accent-600' : 'bg-neutral-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function DesignPhilosophy({ content }) {
  const sectionRef = useRef(null);

  useDesignPhilosophyScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="design-philosophy"
      className="pb-20 sm:pb-24 lg:pb-32"
    >
      <div
        data-design-philosophy-story
        className="space-y-20 sm:space-y-24 lg:space-y-28"
      >
        <div
          data-design-philosophy-intro
          className="min-[900px]:grid min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,4fr)_minmax(0,1fr)] min-[900px]:items-end min-[900px]:gap-x-8 min-[900px]:gap-y-8"
        >
          <div className="min-[900px]:col-span-3">
            <SectionHeading
              id="design-philosophy"
              title={content.title}
              description={content.description}
            />
          </div>
          <div className="min-[900px]:col-start-3 min-[900px]:row-start-2 min-[900px]:justify-self-end">
            <SectionProgress total={content.principles.length} />
          </div>
        </div>

        <div
          data-design-principles-viewport
          className="min-[900px]:h-[min(58vh,34rem)]"
        >
          <div
            data-design-principles
            className="relative"
          >
            {content.principles.map((principle, index) => (
              <DesignPrinciple
                key={principle.number}
                principle={principle}
                showTopSeparator={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
