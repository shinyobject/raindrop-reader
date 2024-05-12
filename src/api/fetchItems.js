import { INBOX_COLLECTION_ID, UNSORTED_COLLECTION_ID } from "../constants";

const fetchFromCollection = async (collectionId) => {
  const url = `https://api.raindrop.io/rest/v1/raindrops/${collectionId}?perpage=200`;
  const accessToken = import.meta.env.VITE_RAINDROP_ACCESS_TOKEN;

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
    return data.items; // Assuming items are in the `items` array
  } catch (error) {
    console.error(
      `There was a problem fetching items from collection ${collectionId}:`,
      error
    );
    return [];
  }
};

const fetchItems = async () => {
  const inboxItems = await fetchFromCollection(INBOX_COLLECTION_ID);
  const unsortedItems = await fetchFromCollection(UNSORTED_COLLECTION_ID);

  return [...inboxItems, ...unsortedItems]; // Merge the two arrays
};

export { fetchItems };
