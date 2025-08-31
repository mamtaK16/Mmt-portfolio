import React from 'react';

export default function Header({ onToggleTheme, theme }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">MK</a>
        <nav className="nav">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#experience">Experience</a>
          <a href="/#contact">Contact</a>
        </nav>
        <button className="toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
          {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
      </div>
    </header>
  );
} 