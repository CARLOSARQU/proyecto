import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import QueHacemos from "./pages/QueHacemos";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
