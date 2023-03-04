import "./CartWidget.css"
import { CiShoppingCart } from "react-icons/ci";
import {Link} from "react-router-dom"


const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <a href=""> <CiShoppingCart className="shopping-cart"/></a> 
      </Link>
    </div>
  );
};

export default CartWidget;


