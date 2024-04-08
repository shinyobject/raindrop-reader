import React from "react";
import ToggleButton from "./ToggleButton";

export const Item = ({ id, title, tags, onTagChange }) => {
  const handleToggle = (id, tag, isChecked) => {
    const newTags = isChecked ? [...tags, tag] : tags.filter((t) => t !== tag);
    onTagChange(id, newTags);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>{title}</div>
      {["code", "read later", "CDK", "newsletter"].map((tag) => (
        <ToggleButton
          key={tag}
          label={tag}
          isOn={tags.includes(tag)}
          onToggle={() => handleToggle(id, tag, !tags.includes(tag))}
        />
      ))}
    </div>
  );
};

// Assuming you'd use <Item /> in a list within another component, similar to the previous ItemsList example.
