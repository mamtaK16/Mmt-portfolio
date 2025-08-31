import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {year} Mamta Kumari</span>
        <a href="/#home" className="back-to-top">Back to top ↑</a>
      </div>
    </footer>
  );
} 