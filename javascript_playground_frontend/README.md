# JavaScript Playground Frontend

A modern, web-based JavaScript code editor and execution environment built with React. This application provides a complete playground for writing, executing, and sharing JavaScript code snippets with syntax highlighting and live output.

## Features

- **🎨 Modern UI**: Clean, minimalistic design with specified color palette
- **✨ Syntax Highlighting**: Powered by Monaco Editor (VS Code's editor)
- **⚡ Live Execution**: Run JavaScript code instantly in the browser
- **📝 Output Console**: View console logs, errors, warnings, and info messages
- **🌓 Theme Switching**: Toggle between light and dark themes
- **📚 Code Examples**: Pre-built examples for learning and reference
- **🔗 Code Sharing**: Share code snippets via URL links
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices

## Color Palette

- **Primary**: #1976d2 (Blue)
- **Secondary**: #424242 (Dark Gray)
- **Accent**: #ffd600 (Yellow)

## Layout Structure

- **Header**: Branding, theme toggle, and share functionality
- **Sidebar**: Collection of code examples for quick loading
- **Main Area**: 
  - Code editor with syntax highlighting (top)
  - Output console panel (bottom)
- **Footer**: Links to documentation and resources

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd javascript_playground_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

## Usage

### Writing Code
1. Use the code editor in the center panel to write JavaScript code
2. The editor provides syntax highlighting, auto-completion, and error detection
3. Code is automatically saved as you type

### Running Code
1. Click the "▶ Run Code" button to execute your JavaScript
2. Output will appear in the console panel below the editor
3. Logs, errors, warnings, and info messages are color-coded for easy identification

### Loading Examples
1. Use the sidebar to browse pre-built code examples
2. Click any example to load it into the editor
3. Examples cover basic JavaScript concepts, functions, arrays, async operations, and more

### Sharing Code
1. Click the "🔗 Share" button in the header
2. A shareable URL will be copied to your clipboard
3. Anyone with the link can view and run your code

### Theme Switching
1. Click the theme toggle button (🌙/☀️) in the header
2. Switch between light and dark themes
3. Theme preference is maintained across sessions

## Code Examples Included

- **Hello World**: Basic console output
- **Variables & Types**: Working with different data types
- **Functions**: Function declarations and expressions
- **Arrays & Objects**: Data structure manipulation
- **Loops & Conditionals**: Control flow examples
- **Async/Await**: Asynchronous programming patterns
- **DOM Manipulation**: Browser API interactions
- **Error Handling**: Try-catch patterns and error management

## Technology Stack

- **React 18**: Modern React with hooks
- **Monaco Editor**: Advanced code editor with IntelliSense
- **CSS3**: Custom styling with CSS variables for theming
- **Vanilla JavaScript**: No heavy UI frameworks for optimal performance

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Security Considerations

- Code execution is sandboxed within the browser environment
- No server-side code execution
- Share links encode code in URL parameters (client-side only)
- No data is stored on external servers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Performance

- Minimal dependencies for fast loading
- Code splitting and lazy loading where applicable
- Optimized bundle size
- Responsive design for all device types

## Troubleshooting

### Editor Not Loading
- Ensure you have a stable internet connection (Monaco Editor loads from CDN)
- Try refreshing the page
- Check browser console for any errors

### Code Not Executing
- Check for syntax errors in your code
- Ensure your code includes console output statements
- Try clearing the output and running again

### Theme Not Switching
- Clear browser cache and cookies
- Try refreshing the page
- Check if JavaScript is enabled in your browser

## License

This project is part of the JavaScript Playground application suite.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [JavaScript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Specification](https://www.ecma-international.org/ecma-262/)
