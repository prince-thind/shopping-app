
function getItems(items) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = generateItem(items[i]);
    result.push(item);
  }

  return result;

  function generateItem(input) {
    const item = {};
    item.name = input.title;
    item.key = input.id;
    item.price = input.price;
    item.count = 0;
    item.currency = "$";
    item.image = input.image;
    return item;
  }
}

export default getItems;
