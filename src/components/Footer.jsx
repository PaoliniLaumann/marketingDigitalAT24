import React from "react";
import { Grid, IconButton } from "@mui/material";
import { Link } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Grid container sx={{ justifyContent: "space-between", marginTop: 6 }}>
      <Grid item xs={4} style={{ textAlign: "center" }}>
        <Link>Politica de privacidad</Link> | <Link>Terminos de uso</Link> |{" "}
        <Link>Politicas de contenido</Link>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
