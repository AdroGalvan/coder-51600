import { CiShoppingCart } from "react-icons/ci";
import Logo from "../Logo/Logo";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="container-navbar">
        <Logo/>
        <ul className="container-list">
            <li> Todas </li>
            <li> Urbanas</li>
            <li> Deportivas </li>
        </ul>
        <CiShoppingCart className="shopping-cart"/>
    </div>
  );
};

export default Navbar

