import React, { useState } from "react";
import { Item } from "./Item";

const ItemsList = ({ items, setItems, setSelectedItem }) => {
  // Function to handle tag change
  const handleTagChange = (itemId, tags) => {
    // Here you would update the tags for the item in your state or backend

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
          link={item.link}
          setSelectedItem={setSelectedItem}
          onTagChange={handleTagChange}
        />
      ))}
    </div>
  );
};

export default ItemsList;
