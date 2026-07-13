import { Link } from 'react-router';

export default function EditorialTextLink({ children, to }) {
  return (
    <Link
      to={to}
      className="inline-flex border-b border-neutral-500 pb-1 text-neutral-50 transition-colors duration-300 hover:border-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-50"
    >
      {children} &rarr;
    </Link>
  );
}
