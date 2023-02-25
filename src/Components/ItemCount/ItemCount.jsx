import { useState } from "react"

const ItemCount = ( {stock, initial, onAdd} ) => { 

    const [ contador, setContador ] = useState(initial); // [dato/funcion]

    const sumar = () => {
        if (contador < stock) {
            setContador(
                contador + 1
            )
        }
    }

    const restar = () => {
        if (contador > 1){
            setContador(
                contador - 1 
                )
        }
    }


  return (
    <div style={{margin:"20px"}} >
        <h1 style={{color:"red"}}> Contador </h1>
        <h2> {contador} </h2>
        <button onClick={sumar}> Sumar </button>
        <button onClick={restar}> Restar </button>
        <button onClick={ () => onAdd(contador) }> Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount