import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Conocenos from "./components/Conocenos";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Web from "./components/Servicios/Web"
import Asesorias from "./components/Servicios/Asesorias"
import Grafico from "./components/Servicios/Grafico"
import Redes from "./components/Servicios/Redes"
import Seo from "./components/Servicios/Seo"
import Work from "./components/Servicios/Work"
import { useState } from "react";



function App() {
  const [data, setData] = useState("");

  const handleDataChange = (newData) => {
    setData(newData.slice(1));
  };

  return (
    <>
      <BrowserRouter>
        <div className={`App ${data === "" ? "Home" : data}`}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home onDataChanged={handleDataChange} />}
            />
            <Route path="/Conocenos" element={<Conocenos onDataChanged={handleDataChange}/>} />
            <Route path="/Servicios" element={<Servicios onDataChanged={handleDataChange}/>} />
            <Route path="/Contacto" element={<Contacto onDataChanged={handleDataChange} />} />
            <Route path="/Web" element={<Web onDataChanged={handleDataChange} />} />
            <Route path="/Asesorias" element={<Asesorias onDataChanged={handleDataChange} />} />
            <Route path="/Grafico" element={<Grafico onDataChanged={handleDataChange} />} />
            <Route path="/Redes" element={<Redes onDataChanged={handleDataChange} />} />
            <Route path="/Seo" element={<Seo onDataChanged={handleDataChange} />} />
            <Route path="/Work" element={<Work onDataChanged={handleDataChange} />} />
          </Routes>

          <Footer />
        </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
