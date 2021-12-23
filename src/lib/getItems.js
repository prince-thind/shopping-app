import uniqid from "uniqid";
import faker from "faker";

async function getItems() {
  const items = [];
  const numberOfItems = Math.trunc(Math.random() * 10 + 5);

  for (let i = 0; i < numberOfItems; i++) {
    const item = generateItem();
    items.push(item);
  }

  return items;

  function generateItem() {
    const item = {};
    const fakeAdjective = faker.commerce.productAdjective();
    const fakeProductName = faker.commerce.product();
    item.name = `${fakeAdjective} ${fakeProductName}`;
    item.key = uniqid();
    item.price = faker.commerce.price(100, 200);
    item.count = 0;
    item.currency = "$";
    item.image = faker.image.unsplash.image(null, null, fakeProductName);
    return item;
  }
}

export default getItems;
