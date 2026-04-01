import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <Link
      to={"/"}
      className="bg-trasparent my-auto ml-5 size-7 rounded-full bg-contain bg-center bg-no-repeat sm:size-10"
      style={{ backgroundImage: `url(${logo})` }}
    />
  );
}

export default Logo;
