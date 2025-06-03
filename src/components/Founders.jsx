import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const founders = [
  {
    name: "Rusman Apaza",
    role: "Fundador & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    description: "Apasionado por la tecnología y el impacto social. Más de 10 años de experiencia en desarrollo de software.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Carlos Arque",
    role: "Co-Fundador & CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    description: "Experto en arquitectura de software y liderazgo técnico. Comprometido con la innovación y el desarrollo sostenible.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Eddy Quea",
    role: "Co-Fundador & Director de Innovación",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    description: "Especialista en innovación y desarrollo de proyectos tecnológicos. Enfocado en crear soluciones que generen impacto social.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function Founders() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Nuestros Fundadores
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conoce a las mentes detrás de nuestra misión de crear un impacto positivo en la comunidad
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#2bccd4] font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {founder.description}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={founder.social.github} 
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a 
                      href={founder.social.linkedin} 
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a 
                      href={founder.social.twitter} 
                      className="text-gray-600 hover:text-gray-900 transition-colors"
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
