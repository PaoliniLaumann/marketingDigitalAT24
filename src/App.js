import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Conocenos from "./components/Conocenos";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Conocenos/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
