import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const fromStorage = window.localStorage.getItem('theme');
    if (fromStorage === 'dark' || fromStorage === 'light') return fromStorage;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <Header onToggleTheme={handleToggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
} 