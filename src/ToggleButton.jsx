import React from "react";

const ToggleButton = ({ isOn, label, onToggle }) => {
  // Styling for the button
  const toggleStyles = {
    border: `2px solid ${isOn ? "#FFF" : "#007BFF"}`,
    backgroundColor: isOn ? "#007BFF" : "#FFF",
    color: isOn ? "#FFF" : "#007BFF",
  };
  return (
    <button className="ToggleButton" style={toggleStyles} onClick={onToggle}>
      {label}
    </button>
  );
};

export default ToggleButton;
