import { useRef } from 'react';
import DesignPrinciple from './DesignPrinciple.jsx';
import SectionHeading from './SectionHeading.jsx';
import { useDesignPhilosophyScroll } from '../../hooks/useDesignPhilosophyScroll.js';

function SectionProgress({ total }) {
  return (
    <div
      aria-hidden="true"
      className="design-philosophy-progress hidden flex-col items-start gap-4 pb-1 lg:flex"
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
      className="design-philosophy-section pb-20 sm:pb-24 lg:pb-32"
    >
      <div
        data-design-philosophy-story
        className="space-y-20 sm:space-y-24 lg:grid lg:min-h-[88svh] lg:grid-cols-[minmax(17rem,0.34fr)_minmax(0,0.66fr)] lg:items-center lg:gap-[clamp(3rem,6vw,6rem)] lg:space-y-0"
      >
        <div
          data-design-philosophy-intro
          className="lg:self-center"
        >
          <SectionHeading
            id="design-philosophy"
            title={content.title}
            description={content.description}
            variant="narrative"
          />
          <div className="mt-10 lg:mt-12">
            <SectionProgress total={content.principles.length} />
          </div>
        </div>

        <div
          data-design-principles-viewport
          className="lg:h-[min(66vh,40rem)]"
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
