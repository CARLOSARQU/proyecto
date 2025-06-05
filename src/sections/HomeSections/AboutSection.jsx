import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';

export default function AboutSection() {
    const { t } = useTranslation();

    return (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <SectionTitle title={t('about.title')}/>
            <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed">
                {t('about.description')}
            </p>
        </div>
    </section>
    );
    }
