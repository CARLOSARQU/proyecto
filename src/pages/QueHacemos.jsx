import SectionTitle from '../components/SectionTitle';
import iaImg from '../assets/img/ia.webp';
import logoImg from '../assets/img/logo.webp';

const actividades = [
  {
    img: iaImg,
    titulo: 'Taller de Inteligencia Artificial',
    descripcion: 'Realizamos un taller introductorio sobre IA para jóvenes de la comunidad, cubriendo desde los conceptos básicos hasta aplicaciones prácticas en el mundo real.'
  },
  {
    img: logoImg,
    titulo: 'Jornada de Voluntariado',
    descripcion: 'Colaboramos en proyectos sociales y tecnológicos para el desarrollo local, uniendo esfuerzos para generar un impacto positivo y duradero.'
  },
];

export default function QueHacemos() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="¿Qué hacemos?" />
        <p className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed mt-4 mb-16">
          Somos un voluntariado dedicado a impulsar la transformación digital y el desarrollo social a través de la tecnología y la colaboración. Organizamos talleres, capacitaciones, proyectos comunitarios y actividades de impacto para mejorar la vida de las personas y fortalecer el tejido social.
        </p>

        <div className="space-y-16">
          {actividades.map((act, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Alternar orden de imagen y texto */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img src={act.img} alt={act.titulo} className="rounded-lg shadow-xl w-full" />
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

