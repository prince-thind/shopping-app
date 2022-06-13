import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CartItemCard from "./components/CartItemCard";
import TotalPayment from "./components/PaymentModule";
import WaitingIcon from "../../components/minor/WaitingIcon";
import List from "@mui/material/List";
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
      <Paper elevation={3}>
        <List sx={{mt:3, p:0}}>
          {cartItems.map((item) => {
            return <CartItemCard item={item} />;
          })}
        </List>
      </Paper>

      <TotalPayment />
    </Box>
  );
}
