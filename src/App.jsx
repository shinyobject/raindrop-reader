import { useEffect, useState } from "react";
import ItemsList from "./ItemsList"; // Make sure the path matches your file structure
import { fetchItems } from "./api/fetchItems";
import { handleUpdate } from "./api/handleUpdate";
import "./App.css";

const Loading = () => {
  return <div className="Loading">Loading...</div>;
};

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadItems() {
      const items = await fetchItems();
      setItems(items);
    }

    loadItems();
  }, []);

  return (
    <main>
      <h1>
        <span>Inbox</span>
        <button onClick={() => handleUpdate(items, setItems, setIsLoading)}>
          Update
        </button>
      </h1>
      {isLoading && <Loading />}
      {!isLoading && <ItemsList items={items} setItems={setItems} />}
    </main>
  );
}

export default App;
