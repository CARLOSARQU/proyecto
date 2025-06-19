import SectionTitle from '../../components/SectionTitle';
import { useTranslation } from 'react-i18next';

export default function IntroSection() {
    const { t } = useTranslation();
    
    return (
        <div className="pt-24  bg-gray-100">
            <div className="container mx-auto px-4">
                <SectionTitle title={t('queHacemos.title')} />
                <p className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed mt-4 mb-16">
                    {t('queHacemos.subtitle')}
                </p>
            </div>
        </div>
    );
}