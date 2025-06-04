import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const founders = [ 
  {
    name: "Jean Apaza",
    roleKey: "advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Rusman Apaza",
    roleKey: "founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    social: {
      github: "https://github.com/RYUSNEY",
      linkedin: "https://www.linkedin.com/in/rusman-apaza-paricahua-133526334/",
      twitter: "#"
    }
  },
  {
    name: "Carlos Arque",
    roleKey: "cofounder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    social: {
      github: "https://github.com/CARLOSARQU",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Eddy Quea",
    roleKey: "cofounder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    social: {
      github: "https://github.com/EddyGonzalo",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function Founders() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          {t('founders.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('founders.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="md:flex flex-col">
                <div className="md:w-full">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 md:w-full">
                  <h3 className="text-2xl font-bold text-principal mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-secundario font-semibold mb-4">
                    {t(`founders.role.${founder.roleKey}`)}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {t(`founders.description.${founder.roleKey}`)}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={founder.social.github} 
                      className="text-gray-600 hover:text-secundario transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a 
                      href={founder.social.linkedin} 
                      className="text-gray-600 hover:text-secundario transition-colors"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a 
                      href={founder.social.twitter} 
                      className="text-gray-600 hover:text-secundario transition-colors"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
