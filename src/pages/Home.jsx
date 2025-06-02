import { Link } from "react-router-dom";
import HeroImage from "../assets/logo.jpg"; // reemplaza con tu imagen

export default function Home() {
return (
    <div className="flex flex-col min-h-screen">
    {/* Hero */}
        <section
            className="flex-grow bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                ¡Únete a nuestra causa!
            </h1>
            <p className="text-white mb-6 max-w-xl">
                Ayudamos a desarrollar proyectos con impacto social, a organizar talleres, 
                hackathones y podcasts. Capacitar a otros estudiantes y colegios.
                Y aprender de expertos y egresados destacados. Sé parte del cambio hoy.
            </p>
            <Link
                to="/contacto"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
                Contáctanos
            </Link>
        </div>
    </section>

    {/* Quiénes Somos */}
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">¿Quiénes somos?</h2>
            <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed">
            Somos un grupo de voluntarios comprometidos con [mencionar misión].
            Desde [año de inicio], trabajamos en proyectos de [áreas de acción].
            </p>
        </div>
    </section>

    {/* Funcionamientos básicos */}
    <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Proyecto A</h3>
            <p className="text-gray-600">
            Breve descripción de tu primera iniciativa.
            </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Proyecto B</h3>
            <p className="text-gray-600">
            Breve descripción de tu segunda iniciativa.
            </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Proyecto C</h3>
            <p className="text-gray-600">
            Breve descripción de tu tercera iniciativa.
            </p>
        </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} Voluntariado ·
        <Link to="/contacto" className="ml-2 hover:text-white">
            Contáctanos
        </Link>
        </div>
    </footer>
    </div>
);
}
