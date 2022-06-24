import Menu from "@mui/material/Menu";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const MenuH = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon sx={{ color: "black", mt: 3 }} />
          </IconButton>
          <Menu sx={{height: 200, display: "flex", justifyContent: "right"}}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "black"
                }}
              >
                 ¿Quién soy?
              </Link>
            </MenuItem>
    
            <MenuItem onClick={handleClose}>
              <Link
                to="/skills"
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "black"
                }}
              >
                Skills & lenguajes
              </Link>
            </MenuItem>
    
            <MenuItem onClick={handleClose}>
              <Link
                to="/proyectos"
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "black"
                }}
              >
                Proyectos
              </Link>
            </MenuItem>
    
            <MenuItem onClick={handleClose}>
              <Link
                to="/contacto"
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "black"
                }}
              >
                Contactame
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      );
    };
    
    export default MenuH;  