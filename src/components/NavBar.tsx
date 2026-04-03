import Button from "./Button";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="from-primary to-primary-complement flex h-15 gap-2 border bg-linear-to-l sm:h-20 md:h-25">
      <Logo />
      <div className="flex w-dvw justify-evenly">
        <Button to="/about" style="navbar">
          Curriculum
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
