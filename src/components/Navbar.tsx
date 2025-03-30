import { Link } from "react-router-dom";
import logo from "../assets/logoMaria.svg";

const Navbar = () => {
  return (
    <nav className="bg-violet-300 fixed top-0 w-screen">
      <div className="flex text-gray-700">
        <div className="">
          <Link to="/about" className="hover:text-black">Über mich</Link>
          <Link to="/projects" className="hover:text-black">Projekte</Link>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo Maria" className="h-10 md:h-12" />
        </Link>
        <div className="">
          <Link to="/contact" className="hover:text-black">Kontakt</Link>
          <Link to="/" className="hover:text-black">Startseite</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
