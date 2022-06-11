import Grid from "@mui/material/Grid";
import ItemCard from "./components/ItemCard";
import WaitingIcon from "./components/WaitingIcon";
import { useSelector } from "react-redux";
import { itemsSelector, statusSelector } from "../../features/items/items";

export default function Items() {
  const data = useSelector(itemsSelector);
  const fetchStatus = useSelector(statusSelector);

  if (fetchStatus === "pending") {
    return <WaitingIcon />;
  }

  return (
    <Grid container spacing={5} sx={{ mb: 10 }}>
      {data.map((item) => {
        return (
          <Grid item xs={3} key={item.id}>
            <ItemCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
