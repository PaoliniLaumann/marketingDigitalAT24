import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Conocenos({ onDataChanged }) {
  const location = useLocation();

  useEffect(() => {
    onDataChanged(location.pathname);
  });

  return <header></header>;
}

export default Conocenos;
