import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Founders from "./components/Founders";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
