import { Link } from "react-router-dom";

function Button({
  children,
  onClick,
  to,
  style,
  isDisabled
}: {
  children: string;
  onClick?: () => void;
  to?: string;
  style?: string;
  isDisabled?: boolean;
}) {
  const baseStyle =
    "rounded-sm px-2 py-0.5 sm:px-1.5 sm:py-1 text-center align-middle transition duration-500 hover:scale-105";
  let className = "";

  switch (style) {
    case "primary":
      className =
        "h-8 bg-primary hover:bg-primary-complement hover:shadow-primary shadow-sm shadow-primary-complement text-smallBtn sm:text-primaryBtn";
      break;
    case "secondary":
      className =
        "h-6 bg-secondary hover:bg-secondary-complement shadow-sm shadow-secondary-complement hover:shadow-secondary text-smallBtn sm:text-secondaryBtn";
      break;
    case "navbar":
      className =
        "flex h-6 px-2 py-1.5 sm:px-3 sm:py-1 text-smallBtn sm:text-secondaryBtn text-navbar-text hover:text-white bg-trasparent hover:bg-primary hover:shadow-lg my-auto";
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
