import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CityPage from './components/CityPage';
import TableauElectrique from './components/TableauElectrique';
import { cities } from './data/cities';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tableau-electrique" element={<TableauElectrique />} />
            {cities.map((city, index) => (
              <Route
                key={index}
                path={`/electricien-${city.name.toLowerCase().replace(/ /g, '-')}`}
                element={<CityPage city={`Électricien ${city.name}`} postalCode={city.postalCode} />}
              />
            ))}
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;