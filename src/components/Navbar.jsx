import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-green-600">
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
