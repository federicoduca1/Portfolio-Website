function EmailIcon() {
  return (
    <svg aria-hidden="true" className="size-full" viewBox="0 0 24 24">
      <path
        d="M3.5 5.5h17v13h-17zM4.5 7l7.5 5.8L19.5 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-full" viewBox="0 0 24 24">
      <path
        d="M5.2 3.8A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.2ZM3.4 9.5H7v11H3.4v-11Zm5.8 0h3.5V11c.8-1.2 2-1.9 3.7-1.9 3.5 0 4.2 2.3 4.2 5.4v6h-3.7v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.4H9.2v-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

const icons = {
  email: EmailIcon,
  linkedin: LinkedInIcon,
};

export default function QuickContactIcon({ type }) {
  const Icon = icons[type];

  return Icon ? <Icon /> : null;
}
