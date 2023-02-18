import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ProductCard title="Producto1" price={200} />
      <ProductCard title="Producto2" price={500} />
      <ProductCard title="Producto3" price={350} />
    </div>
  );
}

export default App;
