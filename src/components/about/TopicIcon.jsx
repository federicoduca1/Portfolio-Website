const iconViewBox = '0 0 64 64';

function CinemaIcon() {
  return (
    <>
      <path d="M10 25h44v25a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6V25Z" />
      <path
        fillRule="evenodd"
        d="m9.5 12.5 43.8-6.2a4 4 0 0 1 4.5 3.4l1.2 8.5a4 4 0 0 1-3.4 4.5L11.8 29a4 4 0 0 1-4.5-3.4L6.1 17a4 4 0 0 1 3.4-4.5Zm9.1 1.7-5.8.8 5.8 9 5.8-.8-5.8-9Zm15.3-2.1-6 .8 5.8 9 6-.8-5.8-9Zm15.4-2.2-6 .9 5.8 9 6-.9-5.8-9Z"
        clipRule="evenodd"
      />
    </>
  );
}

function TravelIcon() {
  return (
    <path
      fillRule="evenodd"
      d="M24 8a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v5h5a8 8 0 0 1 8 8v29a8 8 0 0 1-8 8H19a8 8 0 0 1-8-8V21a8 8 0 0 1 8-8h5V8Zm6 0v5h4V8h-4Zm-4 13h-5a3 3 0 0 0-3 3v23a3 3 0 0 0 3 3h5V21Zm7 0v29h4V21h-4Zm11 0v29a3 3 0 0 0 2-3V24a3 3 0 0 0-2-3ZM20 58h8v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3Zm16 0h8v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3Z"
      clipRule="evenodd"
    />
  );
}

function GamesIcon() {
  return (
    <>
      <path
        fillRule="evenodd"
        d="M19 16h26c7.1 0 12.8 5.1 14 12l3.2 16.1c1.8 9-9.6 14.6-15.6 7.7L41 45H23l-5.6 6.8c-6 7-17.4 1.3-15.6-7.7L5 28c1.3-6.9 7-12 14-12Zm2 8a8 8 0 0 0-8 8v5a8 8 0 0 0 8 8h22a8 8 0 0 0 8-8v-5a8 8 0 0 0-8-8H21Z"
        clipRule="evenodd"
      />
      <path d="M19 27h5v5h5v5h-5v5h-5v-5h-5v-5h5v-5Zm24 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-7 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </>
  );
}

function TechnologyIcon() {
  return (
    <path
      fillRule="evenodd"
      d="M24 3h5v9h6V3h5v9h3a9 9 0 0 1 9 9v3h9v5h-9v6h9v5h-9v3a9 9 0 0 1-9 9h-3v9h-5v-9h-6v9h-5v-9h-3a9 9 0 0 1-9-9v-3H3v-5h9v-6H3v-5h9v-3a9 9 0 0 1 9-9h3V3Zm-3 17a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V23a3 3 0 0 0-3-3H21Zm7 7h8v8h-8v-8Z"
      clipRule="evenodd"
    />
  );
}

function DrawingIcon() {
  return (
    <g transform="rotate(-38 32 32)">
      <path d="M12 24h36a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H12V24Z" />
      <path d="m12 24-10 8.2a2.4 2.4 0 0 0 0 3.6L12 44V24Zm41 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-6V24Z" />
      <path d="M16 24h4v20h-4z" opacity="0.35" />
    </g>
  );
}

function CookingIcon() {
  return (
    <>
      <path
        fillRule="evenodd"
        d="M5 19a5 5 0 0 1 5-5h36a5 5 0 0 1 5 5v8.5a23 23 0 0 1-46 0V19Zm8 4v4.5a15 15 0 0 0 30 0V23H13Z"
        clipRule="evenodd"
      />
      <path d="M45 20h14a5 5 0 0 1 0 10H47l-2-10Z" />
      <path d="M22 24c3-4 8-5 12-2 3 2 4 6 2 9-3 4-8 5-12 2-3-2-4-6-2-9Z" />
    </>
  );
}

const topicIcons = {
  cinema: CinemaIcon,
  travel: TravelIcon,
  games: GamesIcon,
  technology: TechnologyIcon,
  drawing: DrawingIcon,
  cooking: CookingIcon,
};

export default function TopicIcon({ type, className = '' }) {
  const IconGraphic = topicIcons[type];

  if (!IconGraphic) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={iconViewBox}
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      className={className}
    >
      <IconGraphic />
    </svg>
  );
}
