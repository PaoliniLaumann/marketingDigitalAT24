import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




function Redes({ onDataChanged }) {
    const location = useLocation();
  
    useEffect(() => {
      onDataChanged(location.pathname);
    });
    return <header><div>
    <Grid container  className="divConocenos">
<Grid item xs={12} md={4} >
<Box className="box1">
<h2 className="tituloServicio">GESTION DE REDES SOCIALES</h2>
<img  className="imagenConocenos" src="./imagenes/disenografico.jpg" alt="" />
</Box>
</Grid>
<Grid item xs={12} md={4}>
<Box className="box1">
<h5 className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sunt, ut facilis non, rem quos aliquam earum, dolorum repellat cupiditate illo ducimus quae commodi ipsum magni unde nemo a deserunt vitae <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, numquam repellat consequatur aut sit unde laudantium sequi possimus, delectus debitis est ut ipsam vero. Autem enim explicabo harum iure.<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cum dolor? Alias inventore laboriosam fugiat tempora consectetur aperiam adipisci, a impedit, libero officia ratione? Enim inventore illum fugit perspiciatis ratione.<br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto deleniti minima ratione. Totam nulla dignissimos alias eaque, nam iure ducimus veniam dolore nihil excepturi placeat, aliquam natus. Beatae, dolore ipsam! </h5></Box>
</Grid>
</Grid>
</div>
    </header>;
  }

export default Redes;