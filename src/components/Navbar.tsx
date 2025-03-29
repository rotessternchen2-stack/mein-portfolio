import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow">
    <div className="flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">Über mich</Link>
      <Link to="/projects" className="hover:underline">Projekte</Link>
      <Link to="/contact" className="hover:underline">Kontakt</Link>
    </div>
  </nav>
  );

};

export default Navbar;
