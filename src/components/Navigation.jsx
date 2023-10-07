import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favorite"> Favoritos </Link>
    </nav>
  );
};
export default Navigation;
