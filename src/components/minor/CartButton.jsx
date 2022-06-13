import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { itemAdded, itemRemoved } from "../../features/items/items";

export default function CartButton({ count, id }) {
  const dispatch = useDispatch();

  if (count === 0) {
    return (
      <Box sx={{ textAlign: "center", pt:2 }}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            incrementItem(id);
          }}
          variant="outlined"
        >
          Add to Cart
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          decrementItem(id);
        }}
      >
        <RemoveCircleOutlineIcon
          sx={{ color: "primary.main", fontSize: "2.5rem" }}
        />
      </IconButton>
      <Typography variant="h6" component="span">
        {count}
      </Typography>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          incrementItem(id);
        }}
      >
        <AddCircleOutlineIcon
          sx={{ color: "primary.main", fontSize: "2.5rem" }}
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
