import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {items} ) => {
  return (
    <div style={ {
        display: "flex",
        minHeight: "78vh",
        justifyContent: "space-evenly",
        alignItems: "center",
    } } >
        
        {
            items.map( (element)=>{
                return <Item key={element.id} element={element} />
            } )
        }

    </div>
  )
}

export default ItemList