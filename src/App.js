import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";


function App() {

  const onAdd = (cantidad) => {
    console.log(`se agregaron al carrito ${cantidad} elementos`)
  }
  

  return (
    <div>
      <Navbar />
      <ItemListContainer />
      {/* <ProductCard title="Producto1" price={200} />
      <ProductCard title="Producto2" price={500} />
      <ProductCard title="Producto3" price={350} /> */}
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
      <Footer/>
    </div>
  );
}

export default App;
 
