import React from 'react';

// PUBLIC_INTERFACE
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a 
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          JavaScript Docs
        </a>
        <a 
          href="https://www.ecma-international.org/ecma-262/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          ECMAScript Spec
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        <a 
          href="#about" 
          className="footer-link"
          onClick={(e) => {
            e.preventDefault();
            alert('JavaScript Playground - A modern web-based code editor for JavaScript development and learning.');
          }}
        >
          About
        </a>
      </div>
      <div className="footer-text">
        © 2024 JavaScript Playground. Built with React & Monaco Editor.
      </div>
    </footer>
  );
};

export default Footer;
