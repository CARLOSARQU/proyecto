import Founders from "../../components/Founders";
import Rusman from "../../assets/img/founders/rusman.webp";
import { useTranslation } from "react-i18next";

const founders = [ 
  {
    name: "Rusman Apaza",
    roleKey: "founder",
    description: "rusman",
    image: Rusman,
    social: {
      github: "https://github.com/RYUSNEY",
      linkedin: "https://www.linkedin.com/in/rusman-apaza-paricahua-133526334/",
      twitter: "https://x.com/Ryusney_18"
    }
  },
  {
    name: "Carlos Arque",
    roleKey: "cofounder",
    description: "carlos",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    social: {
      github: "https://github.com/CARLOSARQU",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Eddy Quea",
    roleKey: "cofounder",
    description: "eddy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    social: {
      github: "https://github.com/EddyGonzalo",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jean Apaza",
    roleKey: "cofounder",
    description: "jean",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function SobreNosotros() {
  return (
    <div>
      <Founders founders={founders} />
    </div>
  );
}
