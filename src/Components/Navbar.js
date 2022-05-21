import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

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
        <Button
          variant="text"
          sx={{
            color: "black",
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          <Link style={{ textDecoration: "none", color: "black"}} to="/">
          
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
          }}
        >
          <Link style={{ textDecoration: "none", color: "black"}} to="/skills">
          
            Skills & lenguaje
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
          }}
        >
          <Link style={{ textDecoration: "none", color: "black"}} to="/proyectos">
          
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
          }}
        >
           <Link style={{ textDecoration: "none", color: "black"}} to="/contacto">
          
          Contactame
        </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
