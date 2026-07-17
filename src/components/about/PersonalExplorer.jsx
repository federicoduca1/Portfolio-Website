import { useState } from 'react';
import PersonalTopicTabs from './PersonalTopicTabs.jsx';

function TopicGroup({ group, topicId }) {
  const headingId = `${topicId}-${group.id}-title`;

  return (
    <section aria-labelledby={headingId}>
      <h4
        id={headingId}
        className="text-[0.9375rem] leading-snug font-medium text-neutral-500"
      >
        {group.title}
      </h4>
      <ul className="mt-4 space-y-1.5 text-[1.0625rem] leading-[1.55] font-medium text-neutral-800 sm:text-lg">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function TopicPanelContent({ topic, idPrefix = topic.id }) {
  const hasGroups = Boolean(topic.groups?.length);

  return (
    <div className={`py-3 sm:py-5 ${hasGroups ? 'max-w-[64rem]' : 'max-w-[44rem]'}`}>
      <h3 className="text-[2.5rem] leading-none font-medium text-neutral-950 sm:text-[3.25rem]">
        {topic.label}
      </h3>
      <div className="mt-5">
        <p className="max-w-[58rem] text-lg leading-[1.6] text-neutral-600 sm:text-xl">
          {topic.description}
        </p>

        {hasGroups ? (
          <div className="mt-7 grid max-w-[48rem] gap-7 border-t border-neutral-300 pt-6 sm:grid-cols-2 sm:gap-8">
            {topic.groups.map((group) => (
              <TopicGroup key={group.id} group={group} topicId={idPrefix} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function PersonalExplorer({ content }) {
  const [activeTopicId, setActiveTopicId] = useState(content.topics[0].id);
  const activeTopic =
    content.topics.find((topic) => topic.id === activeTopicId) ??
    content.topics[0];

  return (
    <section
      aria-labelledby="personal-explorer-title"
      className="relative left-1/2 w-[100dvw] -translate-x-1/2 bg-neutral-100 py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        <header>
          <h2
            id="personal-explorer-title"
            className="max-w-[24ch] text-4xl leading-[1.06] font-medium text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 max-w-[44rem] text-base leading-[1.6] text-neutral-600 sm:text-lg">
            {content.introduction}
          </p>
        </header>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(20rem,30fr)_minmax(0,70fr)] md:items-center md:gap-10 lg:mt-12 lg:gap-14">
          <div className="md:flex md:justify-center md:pr-4 lg:pr-8">
            <PersonalTopicTabs
              activeTopicId={activeTopic.id}
              onSelect={setActiveTopicId}
              topics={content.topics}
            />
          </div>

          <div
            id="personal-topic-panel"
            role="tabpanel"
            aria-labelledby={`personal-topic-tab-${activeTopic.id}`}
            tabIndex={0}
            className="border-t border-neutral-300 pt-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring md:border-t-0 md:pt-0"
          >
            <div className="grid w-full">
              {content.topics.map((topic) => (
                <div
                  key={`personal-topic-sizer-${topic.id}`}
                  aria-hidden="true"
                  className="invisible pointer-events-none col-start-1 row-start-1 select-none"
                >
                  <TopicPanelContent
                    topic={topic}
                    idPrefix={`personal-topic-sizer-${topic.id}`}
                  />
                </div>
              ))}

              <div
                key={activeTopic.id}
                className="personal-topic-panel__content col-start-1 row-start-1 w-full"
              >
                <TopicPanelContent
                  topic={activeTopic}
                  idPrefix={`personal-topic-active-${activeTopic.id}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
