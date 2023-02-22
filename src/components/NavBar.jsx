import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Inicio", "Conócenos", "Servicios"];

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
      position="static"
      style={{
        justifyContent: "center",
        backgroundColor: "transparent",
        textDecoration: "none",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 250,
              display: { xs: "none", md: "flex" },
              marginRight: 8,
            }}
            alt="logo"
            src="https://i.ibb.co/FgCfVZ5/LOGO02.png"
          ></Box>

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mr: 9,
                  color: "GrayText",
                  letterSpacing: ".1rem",
                  fontSize: "1rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              ml: "1rem",
              color: "GrayText",
              letterSpacing: ".1rem",
              fontSize: "1rem",
              display: { xs: "none", md: "flex" },
            }}
          >
            <p>Contacto</p>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
