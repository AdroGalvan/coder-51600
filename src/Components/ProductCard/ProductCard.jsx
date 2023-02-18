import "./ProductCard.css"

const ProductCard = ( {title, price, isRed} ) => {

  return (
    <div className="products">
        <h1>{title}</h1>
        <h2>{price}</h2>
    </div>
  )
}

export default ProductCard