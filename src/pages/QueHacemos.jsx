import MissionVisionValores from '../components/MissionVisionCarousel'; 
import ActividadesSection from '../sections/QueHacemosSections/ActividadesSection';
import Footer from '../components/Footer';
import IntroSection from '../sections/QueHacemosSections/IntroSection';

export default function QueHacemos() {

  return (
    <div className="flex flex-col min-h-screen">
      <IntroSection />
      <MissionVisionValores />
      <ActividadesSection />
      <Footer />
    </div>
  );
}

