import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';


// components/Founders.jsx
export default function Founders({ founders }) {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
            <SectionTitle title={t("founders.title")} />

            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("founders.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                    <div className="md:flex flex-col">
                        <div className="md:w-full">
                        <img
                            src={founder.image}
                            alt={founder.name}
                            className="hidden md:block w-full h-64 object-cover"

                        />
                        </div>
                        <div className="p-6 md:w-full">
                            <h3 className="text-2xl text-center font-bold text-principal mb-2">
                                {founder.name}
                            </h3>
                            <p className="text-secundario text-center font-semibold mb-4">
                                {t(`founders.role.${founder.roleKey}`)}
                            </p>
                            <p className="text-gray-600 mb-6">
                                {t(`founders.description.${founder.description}`)}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href={founder.social.github} className="text-gray-600 hover:text-secundario transition-colors">
                                    <FaGithub className="text-2xl" />
                                </a>
                                <a href={founder.social.linkedin} className="text-gray-600 hover:text-secundario transition-colors">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href={founder.social.twitter} className="text-gray-600 hover:text-secundario transition-colors">
                                    <FaTwitter className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
