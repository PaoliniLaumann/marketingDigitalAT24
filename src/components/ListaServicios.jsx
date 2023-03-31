import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


export const ListaServicios = () =>{

    return(
        <div className="divServicios">
        <h1 className="ServicioTitulo">SERVICIOS</h1>
        <Grid  container className="gridServicios">
        <Grid item xs={12} md={4}>
            <Link to="/Asesorias" className="linkServicio"><Box className="boxServicios" >
        <h5>ASESORIAS PERSONALIZADAS</h5>
        <img src="./imagenes/operador.png" alt="" />
        </Box></Link>
        </Grid> 
        <Grid item xs={12} md={4}>
        <Link  to="/Grafico" className="linkServicio"><Box className="boxServicios" >
        <h5>DISEÑO GRAFICO</h5>
        <img src="./imagenes/diseno-grafico.png" alt="" />
        </Box></Link>
        </Grid> 
        <Grid item xs={12} md={4}>
        <Link to="/web" className="linkServicio"><Box className="boxServicios" >
        <h5>DISEÑO WEB</h5>
        <img src="./imagenes/diseno-web 1.png" alt="" />
        </Box></Link>
        </Grid> 
        <Grid item xs={12} md={4}>
        <Link to="/Seo" className="linkServicio"><Box className="boxServicios" >
        <h5>SEO / SEM</h5>
        <img src="./imagenes/seo.png" alt="" />
        </Box></Link>
        </Grid> 
        <Grid item xs={12} md={4}>
        <Link to="/Redes" className="linkServicio"><Box className="boxServicios" >
        <h5>GESTION DE REDES SOCIALES</h5>
        <img src="./imagenes/redes-sociales.png" alt="" />
        </Box></Link>
        </Grid> 
        <Grid item xs={12} md={4}>
        <Link  to="/Work" className="linkServicio"><Box className="boxServicios" >
        <h5>WORKSHOP</h5>
        <img src="./imagenes/taller.png" alt="" />
        </Box></Link>
        </Grid> 
    </Grid>
    </div>
    )
};