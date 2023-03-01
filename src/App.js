import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Conocenos from "./components/Conocenos";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
/* import Footer from "./components/Footer"; */

function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Conocenos" element={<Conocenos/>}/>
            <Route path="/Servicios" element={<Servicios/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
          </Routes>
         
        </BrowserRouter>
    </>
  );
}

export default App;
