import SectionTitle from '../components/SectionTitle';
import MissionVisionValores from '../components/MissionVisionCarousel'; 
import { useTranslation } from 'react-i18next';
import iaImg from '../assets/img/ia.webp';
import logoImg from '../assets/img/logo.webp';

const images = [iaImg, logoImg];

export default function QueHacemos() {
  const { t } = useTranslation();
  const actividades = t('queHacemos.activities', { returnObjects: true }) || [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('queHacemos.title')} />
        <p className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed mt-4 mb-16">
          {t('queHacemos.subtitle')}
        </p>
        <MissionVisionValores />
        <div className="space-y-16">
          {actividades.map((act, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img src={images[idx]} alt={act.titulo} className="rounded-lg shadow-xl w-full h-[27.5rem] object-cover" />
              </div>
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-bold text-principal mb-4">{act.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{act.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

