import Button from "./Button";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="from-primary to-primary-complement flex h-10 gap-2 border bg-linear-to-l sm:h-15">
      <Logo />
      <div className="flex w-dvw justify-evenly">
        <Button to="/about" style="navbar">
          Chi sono
        </Button>
        <Button to="/portfolio" style="navbar">
          Portfolio
        </Button>
        <Button to="/contacts" style="navbar">
          Contatti
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
