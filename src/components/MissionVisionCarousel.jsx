import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

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
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <SectionTitle title={t('missionVisionValues.title')} />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {sections.map((item) => (
                        <div key={item.key} className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
                            <h3 className="text-xl font-bold text-principal mb-3 text-center">{item.title}</h3>
                            <p className="text-gray-700 text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
