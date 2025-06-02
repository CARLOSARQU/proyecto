import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";
import { FaAddressBook, FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
      <nav className="bg-[#2bccd4] shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold text-green-600 flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            Voluntariado
          </Link>
          <div className="space-x-6 flex items-center">
            <Link to="/" className="hover:text-green-500 flex items-center gap-2">
              Inicio
              <FaHome className="text-xl" />
            </Link>
            <Link to="/contacto" className="hover:text-green-500 flex items-center gap-2 align-middle">
              Contacto
              <FaAddressBook className="text-xl" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }

