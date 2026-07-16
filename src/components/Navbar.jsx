import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import faceFront from '../assets/branding/3d-model-face-front.png';
import { siteConfig } from '../data/siteConfig.js';

const HIDE_SCROLL_THRESHOLD = 64;
const TOP_VISIBLE_THRESHOLD = 16;

function PersonalSignature() {
  return (
    <div className="flex size-16 shrink-0 items-center justify-center sm:size-20">
      <img
        src={faceFront}
        alt={`${siteConfig.author} portrait`}
        className="size-full object-contain"
      />
    </div>
  );
}

function NavigationLink({ item, onClick }) {
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'rounded-sm px-3 py-2 text-lg font-medium transition-colors duration-200 md:text-xl',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring',
          isActive ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-950',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <span className="inline-flex flex-col">
          <span>{item.label}</span>
          <span
            className={[
              'mt-1 h-px w-full origin-left bg-accent-600 transition-all duration-200 ease-out',
              isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
            ].join(' ')}
          />
        </span>
      )}
    </NavLink>
  );
}

function NavigationGroup({ items, onNavigate, className = '' }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <NavigationLink key={item.path} item={item} onClick={onNavigate} />
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const isNavbarVisibleRef = useRef(true);
  const lastScrollY = useRef(0);
  const isTicking = useRef(false);
  const isMobileMenuOpenRef = useRef(false);
  const navigationItems = [
    ...siteConfig.primaryNavigation,
    ...siteConfig.secondaryNavigation,
  ];

  useEffect(() => {
    isMobileMenuOpenRef.current = isMobileMenuOpen;

    if (isMobileMenuOpen) {
      updateNavbarVisibleState(true);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function updateNavbarVisibility() {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY <= TOP_VISIBLE_THRESHOLD ||
        currentScrollY < lastScrollY.current ||
        isMobileMenuOpenRef.current
      ) {
        updateNavbarVisibleState(true);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > HIDE_SCROLL_THRESHOLD
      ) {
        updateNavbarVisibleState(false);
      }

      lastScrollY.current = currentScrollY;
      isTicking.current = false;
    }

    function handleScroll() {
      if (!isTicking.current) {
        window.requestAnimationFrame(updateNavbarVisibility);
        isTicking.current = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function updateNavbarVisibleState(nextVisibility) {
    if (isNavbarVisibleRef.current !== nextVisibility) {
      isNavbarVisibleRef.current = nextVisibility;
      setIsNavbarVisible(nextVisibility);
    }
  }

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-neutral-50/90 shadow-[0_8px_24px_rgba(10,10,10,0.025)] backdrop-blur-sm transition-[opacity,transform] duration-300 ease-out',
          isNavbarVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0',
        ].join(' ')}
        onFocusCapture={() => updateNavbarVisibleState(true)}
      >
        <nav
          aria-label="Global navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:px-8"
        >
          <div className="flex items-center">
            <PersonalSignature />
          </div>

          <NavigationGroup
            items={siteConfig.primaryNavigation}
            className="hidden items-center gap-1 md:flex"
          />

          <NavigationGroup
            items={siteConfig.secondaryNavigation}
            className="hidden items-center gap-1 md:flex"
          />

          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            className="rounded-md border border-neutral-300 px-3 py-2 text-base font-medium text-neutral-800 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <div
            id="mobile-navigation"
            className={`${isMobileMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 border-t border-neutral-200 pt-4 md:hidden`}
          >
            {navigationItems.map((item) => (
              <NavigationLink
                key={item.path}
                item={item}
                onClick={closeMobileMenu}
              />
            ))}
          </div>
        </nav>
      </header>
      <div aria-hidden="true" className="h-32" />
    </>
  );
}
