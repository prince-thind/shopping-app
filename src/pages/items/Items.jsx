import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ItemCard from "./components/ItemCard";
import WaitingIcon from "../../components/minor/WaitingIcon";
import { useSelector } from "react-redux";
import { itemsSelector, statusSelector } from "../../features/items/items";

export default function Items() {
  const data = useSelector(itemsSelector);
  const fetchStatus = useSelector(statusSelector);

  if (fetchStatus === "pending") {
    return <WaitingIcon />;
  }

  return (
    <Box>
      <Grid container spacing={5} sx={{ mb: 10 }}>
        {data.map((item) => {
          return (
            <Grid item xs={3} key={item.id}>
              <ItemCard item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Paper
        sx={{ textAlign:'center', p:3, mb:5 }}
        elevation={10}
      >
        <Typography variant="h6" component="h6">
          All Images obtained from:
        </Typography>
        <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          <img
            src="https://pixabay.com/static/img/public/leaderboard_b.png"
            alt="Pixabay"
          />
        </a>
      </Paper>
    </Box>
  );
}
