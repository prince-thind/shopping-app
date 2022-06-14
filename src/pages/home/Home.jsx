import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import mainImage from "./assets/main.jpg";
import Grow from "@mui/material/Grow";

export default function Home() {
  return (
    <Grow in>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "fit-content" }} elevation={7}>
            <img src={mainImage} className="main-image" alt="shop" />
          </Paper>
        </Box>
        <Typography
          component="h2"
          variant="h4"
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          Foo Shop, Your destination for all Foo content
        </Typography>
      </Box>
    </Grow>
  );
}
