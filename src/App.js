import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ExperienceDetail from './components/ExperienceDetail';

// Main Home component that contains all sections
const Home = () => {
	return (
		<div>
			<Hero />
			<Projects />
			<Experience />
			<About />
			<Contact />
		</div>
	);
};

const App = () => {
	const [theme, setTheme] = useState(() => {
		const fromStorage = window.localStorage.getItem('theme');
		if (fromStorage === 'dark' || fromStorage === 'light') return fromStorage;
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	const handleToggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className="bg-gradient-to-br from-white via-accent to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
				<Navbar onToggleTheme={handleToggleTheme} theme={theme} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project/:id" element={<ProjectDetail />} />
					<Route path="/experience/:id" element={<ExperienceDetail />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App; 