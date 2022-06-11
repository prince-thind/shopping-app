import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CartItemCard from "./components/CartItemCard";
import TotalPayment from "./components/PaymentModule";
import WaitingIcon from "../items/components/WaitingIcon";
import { useSelector } from "react-redux";
import { itemsSelector, statusSelector } from "../../features/items/items";

export default function Cart() {
  const items = useSelector(itemsSelector);
  const cartItems = items.filter((item) => item.count > 0);
  const fetchStatus = useSelector(statusSelector);

  if (fetchStatus === "pending") {
    return <WaitingIcon />;
  }

  return (
    <Box>
      <Grid container spacing={5} sx={{ mb: 2 }}>
        {cartItems.map((item) => {
          return (
            <Grid item xs={12} key={item.id}>
              <CartItemCard item={item} />
            </Grid>
          );
        })}
      </Grid>
      <TotalPayment />
    </Box>
  );
}
