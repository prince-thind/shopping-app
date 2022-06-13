import * as React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomLink from "../../../components/CustomLink";
import CartButton from "../../../components/minor/CartButton";

export default function CartItemCard({ item }) {
  return (
    <ListItem divider>
      <CustomLink to={"/items/" + item.id}>
        <Grid
          sx={{
            color: "text.primary",
            width: "90vw",
          }}
          container
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={item.imageSrc} className="item-image" alt="item" />
            <CartButton count={item.count} id={item.id} />
          </Grid>
          <Grid item xs={9} sx={{ p: 2, pl: 5, display: "flex", flex: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" component="h3">
                {item.name}
              </Typography>
              <Rating
                name="read-only"
                value={item.rating}
                readOnly
                precision={0.5}
              />

              <Typography
                variant="body2"
                component="h4"
                sx={{ color: "text.secondary" }}
              >
                ${item.price}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ color: "text.primary", mt: 1 }}
              >
                {item.shortDescription}
              </Typography>
            </Box>
            <Box sx={{ mr: 2 }}>
              <Typography
                variant="body2"
                component="h4"
                sx={{ color: "text.secondary" }}
              >
                Total: ${item.count * item.price}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CustomLink>
    </ListItem>
  );
}
