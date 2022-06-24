import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import MenuH from "./MenuH";

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "white" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "inline",
            },
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "15px",
              fontWeight: 600,
              ":hover": {
                borderColor: "#1b5e20",
                boxShadow: "2px 4px black",
              },
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              ¿Quién soy?
            </Link>
          </Button>
          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "15px",
              fontWeight: 600,
              ":hover": {
                borderColor: "#1b5e20",
                boxShadow: "2px 4px black",
              },
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/skills"
            >
              Skills & lenguajes
            </Link>
          </Button>

          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "15px",
              fontWeight: 600,
              ":hover": {
                borderColor: "#1b5e20",
                boxShadow: "2px 4px black",
              },
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/proyectos"
            >
              Proyectos
            </Link>
          </Button>
          <Button
            variant="text"
            sx={{
              color: "black",
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "15px",
              fontWeight: 600,
              ":hover": {
                borderColor: "#1b5e20",
                boxShadow: "2px 4px black",
              },
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contacto"
            >
              Contactame
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            display: {
              xs: "inline",
              sm: "inline",
              md: "none",
            },
          }}
        >
          <MenuH />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
