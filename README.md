🚀 Project: react-performance-showcase
This project is a small, focused demo to show how to write fast and efficient React components. It demonstrates the difference between a standard component and an optimized component by intentionally creating a common performance problem (unnecessary re-rendering).

🎯 The Main Goal
To visually prove the importance of React's optimization hooks: React.memo and useCallback.

💡 The Problem: Unnecessary Re-rendering
In React, when a parent component updates its state (like a counter ticking), it tries to re-render all of its child components, even if the children's data hasn't changed. This wastes CPU time and slows down the app.

In this demo:

The Parent Component (Home page) updates a counter every second.

The Basic Button is forced to re-render every second, even though it does nothing.

Visual Proof: The Basic Button flashes yellow every second.

❌ Basic Button (The Slow Way)
Component: BasicButton.tsx

Problem: It is a regular React function. When the Parent updates, the Button updates.

Result: Slow performance and flashing (unnecessary work).

✅ The Solution: Optimization Hooks
The Optimized Button uses two techniques to tell React: "Do not re-render me unless my properties (props) actually change."

1. React.memo
This wraps the component and checks its props. If the props are the same as before, it tells React to skip the re-render.

2. useCallback
The onClick function is passed as a prop. Without useCallback, this function is new every time the Parent re-renders. useCallback makes sure the function stays the same, so React.memo works correctly.

🚀 Optimized Button (The Fast Way)
Component: OptimizedButton.tsx

Solution: Uses React.memo to check for prop changes.

Parent Usage: Uses useCallback to keep the onClick function stable.

Result: Stable performance and the button does not flash.

📊 How to See the Difference
Run the Project: npm run dev or yarn dev

Look at the Screen: Observe the difference between the two buttons. The Basic Button constantly changes color because it is re-rendering. The Optimized Button remains stable.

Proving it with the Console (Advanced Check)
Open the Console in your browser's DevTools.

You will see:

❌ Basic Button (...) Rendered! appears every second.

✅ Optimized Button (...) Rendered! appears only once.

This proves that the Basic Button is doing unnecessary work, and the Optimized Button is not.

🛠️ Technologies Used
Next.js (for modern React development)

TypeScript (for writing safer, cleaner code)

Tailwind CSS (for fast styling)

Biome (Linter and Formatter for high-speed code quality)
