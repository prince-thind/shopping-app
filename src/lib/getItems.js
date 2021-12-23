import uniqid from "uniqid";
import faker from "faker";

async function getItems() {
  const items = [];
  const numberOfItems = Math.trunc(Math.random() * 10 + 5);

  for (let i = 0; i < numberOfItems; i++) {
    const item = generateItem();
    console.log(item);
    items.push(item);
  }

  return items;

  function generateItem() {
    const item = {};
    item.name = faker.commerce.productName();
    item.key = uniqid();
    item.price = faker.commerce.price(100, 200);
    item.count = 0;
    item.currency = "$";
    item.image = faker.image.image(null, null, true);
    return item;
  }
}

export default getItems;
