import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
export default function Navbar() {
    return (
      <nav className="bg-[#2bccd4] shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold text-green-600 flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            Voluntariado
          </Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-green-500">Inicio</Link>
            <Link to="/contacto" className="hover:text-green-500">Contacto</Link>
          </div>
        </div>
      </nav>
    );
  }

