import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <Link
      to={"/"}
      className="bg-trasparent my-auto ml-5 size-10 rounded-full bg-contain bg-center bg-no-repeat sm:ml-7 sm:size-15 md:ml-10 md:size-20"
      style={{ backgroundImage: `url(${logo})` }}
    />
  );
}

export default Logo;
