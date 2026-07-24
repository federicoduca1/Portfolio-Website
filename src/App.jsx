import { Navigate, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import HouraCaseStudy from './pages/HouraCaseStudy.jsx';
import InFrameCaseStudy from './pages/InFrameCaseStudy.jsx';
import NintendoEshopCaseStudy from './pages/NintendoEshopCaseStudy.jsx';
import Playground from './pages/Playground.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="projects/nintendo-eshop-redesign"
          element={<NintendoEshopCaseStudy />}
        />
        <Route path="projects/houra" element={<HouraCaseStudy />} />
        <Route path="projects/inframe" element={<InFrameCaseStudy />} />
        <Route path="playground" element={<Playground />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
