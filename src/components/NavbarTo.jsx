import { Link } from "react-router-dom";

export default function NavbarTo({ 
  to, 
  icon: Icon,
  children,
  onClick,
  className = ""
}) {
  return (
    <Link
      to={to}
      className={`block md:inline-flex w-full md:w-auto px-4 py-2 text-white hover:text-secundario transition items-center ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="text-base" />}
      <span className="font-semibold ml-2">{children}</span>
    </Link>
  );
}
