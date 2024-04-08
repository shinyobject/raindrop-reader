import { useEffect, useState } from "react";
import ItemsList from "./ItemsList"; // Make sure the path matches your file structure

import "./App.css";

const accessToken = import.meta.env.VITE_RAINDROP_ACCESS_TOKEN;
console.log("accessToken", accessToken);
function App() {
  const collectionId = "9785277";
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchItems = async () => {
    const url = `https://api.raindrop.io/rest/v1/raindrops/${collectionId}?perpage=200`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.items; // The items are usually located in the `items` array, but check the API response structure as it may change.
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return []; // Return an empty array in case of error
    }
  };

  const setTags = (itemId, tags) => {
    const item = items.find((item) => item._id === itemId);
    console.log("Item:", item, tags);
  };

  useEffect(() => {
    async function loadItems() {
      const items = await fetchItems();
      setItems(items);
      setSelectedItem(items.length > 0 ? items[0] : null);
    }

    loadItems();
  }, []);

  const handleUpdate = async () => {
    // url of the update collection for raindrop.io api
    const url = `https://api.raindrop.io/rest/v1/raindrops/${collectionId}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: items.filter((item) => item.isChanged).map((item) => item._id),
          tags: items.filter((item) => item.isChanged).map((item) => item.tags),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return []; // Return an empty array in case of error
    }
  };

  return (
    <div>
      <h4>Changed</h4>
      <button onClick={handleUpdate}>Update</button>
      {items
        .filter((item) => item.isChanged)
        .map((item) => (
          <div key={item._id}>{item.title}</div>
        ))}
      <h1>My Items</h1>
      <ItemsList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
