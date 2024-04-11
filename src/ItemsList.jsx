import { Item } from "./Item";

const ItemsList = ({ items, setItems, setSelectedItem }) => {
  const handleTagChange = (itemId, tags) => {
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
