import { Link } from "react-router-dom";
import logo from "../assets/img/logo-removebg-preview.png";
import { FaAddressBook, FaHome, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";


export default function Navbar() {

  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <nav className="bg-principal shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-secundario flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          Ayni Digital
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-white hover:text-secundario flex items-center gap-2">
            {t("navbar.home")}
            <FaHome className="text-xl" />
          </Link>
          <Link to="/contacto" className="text-white hover:text-secundario flex items-center gap-2 align-middle">
            {t("navbar.contact")}
            <FaAddressBook className="text-xl" />
          </Link>
          <button onClick={toggleLanguage} className="text-white bg-secundario px-3 py-1 rounded hover:bg-secundario flex items-center gap-2">
            <FaGlobe className="text-xl" />
            {language.toUpperCase()}
          </button>
        </div>
        
      </div>
    </nav>
  );
}

