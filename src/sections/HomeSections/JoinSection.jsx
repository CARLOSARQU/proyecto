import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeroImage from "../../assets/img/ia.jpg"; // reemplaza con tu imagen

export default function JoinSection() {
    const { t } = useTranslation();

    return (
    <section
        className="flex-grow bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
    >
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            {t('hero.title')}
        </h1>
        <p className="text-white mb-6 max-w-xl mx-auto">
            {t('hero.description')}
        </p>
        <Link
            to="/contacto"
            className="inline-block bg-secundario hover:bg-principal text-white font-semibold py-3 px-6 rounded-lg transition"
        >
            {t('hero.contact')}
        </Link>
        </div>
    </section>
    );
    }
