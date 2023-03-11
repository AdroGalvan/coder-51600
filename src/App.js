import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {

  const onAdd = (cantidad) => {
    console.log(`se agregaron al carrito ${cantidad} elementos`)
  }
  
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:name" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          

          <Route path="*" element={<h1> error 404: Not found</h1> } />
        
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
 

// ``