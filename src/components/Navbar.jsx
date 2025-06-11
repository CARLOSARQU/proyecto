import { Link } from "react-router-dom";
import logo from "../assets/img/logo-sin-fondo.png";
import { FaAddressBook, FaHome, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Button from "./Button";
import NavbarTo from "./NavbarTo";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-principal fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-2">
        {/* Logo + Título */}
        <Link to="/" className="text-2xl font-bold text-secundario flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          Ayni Digital
        </Link>

        {/* Botón móvil (solo se ve en pantallas pequeñas) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-secundario focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Menú de enlaces */}
        <div
          className={`
            ${isOpen ? "block" : "hidden"} 
            md:flex md:items-center md:space-x-6
            w-full md:w-auto
            bg-principal md:bg-transparent
            absolute top-full left-0 md:static
            text-center md:text-left
          `}
        >
          <NavbarTo
            to="/"
            icon={FaHome}
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.home")}
          </NavbarTo>
          
          <NavbarTo
            to="/contacto"
            icon={FaAddressBook}
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.contact")}
          </NavbarTo>
          <Button 
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            icon={FaGlobe}
          >
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
    </nav>
  );
}
