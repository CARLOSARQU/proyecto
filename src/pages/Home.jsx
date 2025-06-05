import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Founders from "../sections/HomeSections/FoundersSection";
import MissionVisionCarousel from '../components/MissionVisionCarousel';
import AboutSection from '../sections/HomeSections/AboutSection';
import JoinSection from '../sections/HomeSections/JoinSection';


export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen pt-16">
        <JoinSection />

        <MissionVisionCarousel />

        <AboutSection />

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
