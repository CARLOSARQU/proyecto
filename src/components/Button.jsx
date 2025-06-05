import { Link } from "react-router-dom";

export default function Button({ 
  children, 
  onClick, 
  to, 
  icon: Icon,
  variant = "primary",
  className = "",
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded transition";
  const variants = {
    primary: "bg-secundario hover:bg-principal text-white",
    secondary: "text-white hover:text-secundario"
  };

  const buttonContent = (
    <>
      {Icon && <Icon className="mr-2 text-base" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {buttonContent}
    </button>
  );
}