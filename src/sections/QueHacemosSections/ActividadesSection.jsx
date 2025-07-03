import SectionTitle from '../../components/SectionTitle';
import iaImg from '../../assets/img/ia.webp';
import fondo from '../../assets/img/fondo.webp';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const images = [iaImg,  fondo];

export default function ActividadesSection() {
    const { t } = useTranslation();
    const actividades = t('queHacemos.activities', { returnObjects: true }) || [];
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? actividades.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === actividades.length - 1 ? 0 : prev + 1));
    };

    const act = actividades[activeIndex];
    const img = images[activeIndex];

    return (
        <div className="py-8 px-4 md:px-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Indicadores de progreso */}
                <div className="flex justify-center mb-8">
                    <div className="flex gap-2">
                        {actividades.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex 
                                        ? 'bg-secundario scale-125' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Contenedor principal con glassmorphism */}
                <div className="group">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 
                                    bg-white/80 backdrop-blur-xl p-8 lg:p-12 
                                    rounded-3xl shadow-2xl border border-white/20
                                    hover:shadow-3xl hover:scale-[1.02] 
                                    transition-all duration-500 ease-out">
                        
                        {/* Imagen con efectos modernos */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl 
                                        hover:shadow-3xl transition-all duration-500">
                                <img
                                    src={img}
                                    alt={act.titulo}
                                    className="w-full h-80 lg:h-96 object-cover 
                                            transform hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                {/* Overlay gradiente sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t 
                                            from-black/10 via-transparent to-transparent 
                                            opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Decoración flotante */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 
                                bg-gradient-to-br from-principal to-secundario 
                                rounded-full shadow-lg animate-pulse"></div>
                        </div>

                        {/* Contenido con animaciones */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left 
                                    transform transition-all duration-500">
                            
                            {/* Título con efecto */}
                            <div className="mb-6">
                                <SectionTitle title={act.titulo}/>
                                <div className="w-16 h-1 bg-gradient-to-r from-principal to-secundario 
                                            rounded-full mx-auto lg:mx-0 mt-3"></div>
                            </div>
                            
                            {/* Descripción mejorada */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-6 
                                        font-light tracking-wide">
                                {act.descripcion}
                            </p>
                            
                            {/* Fecha con ícono moderno */}
                            {act.fecha && (
                                <div className="inline-flex items-center gap-3 
                                            bg-gradient-to-r from-blue-50 to-purple-50 
                                            px-4 py-2 rounded-full border border-blue-100">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-600 font-medium text-sm">
                                        {act.fecha}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Controles de navegación modernos */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={handlePrev}
                        className="group relative bg-white/90 backdrop-blur-sm text-gray-700 
                                px-6 py-3 rounded-2xl shadow-lg border border-white/30
                                hover:bg-secundario hover:text-white hover:scale-105 
                                hover:shadow-xl transition-all duration-300 
                                disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="font-medium">Anterior</span>
                        </div>
                    </button>

                    {/* Contador central */}
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl 
                                shadow-md border border-white/30">
                        <span className="text-gray-600 font-medium text-sm">
                            {activeIndex + 1} / {actividades.length}
                        </span>
                    </div>

                    <button
                        onClick={handleNext}
                        className="group relative bg-white/90 backdrop-blur-sm text-gray-700 
                                px-6 py-3 rounded-2xl shadow-lg border border-white/30
                                hover:bg-secundario hover:text-white hover:scale-105 
                                hover:shadow-xl transition-all duration-300 
                                disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Siguiente</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}