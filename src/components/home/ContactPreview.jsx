import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import QuickContactIcon from './QuickContactIcon.jsx';

export default function ContactPreview({ content }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      section.dataset.closingVisible = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        section.dataset.closingVisible = 'true';
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.12,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-contact-preview"
      data-closing-visible="false"
    >
      <h2
        id="home-contact-preview"
        className="closing-statement-reveal max-w-4xl text-[clamp(2.25rem,4.8vw,5rem)] font-medium leading-[1.08] text-neutral-200"
      >
        {content.statement}
      </h2>

      <p
        className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl sm:leading-9"
        data-closing-reveal="supporting"
      >
        {content.description}
      </p>

      <div className="mt-16 grid gap-16 sm:mt-20 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.65fr)] lg:items-center lg:gap-24">
        <div className="justify-self-start" data-closing-reveal="contact">
          <Link
            to={content.cta.path}
            className="group inline-flex items-center gap-[0.18em] text-[clamp(3.5rem,18vw,10rem)] font-semibold leading-[0.86] text-neutral-50 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-focus-ring"
          >
            <span>{content.cta.label}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-[0.08em] group-focus-visible:translate-x-[0.08em]"
            >
              &rarr;
            </span>
          </Link>
        </div>

        <aside
          aria-labelledby="quick-contacts-title"
          className="w-full max-w-sm lg:justify-self-center"
          data-closing-reveal="quick-contacts"
        >
          <h3
            id="quick-contacts-title"
            className="text-sm font-semibold text-neutral-400 sm:text-base"
          >
            {content.quickContacts.title}
          </h3>

          <ul className="mt-7 divide-y divide-neutral-800 border-y border-neutral-800">
            {content.quickContacts.items.map((contact) => (
              <li key={contact.id}>
                <a
                  href={contact.href}
                  className="group flex min-h-16 items-center gap-4 py-4 text-neutral-300 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  target={contact.external ? '_blank' : undefined}
                >
                  <span className="block size-6 shrink-0" aria-hidden="true">
                    <QuickContactIcon type={contact.icon} />
                  </span>
                  <span className="min-w-0 text-base font-medium break-words sm:text-lg">
                    {contact.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
