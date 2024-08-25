import React from "react";

// Import custom components
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import NameList from "./components/NameList";

// Import CSS styles
import "./App.css";

// Main App component
const App = () => {
  return (
    <div className="app-container">
      {/* Render Greeting component with name prop */}
      <Greeting name="John" />
      {/* Render Counter component */}
      <Counter />
      {/* Render NameList component */}
      <NameList />
    </div>
  );
};

// Export the App component
export default App;
