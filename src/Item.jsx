import React from "react";
import ToggleButton from "./ToggleButton";

export const Item = ({ id, link, title, tags, onTagChange }) => {
  const handleToggle = (id, tag, isChecked) => {
    const newTags = isChecked ? [...tags, tag] : tags.filter((t) => t !== tag);
    onTagChange(id, newTags);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="Item" style={{ marginBottom: "20px" }}>
      <h3 onClick={() => openInNewTab(link)}>{title}</h3>
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
