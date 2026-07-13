import { siteConfig } from '../data/siteConfig.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-neutral-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          &copy; {currentYear} {siteConfig.author}
        </p>
        <p>Last update: {siteConfig.lastUpdate}</p>
      </div>
    </footer>
  );
}
