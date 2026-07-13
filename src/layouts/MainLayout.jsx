import { Outlet } from 'react-router';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-9rem)] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <div aria-hidden="true" data-control-center-placeholder />
      <Footer />
    </div>
  );
}
