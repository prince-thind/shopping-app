import Grid from "@mui/material/Grid";
import ItemCard from "./components/ItemCard";

export default function Items() {
  const data = fakeSampleData();

  return (
    <Grid container spacing={5} sx={{ mb: 10 }}>
      {data.map((item, index) => {
        item.id = index;
        return (
          <Grid item xs={3}>
            <ItemCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

function fakeSampleData() {
  return [
    {
      name: "Item1",
      price: 45,
      count: 0,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/09/01/09/52/seagull-1635657_960_720.jpg",
      shortDescription: "a very short shortDescription lorem ipsum",
    },
    {
      name: "Item2",
      price: 45,
      count: 0,
      imageSrc:
        "https://cdn.pixabay.com/photo/2021/10/10/06/22/seagull-6695728_960_720.jpg",
      shortDescription: "a very short shortDescription lorem ipsum",
    },
    {
      name: "Item3",
      price: 45,
      shortDescription: "a very short shortDescription lorem ipsum",
      count: 0,
      imageSrc:
        "https://cdn.pixabay.com/photo/2022/05/30/14/05/paw-7231300_960_720.jpg",
    },
    {
      name: "Item4",
      shortDescription: "a very short shortDescription lorem ipsum",
      price: 45,
      count: 0,
      imageSrc:
        "https://cdn.pixabay.com/photo/2022/01/22/09/42/animal-6956681_960_720.jpg",
    },
    {
      name: "Item5",
      price: 45,
      shortDescription: "a very short shortDescription lorem ipsum",
      count: 0,
      imageSrc:
        "https://cdn.pixabay.com/photo/2022/06/02/11/01/snowdrop-anemone-7237694_960_720.jpg",
    },
  ];
}
