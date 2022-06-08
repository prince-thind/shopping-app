import { Outlet } from "react-router-dom";
import Header from "./Header";
import Box from "@mui/material/Box";

export default function Layout() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}
