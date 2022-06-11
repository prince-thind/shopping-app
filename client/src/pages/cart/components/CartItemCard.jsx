import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import CustomLink from "../../../components/CustomLink";
import CartButton from "../../items/components/CartButton";

export default function CartItemCard({ item }) {
  return (
    <CustomLink to={"/items/" + item.id}>
      <Paper elevation={10} sx={{ p: 1, pb: 3 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={item.imageSrc} className="item-image" alt="item" />
            <CartButton count={item.count} id={item.id} />
          </Box>
          <Box sx={{ pl: 5, pt: 2, display: "flex", flex: 1 }}>
            <Box sx={{ flex: 1 }}>
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
            <Box sx={{mr:2}}>
            <Typography
                variant="body2"
                component="h4"
                sx={{ color: "text.secondary" }}
              >
                Total: ${item.count*item.price}
                
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </CustomLink>
  );
}
