import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CartItemCard from "./components/CartItemCard";
import TotalPayment from "./components/PaymentModule";
import WaitingIcon from "../../components/minor/WaitingIcon";
import Grow from "@mui/material/Grow";
import CustomLink from "../../components/CustomLink";

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

  if (cartItems.length === 0) {
    return (
      <Box>
        <Paper elevation={3} sx={{ p: 3, m: 3 }}>
          Cart is Empty, consider adding items from{" "}
          <CustomLink to="/items" color="primary.main">
            Shop
          </CustomLink>
        </Paper>
      </Box>
    );
  }
  return (
    <Grow in>
      <Box>
        <Paper elevation={3}>
          <List sx={{ mt: 3, p: 0 }}>
            {cartItems.map((item) => {
              return <CartItemCard item={item} key={item.id} />;
            })}
          </List>
        </Paper>

        <TotalPayment />
      </Box>
    </Grow>
  );
}
