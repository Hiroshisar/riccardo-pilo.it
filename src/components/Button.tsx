import { Link } from "react-router-dom";

function Button({
  children,
  onClick,
  to,
  type,
  styled = "",
  isDisabled
}: {
  children: string;
  onClick?: () => void;
  to?: string;
  type: string;
  styled?: string;
  isDisabled?: boolean;
}) {
  const baseStyle = `flex items-center justify-center rounded-md px-2 sm:px-1.5 text-center transition duration-500 hover:scale-105 ${styled}`;
  let className = "";

  switch (type) {
    case "primary":
      className =
        "h-12 bg-primary hover:bg-primary-complement hover:shadow-primary shadow-sm shadow-primary-complement text-smallBtn sm:text-primaryBtn";
      break;
    case "secondary":
      className =
        "h-10 bg-secondary hover:bg-secondary-complement shadow-sm shadow-secondary-complement hover:shadow-secondary text-smallBtn sm:text-secondaryBtn";
      break;
    case "navbar":
      className =
        "flex h-8 px-3 sm:px-5 sm:h-10 md:h-12 md:px-6 text-smallText sm:text-mediumText md:text-secondaryBtn text-navbar-text hover:text-white bg-trasparent hover:bg-primary hover:shadow-lg my-auto";
      break;
    default:
      className = "";
      break;
  }

  return (
    <>
      {onClick && (
        <button
          onClick={onClick}
          className={`${baseStyle} ${className}`}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
      {to && (
        <Link to={to} className={`${baseStyle} ${className}`}>
          {children}
        </Link>
      )}
    </>
  );
}

export default Button;
