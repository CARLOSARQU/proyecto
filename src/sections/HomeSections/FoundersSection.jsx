import Founders from "../../components/Founders";
import Rusman from "../../assets/img/founders/user.webp";
import Carlos from "../../assets/img/founders/user.webp";
import Eddy from "../../assets/img/founders/user.webp";
import Jean from "../../assets/img/founders/user.webp";

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
    image: Carlos,
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
    image: Eddy,
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
    image: Jean,
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
