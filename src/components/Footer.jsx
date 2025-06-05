import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} Ayni Digital ·
        <Link to="/contacto" className="ml-2 hover:text-white">
            {t("footer.contact")}
        </Link>
        </div>
    </footer>
    );
    }
