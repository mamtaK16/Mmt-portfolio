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
        <button
          className="toggle inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--text)] hover:bg-[var(--surface)]/70 dark:hover:bg-white/5"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
          {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
      </div>
    </header>
  );
} 