import Managers from "../../components/Managers";
import Rusman from "../../assets/img/founders/user.webp";
import Carlos from "../../assets/img/founders/user.webp";
import Eddy from "../../assets/img/founders/user.webp";
import Jean from "../../assets/img/founders/user.webp";

const managers = [ 
    {
        name: "Rusman Apaza",
        roleKey: "presidente",
        career: "Ing. Sistemas",
        description: "presidente",
        image: Rusman,
        social: {
            github: "https://github.com/RYUSNEY",
            linkedin: "https://www.linkedin.com/in/rusman-apaza-paricahua-133526334/",
            twitter: "https://x.com/Ryusney_18"
        }
    },
    {
        name: "Carlos Arque",
        roleKey: "vicepresidente",
        career: "Ing. Sistemas",
        description: "vicepresidente",
        image: Carlos,
        social: {
            github: "https://github.com/CARLOSARQU",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Yamil Balboa",
        roleKey: "secretario",
        career: "Medicina Humana",
        description: "secretario",
        image: Carlos,
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Eddy Quea",
        roleKey: "vocal",
        career: "Ing. Sistemas",
        description: "vocal",
        image: Eddy,
        social: {
            github: "https://github.com/EddyGonzalo",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Jean Apaza",
        roleKey: "director_ejecutivo",
        career: "Ing. Sistemas",
        description: "director_ejecutivo",
        image: Jean,
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#"
        }
    }
];

export default function ManagersSection() {
    return (
        <div>
            <Managers managers={managers} />
        </div>
    );
}
