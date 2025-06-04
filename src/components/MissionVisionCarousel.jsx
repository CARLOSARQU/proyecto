import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MissionVisionCarousel() {
    const { t } = useTranslation();
    const slides = [
    {
        title: t('mission.title'),
        text: t('mission.text'),
    },
    {
        title: t('vision.title'),
        text: t('vision.text'),
    },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
    }, [slides.length]);

    return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-principal mb-4">
        {slides[current].title}
        </h2>
        <p className="text-gray-700 text-center text-lg">
        {slides[current].text}
        </p>
        <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
            <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-principal' : 'bg-gray-300'}`}
            ></button>
        ))}
        </div>
    </div>
    );
    }
