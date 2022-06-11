import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { itemAdded, itemRemoved } from "../../../features/items/items";

export default function CartButton({ count, id }) {
  const dispatch = useDispatch();

  if (count === 0) {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault();
          incrementItem(id);
        }}
      >
        Add to Cart
      </Button>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <IconButton>
        <RemoveCircleOutlineIcon
          sx={{ color: "primary.main", fontSize: "2.5rem" }}
          onClick={(e) => {
            e.preventDefault();
            decrementItem(id);
          }}
        />
      </IconButton>
      <Typography variant="h6" component="span">
        {count}
      </Typography>
      <IconButton>
        <AddCircleOutlineIcon
          sx={{ color: "primary.main", fontSize: "2.5rem" }}
          onClick={(e) => {
            e.preventDefault();
            incrementItem(id);
          }}
        />
      </IconButton>
    </Box>
  );
  function incrementItem(id) {
    dispatch(itemAdded(id));
  }

  function decrementItem(id) {
    dispatch(itemRemoved(id));
  }
}