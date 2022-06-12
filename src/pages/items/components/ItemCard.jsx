import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import CustomLink from "../../../components/CustomLink";
import CartButton from "./CartButton";

export default function ItemCard({ item }) {
  return (
    <CustomLink to={"/items/" + item.id}>
      <Paper elevation={10} sx={{ p: 1, pb: 3 }}  className="hover">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={item.imageSrc} className="item-image" alt="item" />
        </Box>
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography variant="h5" component="h3">
            {item.name}
          </Typography>
          <Rating name="read-only" value={3} readOnly precision={0.5} />

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
        <CartButton count={item.count} id={item.id} />
      </Paper>
    </CustomLink>
  );
}
