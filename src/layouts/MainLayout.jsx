import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <Navbar />
      <main
        className={
          isHomePage
            ? 'mx-auto min-h-[calc(100vh-9rem)] max-w-[88rem] px-4 pt-12 pb-0 sm:px-5 lg:px-6'
            : 'mx-auto min-h-[calc(100vh-9rem)] max-w-[88rem] px-4 py-12 sm:px-5 lg:px-6'
        }
      >
        <Outlet />
      </main>
      <div aria-hidden="true" data-control-center-placeholder />
      <Footer variant={isHomePage ? 'dark' : 'light'} />
    </div>
  );
}
