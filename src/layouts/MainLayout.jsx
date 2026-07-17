import { Outlet, useLocation } from 'react-router';
import ControlCenter from '../components/ControlCenter.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import RouteScrollReset from '../components/RouteScrollReset.jsx';

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCaseStudyPage = location.pathname.startsWith('/projects/');

  let mainClassName =
    'mx-auto min-h-[calc(100vh-9rem)] max-w-[88rem] px-4 py-12 sm:px-5 lg:px-6';

  if (isHomePage) {
    mainClassName =
      'mx-auto min-h-[calc(100vh-9rem)] max-w-[88rem] px-4 pt-12 pb-0 sm:px-5 lg:px-6';
  } else if (isCaseStudyPage) {
    mainClassName = 'min-h-[calc(100vh-9rem)]';
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <RouteScrollReset />
      <Navbar />
      <main className={mainClassName}>
        <Outlet />
      </main>
      <ControlCenter />
      <Footer variant={isHomePage ? 'dark' : 'light'} />
    </div>
  );
}
