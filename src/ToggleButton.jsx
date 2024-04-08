import React from "react";

const ToggleButton = ({ isOn, label, onToggle }) => {
  // Styling for the button
  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    border: `2px solid ${isOn ? "#FFF" : "#007BFF"}`,
    backgroundColor: isOn ? "#007BFF" : "#FFF",
    color: isOn ? "#FFF" : "#007BFF",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onToggle}>
      {label}
    </button>
  );
};

export default ToggleButton;
