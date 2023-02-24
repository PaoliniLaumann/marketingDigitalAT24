import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = [
  { enlace: "/", nombre: "Inicio" },
  { enlace: "/Conocenos", nombre: "Conocenos" },
  { enlace: "/Servicios", nombre: "Servicios" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="positioned"
      position="relative"
      style={{
        justifyContent: "center",
        backgroundColor: "transparent",
        textDecoration: "none",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              sx={{
                height: 80,
                width: 200,
                display: { xs: "none", md: "flex" },
                marginRight: 5,
                marginLeft: 4,
              }}
              alt="logo"
              src="https://i.ibb.co/FgCfVZ5/LOGO02.png"
            ></Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.enlace}
                    style={{ textDecoration: "none", color: `black` }}
                  >
                    {page.nombre}{" "}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 120,
                display: { xs: "flex", md: "none" },
              }}
              alt="logo"
              src="https://i.ibb.co/FgCfVZ5/LOGO02.png"
            ></Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link
                  to={page.enlace}
                  style={{ textDecoration: "none", color: `black` }}
                >
                  {page.nombre}{" "}
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Link to="/Contacto" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "BlinkMacSystemFont",
                fontWeight: 100,
                letterSpacing: ".3rem",
                color: "black",
              }}
            >
              Contacto
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
