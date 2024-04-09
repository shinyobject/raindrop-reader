import { groupByTags } from "./groupByTags";
import { ARCHIVE_COLLECTION_ID, INBOX_COLLECTION_ID } from "../constants";
import { fetchItems } from "./fetchItems";

const handleTagUpdate = async (items, setItems) => {
  const byTags = groupByTags(items);
  const accessToken = import.meta.env.VITE_RAINDROP_ACCESS_TOKEN;

  for (const tag in byTags) {
    const url = `https://api.raindrop.io/rest/v1/raindrops/${INBOX_COLLECTION_ID}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: byTags[tag],
          tags: [tag],
          collection: { $id: ARCHIVE_COLLECTION_ID },
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const newItems = await fetchItems();
      setItems(newItems);
    } catch (error) {
      console.error("There was a problem with the API call:", error);
    }
  }
};

export { handleTagUpdate };
