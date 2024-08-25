import React from "react";

// Array of names to be displayed
const names = ["Alice", "Bob", "Charlie", "David"];

// NameList component to display a list of names
const NameList = () => {
  return (
    <div className="name-list-container">
      <h2 className="name-list-title">Name List</h2>
      <ul className="name-list">
        {/* Map through the names array to create list items */}
        {names.map((name, index) => (
          <li key={index} className="name-list-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the NameList component
export default NameList;
