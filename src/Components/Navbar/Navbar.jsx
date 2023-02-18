import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="container-navbar">
        <Logo/>
        <ul className="container-list">
            <a href=""> Todas </a>
            <a href=""> Urbanas </a>
            <a href=""> Deportivas </a>
        </ul>
        <CartWidget/>
    </div>
  );
};

export default Navbar

