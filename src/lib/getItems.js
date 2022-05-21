import axios from "axios";

async function getItems() {
  const response = await axios.get(process.env.REACT_APP_FETCH_URL);
  return response.data.items.map((e) => {
    e.count = 0;
    return e;
  });
}

export default getItems;
