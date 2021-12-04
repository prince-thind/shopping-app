import uniqid from "uniqid";
import images from "../images/images";

async function getItems() {
  return [
    {
      name: "cup",
      key: uniqid(),
      price: "5",
      count: 0,
      currency: "$",
      image: images["cup"],
    },
    {
      name: "feather",
      price: "10",
      key: uniqid(),
      count: 0,
      currency: "$",
      image: images["feather"],
    },
    {
      name: "griffin",
      key: uniqid(),
      price: "50",
      count: 0,
      currency: "$",
      image: images["griffin"],
    },
    {
      name: "jar",
      key: uniqid(),
      price: "5",
      count: 0,
      currency: "$",
      image: images["jar"],
    },
    {
      name: "rings",
      key: uniqid(),
      price: "75",
      count: 0,
      currency: "$",
      image: images["rings"],
    },
    {
      name: "watch",
      key: uniqid(),
      price: "100",
      count: 0,
      currency: "$",
      image: images["watch"],
    },
  ];
}

export default getItems;
