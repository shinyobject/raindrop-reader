import { useEffect, useState } from "react";
import ItemsList from "./ItemsList"; // Make sure the path matches your file structure
import { fetchItems } from "./api/fetchItems";
import { handleUpdate } from "./api/handleUpdate";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function loadItems() {
      const items = await fetchItems();
      setItems(items);
    }

    loadItems();
  }, []);

  return (
    <main>
      {/* <section> */}

      <h1>
        <span>Inbox</span>
        <button onClick={() => handleUpdate(items, setItems)}>Update</button>
      </h1>
      <ItemsList
        items={items}
        setItems={setItems}
        setSelectedItem={setSelectedItem}
      />
      {/* </section> */}
      {/* <section>
        <iframe src={selectedItem?.link} title={selectedItem?.title} />
      </section> */}
    </main>
  );
}

export default App;
