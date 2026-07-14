const iconProps = {
  'aria-hidden': true,
  fill: 'currentColor',
  preserveAspectRatio: 'xMidYMid meet',
  viewBox: '0 0 64 64',
};

function IconCanvas({ children, className }) {
  return (
    <svg {...iconProps} className={className}>
      {children}
    </svg>
  );
}

export function MousePointerIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <path
        clipRule="evenodd"
        d="M7 3 15 61l15-17 10 18 11-6-10-18 21-7zM18 19l26 11-13 3-9 11z"
        fillRule="evenodd"
      />
    </IconCanvas>
  );
}

export function DesktopMonitorIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <path
        clipRule="evenodd"
        d="M8 7h48a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6Zm2 8v26h44V15Z"
        fillRule="evenodd"
      />
      <path d="M27 47h10v7h10a4 4 0 0 1 4 4v2H13v-2a4 4 0 0 1 4-4h10z" />
    </IconCanvas>
  );
}

export function VrHeadsetIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <path d="M45 20c9 1 15 7 17 17l-7 3c-1-7-4-10-10-11z" />
      <path d="m46 20 13 7v16l-11 6-5-9z" opacity="0.72" />
      <path
        clipRule="evenodd"
        d="M11 14 45 19c4 1 7 4 7 8v16c0 5-4 8-9 7l-31-5c-5-1-8-4-8-9V23c0-6 3-10 7-9Zm8 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm11 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        fillRule="evenodd"
      />
    </IconCanvas>
  );
}

export function WireframeCubeIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <path
        clipRule="evenodd"
        d="M32 2 62 18 32 35 2 18Zm0 8L16 19l16 9 16-9Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M2 22 29 37v25L2 47Zm8 12v10l12 7V41Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="m35 37 27-15v25L35 62Zm7 4v10l12-7V34Z"
        fillRule="evenodd"
      />
    </IconCanvas>
  );
}

export function GameControllerIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <path
        clipRule="evenodd"
        d="M17 18h30c8 0 13 6 16 20l1 10c1 8-3 13-10 13-5 0-8-4-12-11H22c-4 7-7 11-12 11-7 0-11-5-10-13l1-10c3-14 8-20 16-20Zm-4 16h6v-6h7v6h6v7h-6v6h-7v-6h-6Zm33-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fillRule="evenodd"
      />
    </IconCanvas>
  );
}

function CodeBrace() {
  return (
    <path d="M27 5h-4C14 5 10 10 10 19v6c0 4-2 6-6 6H2v8h2c4 0 6 2 6 6v2c0 9 4 14 13 14h4v-9h-3c-4 0-5-2-5-6v-4c0-4-2-7-6-8 4-2 6-5 6-9v-5c0-4 1-6 5-6h3z" />
  );
}

export function CodingSymbolIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <CodeBrace />
      <g transform="translate(64 0) scale(-1 1)">
        <CodeBrace />
      </g>
      <circle cx="27" cy="34" r="2.25" />
      <circle cx="32" cy="34" r="2.25" />
      <circle cx="37" cy="34" r="2.25" />
    </IconCanvas>
  );
}

export function SmartphoneIcon({ className }) {
  return (
    <IconCanvas className={className}>
      <path
        clipRule="evenodd"
        d="M18 1h28a7 7 0 0 1 7 7v48a7 7 0 0 1-7 7H18a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Zm1 10v40h26V11Zm9-5a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4Zm4 49a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
        fillRule="evenodd"
      />
    </IconCanvas>
  );
}

const iconByType = {
  'coding-symbol': CodingSymbolIcon,
  'desktop-monitor': DesktopMonitorIcon,
  'game-controller': GameControllerIcon,
  'mouse-pointer': MousePointerIcon,
  smartphone: SmartphoneIcon,
  'vr-headset': VrHeadsetIcon,
  'wireframe-cube': WireframeCubeIcon,
};

export default function AmbientIconGraphic({ className, type }) {
  const IconGraphic = iconByType[type];

  return IconGraphic ? <IconGraphic className={className} /> : null;
}
