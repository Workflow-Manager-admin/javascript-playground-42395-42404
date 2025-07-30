import React from 'react';

// PUBLIC_INTERFACE
const Header = ({ theme, onThemeToggle, onShare }) => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="logo">
          JS Playground
        </a>
        <h1 className="header-title">JavaScript Code Editor</h1>
      </div>
      
      <div className="header-right">
        <button 
          className="btn btn-accent" 
          onClick={onShare}
          title="Share your code via link"
        >
          🔗 Share
        </button>
        
        <button 
          className="theme-toggle" 
          onClick={onThemeToggle}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
