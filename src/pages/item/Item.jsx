import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { selectItemById } from "../../features/items/items";
import CartButton from "../items/components/CartButton";

function Item() {
  const id = useParams().id;
  const item = useSelector((state) => selectItemById(state, id));

  if (!item) {
    return (
      <Typography variant="h2" component="h2">
        No Item Found
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Typography variant="h5" component="h3">
        {item.name} {"  "}(
        {
          <Typography
            variant="h6"
            component="span"
            sx={{ color: "text.secondary" }}
          >
            ${item.price}
          </Typography>
        }
        )
      </Typography>
      <Rating name="read-only" value={item.rating} readOnly precision={0.5} />

      <Grid container sx={{ pt: 2 }} spacing={2}>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "fit-content" }} elevation={7}>
            <img src={item.imageSrc} className="item-image-page" alt="item" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {item.count > 0 && (
              <Typography component="span" variant="h6" sx={{ pr: 1 }}>
                Items In Cart:{" "}
              </Typography>
            )}

            <CartButton count={item.count} id={item.id} />
          </Box>
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "text.primary", mt: 1 }}
          >
            {item.shortDescription}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "text.primary", mt: 5 }}
          >
            {item.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Item;
