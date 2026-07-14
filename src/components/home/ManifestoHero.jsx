import { useState } from 'react';

function InteractiveKeyword({ activeKeywordId, keyword, onActivate }) {
  const isActive = activeKeywordId === keyword.id;

  function toggleKeyword() {
    onActivate(isActive ? null : keyword.id);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleKeyword();
    }
  }

  return (
    <button
      type="button"
      aria-expanded={isActive}
      aria-controls="manifesto-context"
      className="manifesto-keyword whitespace-nowrap italic"
      data-active={isActive}
      onClick={toggleKeyword}
      onFocus={() => onActivate(keyword.id)}
      onMouseEnter={() => onActivate(keyword.id)}
      onMouseLeave={() => onActivate(null)}
      onKeyDown={handleKeyDown}
    >
      {keyword.label}
    </button>
  );
}

function ManifestoSegment({ activeKeywordId, keyword, onActivate, segment }) {
  if (!segment.keywordId) {
    return segment.text;
  }

  return (
    <InteractiveKeyword
      activeKeywordId={activeKeywordId}
      keyword={keyword}
      onActivate={onActivate}
    />
  );
}

function ManifestoContext({ activeKeyword }) {
  return (
    <div
      id="manifesto-context"
      className="manifesto-context mx-auto mt-8 min-h-28 max-w-2xl text-left sm:text-center"
      aria-live="polite"
    >
      {activeKeyword ? (
        <div key={activeKeyword.id} className="manifesto-context__content">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            {activeKeyword.title}
          </p>
          <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
            {activeKeyword.description}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function ManifestoHero({ manifesto }) {
  const [activeKeywordId, setActiveKeywordId] = useState(null);
  const { keywords, segments } = manifesto;
  const keywordById = Object.fromEntries(
    keywords.map((keyword) => [keyword.id, keyword]),
  );
  const activeKeyword = activeKeywordId ? keywordById[activeKeywordId] : null;
  const [firstContextFragment, secondContextFragment] = segments[4].text.split(',');
  const manifestoLines = [
    segments.slice(0, 2),
    [...segments.slice(2, 4), { text: `${firstContextFragment},` }],
    [{ text: secondContextFragment }],
  ];

  return (
    <section
      aria-labelledby="home-manifesto"
      className="flex min-h-[62vh] items-start pt-10 pb-6 sm:min-h-[68vh] sm:pt-14 sm:pb-8 lg:min-h-[72vh] lg:pt-16 lg:pb-10"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveKeywordId(null);
        }
      }}
    >
      <div className="mx-auto w-full max-w-7xl text-left sm:text-center">
        <h1
          id="home-manifesto"
          className="manifesto-statement text-[clamp(1rem,5.35vw,1.875rem)] font-semibold leading-[1.12] tracking-[0.005em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          data-has-active-keyword={Boolean(activeKeywordId)}
        >
          {manifestoLines.map((line, lineIndex) => (
            <span
              key={line.map((segment) => segment.text).join('')}
              className="block sm:whitespace-nowrap"
            >
              {line.map((segment) => (
                <ManifestoSegment
                  key={`${segment.text}-${segment.keywordId ?? ''}`}
                  activeKeywordId={activeKeywordId}
                  keyword={keywordById[segment.keywordId]}
                  onActivate={setActiveKeywordId}
                  segment={segment}
                />
              ))}
              {lineIndex < manifestoLines.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <ManifestoContext activeKeyword={activeKeyword} />
      </div>
    </section>
  );
}
