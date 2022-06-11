import * as React from "react";
import { useSelector } from "react-redux";
import { itemsSelector } from "../../../features/items/items";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaymentButton from './PaymentButton';

export default function TotalPayment() {
  const items = useSelector(itemsSelector);
  const cartItems = items.filter((item) => item.count > 0);

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <Box sx={{ p: 5, mb: 7, textAlign: "center" }}>
      <Typography variant="h4" component="h4">
        Total: ${total}
      </Typography>
     <PaymentButton/>
    </Box>
  );
}
