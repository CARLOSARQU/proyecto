import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import Founders from "../sections/HomeSections/FoundersSection";
import MissionVisionCarousel from '../components/MissionVisionCarousel';
import AboutSection from '../sections/HomeSections/AboutSection';
import JoinSection from '../sections/HomeSections/JoinSection';
import Footer from '../components/Footer';


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
            <Footer />
        </div>
    );
}
