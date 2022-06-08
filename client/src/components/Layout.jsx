import { Outlet } from "react-router-dom";
import Header from "./Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Layout() {
  return (
    <Box>
      <Header />
      <Container sx={{mt:2}}>
        <Outlet />
      </Container>
    </Box>
  );
}
