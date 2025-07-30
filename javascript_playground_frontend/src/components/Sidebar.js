import React from 'react';

const codeExamples = [
  {
    title: 'Hello World',
    code: `// Hello World Example
console.log("Hello, World!");
console.log("Welcome to JavaScript Playground!");`
  },
  {
    title: 'Variables & Types',
    code: `// Variables and Data Types
let name = "JavaScript";
const year = 2024;
let isAwesome = true;
let numbers = [1, 2, 3, 4, 5];

console.log("Language:", name);
console.log("Year:", year);
console.log("Is awesome:", isAwesome);
console.log("Numbers:", numbers);`
  },
  {
    title: 'Functions',
    code: `// Function Examples
function greet(name) {
    return \`Hello, \${name}!\`;
}

const add = (a, b) => a + b;

const multiply = function(x, y) {
    return x * y;
};

console.log(greet("Developer"));
console.log("5 + 3 =", add(5, 3));
console.log("4 * 7 =", multiply(4, 7));`
  },
  {
    title: 'Arrays & Objects',
    code: `// Arrays and Objects
const fruits = ['apple', 'banana', 'orange'];
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log("Fruits:", fruits);
console.log("Person:", person);

// Array methods
fruits.push('grape');
console.log("After push:", fruits);

// Object property access
console.log(\`\${person.name} is \${person.age} years old\`);`
  },
  {
    title: 'Loops & Conditionals',
    code: `// Loops and Conditionals
const numbers = [1, 2, 3, 4, 5];

// For loop
console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(\`Index \${i}: \${numbers[i]}\`);
}

// For...of loop
console.log("\\nFor...of loop:");
for (const num of numbers) {
    if (num % 2 === 0) {
        console.log(\`\${num} is even\`);
    } else {
        console.log(\`\${num} is odd\`);
    }
}`
  },
  {
    title: 'Async/Await',
    code: `// Async/Await Example
async function fetchData() {
    console.log("Fetching data...");
    
    // Simulate API call with Promise
    const data = await new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: "Data fetched successfully!", timestamp: new Date() });
        }, 1000);
    });
    
    console.log("Received:", data);
    return data;
}

// Call async function
fetchData().then(() => {
    console.log("Operation completed!");
});

console.log("This runs immediately while fetch is in progress");`
  },
  {
    title: 'DOM Manipulation',
    code: `// DOM Manipulation Example
console.log("Current page title:", document.title);
console.log("URL:", window.location.href);

// Create elements (conceptual - limited in this sandbox)
console.log("Document ready state:", document.readyState);

// Date and time
const now = new Date();
console.log("Current date:", now.toLocaleDateString());
console.log("Current time:", now.toLocaleTimeString());

// Math operations
console.log("Random number:", Math.random());
console.log("Square root of 16:", Math.sqrt(16));`
  },
  {
    title: 'Error Handling',
    code: `// Error Handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log("10 / 2 =", divide(10, 2));
    console.log("10 / 0 =", divide(10, 0)); // This will throw an error
} catch (error) {
    console.error("Caught error:", error.message);
} finally {
    console.log("Division operation completed");
}

console.log("Program continues...");`
  }
];

// PUBLIC_INTERFACE
const Sidebar = ({ onLoadExample }) => {
  return (
    <div className="sidebar">
      <h3>Code Examples</h3>
      <ul className="examples-list">
        {codeExamples.map((example, index) => (
          <li key={index} className="example-item">
            <button
              className="example-btn"
              onClick={() => onLoadExample(example.code)}
              title={`Load ${example.title} example`}
            >
              {example.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
