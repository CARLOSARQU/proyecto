//import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import JoinSection from '../sections/HomeSections/JoinSection';
import AboutSection from '../sections/HomeSections/AboutSection';
import Founders from "../sections/HomeSections/FoundersSection";
import ManagersSection from "../sections/HomeSections/ManagersSection";
import Footer from '../components/Footer';
import ProjectsSection from "../sections/HomeSections/ProjectsSection";


export default function Home() {
    //const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen pt-16">
            <JoinSection />

            <Founders />

            <ManagersSection />

            <ProjectsSection />
            <Footer />
        </div>
    );
}
