import React from "react";
import { ARCHIVE_COLLECTION_ID, NEWSLETTER_COLLECTION_ID } from "../constants";
import { fetchItems } from "./fetchItems";

const handleUpdate = async (items, setItems) => {
  // url of the update collection for raindrop.io api
  const accessToken = import.meta.env.VITE_RAINDROP_ACCESS_TOKEN;
  console.log("accessToken", accessToken);
  const itemsToUpdate = items.filter((item) => item.isChanged);
  for (const item in itemsToUpdate) {
    const itemToUpdate = itemsToUpdate[item];
    const url = `https://api.raindrop.io/rest/v1/raindrop/${itemToUpdate._id}`;
    const updateObject = {
      tags: itemToUpdate.tags.filter((tag) => tag !== "Archive"),
    };
    if (itemToUpdate.tags.includes("Newsletter")) {
      updateObject.collection = { $id: NEWSLETTER_COLLECTION_ID };
    } else {
      updateObject.collection = { $id: ARCHIVE_COLLECTION_ID };
    }
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObject),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was a problem with the API call:", error);
    }
  }
  const newItems = await fetchItems();
  setItems(newItems);
};

export { handleUpdate };
