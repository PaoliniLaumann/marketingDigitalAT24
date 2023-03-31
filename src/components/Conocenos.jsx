import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Conocenos({ onDataChanged }) {
  const location = useLocation();

  useEffect(() => {
    onDataChanged(location.pathname);
  });

  return <header>
        <Grid container  className="divConocenos">
  <Grid item xs={12} md={4} >
    <Box>
      <img  className="logoConocenos" src="./logos/LOGO03.jpg" alt="" />
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box className="box2">
      <h1 className="">¡Nos presentamos!</h1>
      <h5 className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sunt, ut facilis non, rem quos aliquam earum, dolorum repellat cupiditate illo ducimus quae commodi ipsum magni unde nemo a deserunt vitae <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, numquam repellat consequatur aut sit unde laudantium sequi possimus, delectus debitis est ut ipsam vero. Autem enim explicabo harum iure vel..<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus minus blanditiis eius amet pariatur et maiores voluptatem? Unde, soluta ut laboriosam aut iste sunt temporibus. Provident quaerat ab blanditiis?<br />lo </h5></Box>
  </Grid>
</Grid>

  </header>;
}

export default Conocenos;
