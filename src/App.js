import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Conocenos from "./components/Conocenos";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
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
          </Routes>

          <Footer />
        </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;
