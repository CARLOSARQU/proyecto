import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
import logoImg from '../assets/img/logo.webp';
import iaImg from '../assets/img/ia.webp';
import rusmanImg from '../assets/img/founders/rusman.webp';

const icons = {
    mission: <FaBullseye className="text-4xl text-principal mb-2 mx-auto" />,
    vision: <FaEye className="text-4xl text-principal mb-2 mx-auto" />,
    values: <FaHeart className="text-4xl text-principal mb-2 mx-auto" />,
};

const images = {
    mission: logoImg,
    vision: iaImg,
    values: rusmanImg,
};

export default function MissionVisionValues() {
    const { t } = useTranslation();

    const sections = [
        {
            key: 'mission',
            title: t('mission.title'),
            text: t('mission.text'),
        },
        {
            key: 'vision',
            title: t('vision.title'),
            text: t('vision.text'),
        },
        {
            key: 'values',
            title: t('values.title'),
            text: t('values.text'),
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-4">
                <SectionTitle title={t('missionVisionValues.title')} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {sections.map((item, idx) => (
                        <div
                            key={item.key}
                            className={
                                `bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 opacity-0 animate-fade-in` +
                                ` animate-delay-${idx * 150}`
                            }
                            style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}
                        >
                            <img src={images[item.key]} alt={item.title} className="w-20 h-20 object-cover rounded-full shadow mb-3 border-4 border-principal" />
                            <h3 className="text-2xl font-bold text-principal mb-3 text-center">{item.title}</h3>
                            <p className="text-gray-700 text-center text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation-name: fade-in;
                }
                .animate-delay-0 { animation-delay: 0ms; }
                .animate-delay-150 { animation-delay: 150ms; }
                .animate-delay-300 { animation-delay: 300ms; }
            `}</style>
        </section>
    );
}
