import { useTranslation } from 'react-i18next';

export default function AboutSection() {
    const { t } = useTranslation();

    return (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
            {t('about.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed">
            {t('about.description')}
        </p>
        </div>
    </section>
    );
    }
