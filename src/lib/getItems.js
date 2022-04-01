import { randAccessory, randUuid } from '@ngneat/falso';
import axios from 'axios';

async function getItems() {
  const result = [];

  for (let i = 0; i < 15; i++) {
    const item = await generateItem();
    result.push(item);
  }

  return result;

  async function generateItem() {
    const item = {};
    item.name = randAccessory();
    item.key = randUuid();
    item.price = Math.trunc(Math.random()*(100)+50);
    item.count = 0;
    item.currency = "$";
    item.image = await getAxiosImage(item.name);
    return item;
  }

  async function getAxiosImage(name){
    const URL='https://pixabay.com/api/';
    const response=await axios.get(URL,{
      params: {
        key: process.env.REACT_APP_API_KEY,
        q:name.replaceAll(' ','+'),
        per_page:10,
        safesearch:true,
        image_type:'photo',
      },
    });
    const images=response.data.hits.map(i=>i.webformatURL);
    return images[Math.trunc(Math.random()*images.length)];
  }
}

export default getItems;
