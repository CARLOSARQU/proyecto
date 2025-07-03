import { useTranslation } from 'react-i18next';
import desarrollo_soporte from '../../assets/img/areas/desarrollo_soporte.png';
import social_media       from '../../assets/img/areas/social_media.png';
import programa_educativo from '../../assets/img/areas/programa_educativo.png';
import talento_humano     from '../../assets/img/areas/talento_humano.png';
import logistica          from '../../assets/img/areas/logistica.png';
import user               from '../../assets/img/founders/user.webp';
const imageMap = {
  a: desarrollo_soporte,
  b: social_media,
  c: programa_educativo,
  d: talento_humano,
  e: logistica,
};

const avatarMap = {
    a: user,
    b: user,
    c: user,
    d: user,
    e: user,
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const postKeys = ['a', 'b', 'c', 'd', 'e'];

  return (
    <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('projects.title')}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('projects.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-none grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-5">
            {postKeys.map((key) => (
              <article key={key} className="flex flex-col">
                <div className="relative w-full">
                  <img
                    src={imageMap[key]}
                    alt={t(`projects.${key}.title`)}
                    className="aspect-[9/10] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className="mt-5 flex items-center justify-between text-xs">
                      <time dateTime={t(`projects.${key}.date`)} className="text-gray-500">
                        {t(`projects.${key}.date`)}
                      </time>
                      <span
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {t(`projects.${key}.category`)}
                      </span>
                    </div>

                    <div className="group relative">
                      <h3 className="mt-3 text-lg text-center font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {t(`projects.${key}.title`)}
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600 h-36 overflow-y-auto text-justify">
                        {t(`projects.${key}.description`)}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-x-4">
                    <img src={avatarMap[key]} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                          <span className="absolute inset-0" />
                          {t(`projects.${key}.authorName`)}
                      </p>
                      <p className="text-gray-600 h-12">{t(`projects.${key}.authorRole`)}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
} 