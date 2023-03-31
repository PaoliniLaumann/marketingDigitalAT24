import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ListaServicios } from "./ListaServicios";





function Servicios({ onDataChanged }) {
  const location = useLocation();

  useEffect(() => {
    onDataChanged(location.pathname);
  });

  return (
    <header>
      <div>
        <ListaServicios/>
    </div>
    </header>
    
  );
}

export default Servicios;
