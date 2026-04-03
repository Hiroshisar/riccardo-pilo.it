import { useLocation } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function NavBar() {
  const location = useLocation();

  return (
    <div className="from-primary to-primary-complement flex h-15 gap-2 border bg-linear-to-l sm:h-20 md:h-25">
      <Logo />
      <div className="flex w-dvw justify-evenly">
        <Button
          to="/curriculum"
          type="navbar"
          styled={`${location.pathname === "/curriculum" ? "bg-primary-complement shadow-primary scale-105" : ""}`}
        >
          Curriculum
        </Button>

        <Button
          to="/portfolio"
          type="navbar"
          styled={`${location.pathname === "/portfolio" ? "bg-primary-complement shadow-primary scale-105" : ""}`}
        >
          Portfolio
        </Button>

        <Button
          to="/contacts"
          type="navbar"
          styled={`${location.pathname === "/contacts" ? "bg-primary-complement shadow-primary scale-105" : ""}`}
        >
          Contatti
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
