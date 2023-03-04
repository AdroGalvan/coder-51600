import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="containerNavbar" >
      <Link to="/">
        <Logo/>
      </Link>
        <ul className="containerList" >
            <Link to="/"> Todas </Link>
            <Link to="/category/urbanas"> Urbanas </Link>
            <Link to="/category/deportivas"> Deportivas </Link>
        </ul>
        <CartWidget/>
    </div>
  );
};

export default Navbar;
