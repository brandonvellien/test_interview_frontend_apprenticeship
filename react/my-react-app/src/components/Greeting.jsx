import React from "react";

// Greeting component that displays a personalized hello message
const Greeting = ({ name }) => {
  return (
    <div className="greeting-container">
      {/* Display the greeting with the provided name */}
      <h1 className="greeting-text">Hello, {name}!</h1>
    </div>
  );
};

// Export the Greeting component
export default Greeting;
