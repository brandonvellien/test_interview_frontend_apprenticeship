import React, { useState } from "react";

// Counter component
const Counter = () => {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increment = () => setCount((prevCount) => prevCount + 1);
  // Function to decrease the count
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="counter-container">
      <h2 className="counter-title">
        Count: <span className="counter-value">{count}</span>
      </h2>
      <div className="button-container">
        {/* Increment button */}
        <button className="counter-button" onClick={increment}>
          +
        </button>
        {/* Decrement button */}
        <button className="counter-button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
