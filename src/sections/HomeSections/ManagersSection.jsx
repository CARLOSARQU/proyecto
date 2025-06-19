import Managers from "../../components/Managers";
import Rusman from "../../assets/img/founders/rusman.webp";

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
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
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
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
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
