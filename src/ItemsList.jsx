import React, { useState } from "react";
import { Item } from "./Item";

const ItemsList = ({ items, setItems }) => {
  // Function to handle tag change
  const handleTagChange = (itemId, tags) => {
    // Here you would update the tags for the item in your state or backend
    console.log(`Item ID, Tags`, itemId, tags);

    setItems((items) =>
      items.map((item) =>
        item._id === itemId ? { ...item, tags, isChanged: true } : item
      )
    );
  };

  return (
    <div>
      {items.map((item) => (
        <Item
          key={item._id}
          id={item._id}
          tags={item.tags}
          title={item.title}
          onTagChange={handleTagChange}
        />
      ))}
    </div>
  );
};

export default ItemsList;
