import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function CustomLink(props) {
  return (
    <Link
      to={props.to}
      component={RouterLink}
      sx={{ color: props.color ?? "white", textDecoration: "none" }}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default CustomLink;
