import React from "react";
import { useLocation } from 'react-router-dom';
import  { useEffect,  useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Carousel } from "./Carousel";
import { Newsletter} from "./Newsletter";

function Home({ onDataChanged }) {
  const location = useLocation()

  
  useEffect(() => {
    onDataChanged(location.pathname);
  })


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <header >
        <div className="contenedor">
      <h1 className="tituloHome"> AT24 MARKETING DIGITAL</h1>
      <p className="p1Home">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet corrupti deserunt sunt, earum rem in. Repellendus, cupiditate Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eveniet voluptas doloribus at eligendi facilis eius sint id iure, deserunt fugiat quam nihil dolore, nam, consequatur modi quas impedit consequuntur.</p>
      <p className="p2Home">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
      <p className="p3Home">Mas de 15 años de experiencia</p>
    </div>

    <div className="boton">
      <Button variant="contained">
        <Link className="link" to="/Contacto" style={{ textDecoration: "none" }}>¡Contactanos!</Link>
      </Button>
    </div>

    <Grid container className="gridContenedor">
        <Grid  item xs={12} md={4}>
          <Box className="grid1" border={1}>
          <h1 className="item">+15 </h1>
          <h2 className="item">años de experiencia</h2>
          </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="grid1" border={1}>
              <h1 className="item">+20</h1>
              <h2 className="item">clientes</h2>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="grid1" border={1}>
              <h1 className="item">+100 </h1>
              <h2 className="item">servicios prestados</h2>
            </Box>
          </Grid>
    </Grid>

<div className="marcasLogo">
      <img src="./logos/LOGO02.png" alt="" />
      <img src="./logos/LOGO02.png" alt="" />
      <img src="./logos/LOGO02.png" alt="" />
      <img src="./logos/LOGO02.png" alt="" />
      <img src="./logos/LOGO02.png" alt="" />
</div>

    <Carousel />
    <Newsletter/>
  </header>;
}

export default Home;
