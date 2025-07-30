import React from 'react';

// PUBLIC_INTERFACE
const OutputPanel = ({ output }) => {
  if (output.length === 0) {
    return (
      <div className="output-panel">
        <div className="output-empty">
          No output yet. Run your code to see results here.
        </div>
      </div>
    );
  }

  return (
    <div className="output-panel">
      {output.map((item, index) => (
        <div key={index} className={`output-line ${item.type}`}>
          <span className="output-type">[{item.type.toUpperCase()}]</span> {item.message}
        </div>
      ))}
    </div>
  );
};

export default OutputPanel;
