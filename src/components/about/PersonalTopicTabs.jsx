import { useRef } from 'react';
import TopicIcon from './TopicIcon.jsx';

export default function PersonalTopicTabs({
  activeTopicId,
  onSelect,
  topics,
}) {
  const tabRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    let nextIndex = null;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % topics.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + topics.length) % topics.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = topics.length - 1;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    onSelect(topics[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Personal influences"
      className="flex flex-wrap gap-4 md:grid md:max-w-[22rem] md:grid-cols-3 md:gap-x-6 md:gap-y-7"
    >
      {topics.map((topic, index) => {
        const isActive = topic.id === activeTopicId;

        return (
          <button
            key={topic.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`personal-topic-tab-${topic.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="personal-topic-panel"
            aria-label={`Show ${topic.label}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(topic.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`group relative size-20 shrink-0 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus-ring sm:size-24 ${
              isActive
                ? 'text-accent-600'
                : 'text-neutral-400 hover:text-accent-600 focus-visible:text-accent-600'
            }`}
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <TopicIcon
                type={topic.id}
                className={`size-10 transition-transform duration-200 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:size-11 ${
                  isActive
                    ? 'rotate-6 scale-[1.03]'
                    : 'group-hover:rotate-3 group-hover:scale-[1.08] group-focus-visible:rotate-3 group-focus-visible:scale-[1.08]'
                }`}
              />
            </span>
            <span
              aria-hidden="true"
              className={`absolute right-2 bottom-2 h-0.5 w-6 rounded-full bg-accent-600 transition-opacity duration-200 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap text-sm font-medium text-neutral-700 opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              {topic.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
