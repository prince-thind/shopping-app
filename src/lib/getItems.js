import { randAccessory, randUuid } from "@ngneat/falso";
import axios from "axios";

async function getItems() {
  let result = [];

  for (let i = 0; i < 15; i++) {
    const item = generateItem();
    result.push(item);
  }

  result = await Promise.all(result);
  return result;

  async function generateItem() {
    const item = {};
    item.name = randAccessory();
    item.key = randUuid(); //todo
    item.price = Math.trunc(Math.random() * 100 + 50);
    item.count = 0;
    item.currency = "$";
    item.image = await getImageSrc(item.name);
    return item;
  }

  async function getImageSrc(name) {
    const URL = `https://prince-shopping-app-backend.herokuapp.com/`; //development
    const response = await axios.get(URL, {
      params: {
        q: name.replaceAll(" ", "+"),
      },
    });
    const src = response.data;
    return src;
  }
}

export default getItems;
