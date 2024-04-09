import { INBOX_COLLECTION_ID } from "../constants";

const fetchItems = async () => {
  const url = `https://api.raindrop.io/rest/v1/raindrops/${INBOX_COLLECTION_ID}?perpage=200`;
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
    return data.items; // The items are usually located in the `items` array, but check the API response structure as it may change.
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return []; // Return an empty array in case of error
  }
};
export { fetchItems };
