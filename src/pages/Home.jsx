import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import HeroImage from "../assets/img/ia.jpg"; // reemplaza con tu imagen
import Founders from "../components/Founders";


export default function Home() {
    const { t } = useTranslation(); // Para usara variables de texto de locales segun idioma

    return (
        <div className="flex flex-col min-h-screen">
        <section
            className="flex-grow bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                {t('hero.title')}
            </h1>
            <p className="text-white mb-6 max-w-xl">
                {t('hero.description')}
            </p>
            <Link
                to="/contacto"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
                {t('hero.contact')}
            </Link>
            </div>
        </section>

        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
            <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed">
                {t('about.description')}
            </p>
            </div>
        </section>

        <Founders />

        <section className="py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            {['a', 'b', 'c'].map((key) => (
                <div key={key} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl text-principal font-semibold mb-2">{t(`projects.${key}.title`)}</h3>
                <p className="text-gray-600">{t(`projects.${key}.description`)}</p>
                </div>
            ))}
            </div>
        </section>

        <footer className="bg-gray-800 text-gray-400 py-6">
            <div className="container mx-auto px-4 text-center">
            © {new Date().getFullYear()} Ayni Digital ·
            <Link to="/contacto" className="ml-2 hover:text-white">
                {t('footer.contact')}
            </Link>
            </div>
        </footer>
        </div>
    );
}
