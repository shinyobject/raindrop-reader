import React from "react";
import ToggleButton from "./ToggleButton";

export const Item = ({
  id,
  link,
  title,
  tags,
  onTagChange,
  setSelectedItem,
}) => {
  const handleToggle = (id, tag, isChecked) => {
    const newTags = isChecked ? [...tags, tag] : tags.filter((t) => t !== tag);
    onTagChange(id, newTags);
  };

  const handleLink = () => {
    const selectedItem = { id, title, link };
    setSelectedItem(selectedItem);
  };

  return (
    <div className="Item" style={{ marginBottom: "20px" }}>
      <h3>{title}</h3>
      <div className="Buttons">
        {[
          "Archive",
          "Newsletter",
          "CDK",
          "Code",
          "Music",
          "Read Later",
          "Share",
        ].map((tag) => (
          <ToggleButton
            key={tag}
            label={tag}
            isOn={tags.includes(tag)}
            onToggle={() => handleToggle(id, tag, !tags.includes(tag))}
          />
        ))}
      </div>
    </div>
  );
};

// Assuming you'd use <Item /> in a list within another component, similar to the previous ItemsList example.
