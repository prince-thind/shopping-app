import Box from "@mui/material/Box";
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
      <Box sx={{ p: 2, width:'100%'}}>
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
        <Rating name="read-only" value={3} readOnly precision={0.5} />

        <Box sx={{ display: "flex", justifyContent: "space-between", p:2 }}>
          <img src={item.imageSrc} className="item-image-page" alt="item" />
          <Box sx={{p:2}}>
            <CartButton count={item.count} id={item.id} />
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
          </Box>
        </Box>
      </Box>
  );
}

export default Item;
