const svgProps = {
  'aria-hidden': true,
  fill: 'none',
  preserveAspectRatio: 'xMidYMid meet',
  viewBox: '0 0 320 320',
};

function MeaningGraphic({ className }) {
  return (
    <svg {...svgProps} className={className}>
      <g fill="currentColor">
        <circle
          data-graphic-align
          data-graphic-motion
          cx="50"
          cy="72"
          r="25"
        />
        <rect
          data-graphic-align
          data-graphic-motion
          x="24"
          y="135"
          width="52"
          height="52"
          rx="14"
        />
        <rect
          data-graphic-align
          data-graphic-motion
          x="30"
          y="225"
          width="46"
          height="46"
          rx="12"
          transform="rotate(45 53 248)"
        />
      </g>

      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="13"
        opacity="0.38"
      >
        <path d="M79 78 181 145" />
        <path d="M81 161h100" />
        <path d="m81 240 100-65" />
      </g>

      <path
        data-graphic-motion
        data-graphic-selected-path
        d="M181 160h80"
        pathLength="1"
        stroke="var(--color-accent-600)"
        strokeLinecap="round"
        strokeWidth="15"
      />
      <circle
        data-graphic-endpoint
        data-graphic-motion
        cx="275"
        cy="160"
        r="24"
        fill="var(--color-accent-600)"
      />
    </svg>
  );
}

function BeyondInterfacesGraphic({ className }) {
  return (
    <svg {...svgProps} className={className}>
      <g fill="currentColor" opacity="0.72">
        <rect x="34" y="48" width="190" height="24" rx="12" />
        <rect x="34" y="248" width="190" height="24" rx="12" />
        <rect x="34" y="48" width="24" height="224" rx="12" />
        <rect x="200" y="48" width="24" height="224" rx="12" />
      </g>

      <circle cx="94" cy="160" r="24" fill="currentColor" />
      <path
        d="M118 160h94"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="14"
        opacity="0.48"
      />
      <path
        data-graphic-motion
        data-graphic-selected-path
        d="M212 160h68"
        pathLength="1"
        stroke="var(--color-accent-600)"
        strokeLinecap="round"
        strokeWidth="14"
      />
      <rect
        data-graphic-motion
        data-graphic-traveler
        x="264"
        y="144"
        width="32"
        height="32"
        rx="9"
        fill="var(--color-accent-600)"
      />
    </svg>
  );
}

function CuriosityGraphic({ className }) {
  return (
    <svg {...svgProps} className={className}>
      <circle cx="67" cy="160" r="30" fill="currentColor" />
      <circle cx="67" cy="160" r="11" fill="currentColor" opacity="0.42" />

      <g
        fill="none"
        strokeLinecap="round"
        strokeWidth="14"
      >
        <path
          data-graphic-branch
          data-graphic-motion
          d="M92 146 205 79"
          pathLength="1"
          stroke="currentColor"
          opacity="0.52"
        />
        <path
          data-graphic-branch
          data-graphic-motion
          d="M98 160h130"
          pathLength="1"
          stroke="var(--color-accent-600)"
        />
        <path
          data-graphic-branch
          data-graphic-motion
          d="m92 176 112 69"
          pathLength="1"
          stroke="currentColor"
          opacity="0.52"
        />
        <path
          data-graphic-branch
          data-graphic-motion
          d="m91 169 244 64"
          pathLength="1"
          stroke="var(--color-accent-600)"
          opacity="0.82"
        />
      </g>

      <circle
        data-graphic-motion
        data-graphic-outcome
        cx="221"
        cy="70"
        r="25"
        fill="currentColor"
      />
      <rect
        data-graphic-motion
        data-graphic-outcome
        x="226"
        y="137"
        width="48"
        height="48"
        rx="13"
        fill="var(--color-accent-600)"
      />
      <rect
        data-graphic-motion
        data-graphic-outcome
        x="200"
        y="223"
        width="44"
        height="44"
        rx="11"
        fill="currentColor"
        transform="rotate(45 222 245)"
      />
    </svg>
  );
}

const graphicByType = {
  'beyond-interfaces': BeyondInterfacesGraphic,
  curiosity: CuriosityGraphic,
  meaning: MeaningGraphic,
};

export default function DesignPrincipleGraphic({ className, type }) {
  const Graphic = graphicByType[type];

  return Graphic ? <Graphic className={className} /> : null;
}
