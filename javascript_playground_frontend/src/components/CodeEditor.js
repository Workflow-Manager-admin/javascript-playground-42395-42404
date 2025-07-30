import React from 'react';
import Editor from '@monaco-editor/react';

// PUBLIC_INTERFACE
const CodeEditor = ({ value, onChange, theme }) => {
  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  const handleEditorChange = (newValue) => {
    onChange(newValue || '');
  };

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    roundedSelection: false,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 2,
    insertSpaces: true,
    wordWrap: 'on',
    contextmenu: true,
    selectOnLineNumbers: true,
    glyphMargin: false,
    folding: true,
    lineDecorationsWidth: 10,
    lineNumbersMinChars: 3,
    renderLineHighlight: 'line',
    bracketPairColorization: {
      enabled: true
    }
  };

  return (
    <div className="code-editor">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        value={value}
        onChange={handleEditorChange}
        theme={editorTheme}
        options={editorOptions}
        loading={<div>Loading editor...</div>}
      />
    </div>
  );
};

export default CodeEditor;
