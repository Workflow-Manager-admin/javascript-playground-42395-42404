import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import OutputPanel from './components/OutputPanel';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [code, setCode] = useState('// Welcome to JavaScript Playground!\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const executeCode = () => {
    setIsExecuting(true);
    setOutput([]);
    
    // Create a safe execution environment
    const originalConsole = console;
    const logs = [];
    
    // Override console methods to capture output
    const captureConsole = {
      log: (...args) => logs.push({ type: 'log', message: args.join(' ') }),
      error: (...args) => logs.push({ type: 'error', message: args.join(' ') }),
      warn: (...args) => logs.push({ type: 'warn', message: args.join(' ') }),
      info: (...args) => logs.push({ type: 'info', message: args.join(' ') })
    };

    try {
      // Replace console temporarily
      window.console = captureConsole;
      
      // Execute the code
      // eslint-disable-next-line no-eval
      eval(code);
      
      setOutput(logs);
    } catch (error) {
      logs.push({ type: 'error', message: error.message });
      setOutput(logs);
    } finally {
      // Restore original console
      window.console = originalConsole;
      setIsExecuting(false);
    }
  };

  // PUBLIC_INTERFACE
  const clearOutput = () => {
    setOutput([]);
  };

  // PUBLIC_INTERFACE
  const loadExample = (exampleCode) => {
    setCode(exampleCode);
    setOutput([]);
  };

  // PUBLIC_INTERFACE
  const shareCode = () => {
    const encodedCode = btoa(encodeURIComponent(code));
    const shareUrl = `${window.location.origin}${window.location.pathname}?code=${encodedCode}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Share link copied to clipboard!');
    }).catch(() => {
      alert(`Share link: ${shareUrl}`);
    });
  };

  // Load shared code from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedCode = urlParams.get('code');
    if (sharedCode) {
      try {
        const decodedCode = decodeURIComponent(atob(sharedCode));
        setCode(decodedCode);
      } catch (error) {
        console.error('Error loading shared code:', error);
      }
    }
  }, []);

  return (
    <div className="App">
      <Header theme={theme} onThemeToggle={toggleTheme} onShare={shareCode} />
      
      <div className="app-content">
        <Sidebar onLoadExample={loadExample} />
        
        <div className="main-area">
          <div className="editor-section">
            <div className="section-header">
              <h3>Code Editor</h3>
              <button 
                className="execute-btn" 
                onClick={executeCode}
                disabled={isExecuting}
              >
                {isExecuting ? 'Running...' : '▶ Run Code'}
              </button>
            </div>
            <CodeEditor 
              value={code} 
              onChange={setCode} 
              theme={theme} 
            />
          </div>
          
          <div className="output-section">
            <div className="section-header">
              <h3>Output</h3>
              <button className="clear-btn" onClick={clearOutput}>
                Clear
              </button>
            </div>
            <OutputPanel output={output} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
