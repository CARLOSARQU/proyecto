import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

export default function Managers({ managers }) {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
            <SectionTitle title={t("managers.title")} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {managers.map((manager, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                    <div className="md:flex flex-col">
                        <div className="md:w-full">
                        <img
                            src={manager.image}
                            alt={manager.name}
                            className="hidden md:block w-full h-64 object-cover"

                        />
                        </div>
                        <div className="p-6 md:w-full">
                            <h3 className="text-2xl text-center font-bold text-principal">
                                {manager.name}
                            </h3>
                            <p className="text-center text-gray-500 mb-2">
                                {manager.career}
                            </p>
                            <p className="text-secundario text-center font-semibold mb-4">
                                {t(`managers.role.${manager.roleKey}`)}
                            </p>
                            <p className="text-gray-600 text-center mb-6">
                                {t(`managers.description.${manager.description}`)}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={manager.social.github}
                                    className="text-gray-600 hover:text-secundario transition-colors"
                                >
                                    <FaGithub className="text-2xl" />
                                </a>
                                <a
                                    href={manager.social.linkedin}
                                    className="text-gray-600 hover:text-secundario transition-colors"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a
                                    href={manager.social.twitter}
                                    className="text-gray-600 hover:text-secundario transition-colors"
                                >
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
