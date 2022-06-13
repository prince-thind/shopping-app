import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex", mt: "25vh" }}>
      <CircularProgress size="5rem" />
    </Box>
  );
}
