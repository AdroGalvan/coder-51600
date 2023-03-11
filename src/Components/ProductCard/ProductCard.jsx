import "./ProductCard.css"

const ProductCard = ( {title, price, isRed} ) => {

  const saludar = () => {
    console.log("hola")
  }

  const saludar2 = (nombre) => {
    console.log( "hola " + nombre )
  }

  return (
    <div className="products">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <button onClick={ ()=> saludar2("adriel") } > Saludar a </button>
        <button onClick={saludar } > Saludar </button>
    </div>
  )
}

export default ProductCard