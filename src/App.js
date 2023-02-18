import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={'Hola! Bienvenid@ a PROMA'}/>
      <ProductCard title="Producto1" price={200} />
      <ProductCard title="Producto2" price={500} />
      <ProductCard title="Producto3" price={350} />
      <Footer/>
    </div>
  );
}

export default App;
