import { useEffect, useState } from "react";
import ItemsList from "./ItemsList"; // Make sure the path matches your file structure
import { fetchItems } from "./api/fetchItems";
import { handleUpdate } from "./api/handleUpdate";
import "./App.css";

const Loading = ({ children }) => {
  return <div className="Loading">{children}</div>;
};

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [percentComplete, setPercentComplete] = useState(0);

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
        <button
          onClick={() =>
            handleUpdate(items, setItems, setIsLoading, setPercentComplete)
          }
        >
          Update
        </button>
      </h1>
      {isLoading && (
        <Loading>Processing... {parseInt(percentComplete * 10)}%</Loading>
      )}
      {!isLoading && <ItemsList items={items} setItems={setItems} />}
    </main>
  );
}

export default App;
