import React, { useState, useEffect } from "react";

//COMPONENTES
import ItemListContainer from "../ItemListContainer/ItemListContainer";

//DATOS
import { itemsData } from "../ItemData/ItemData";

function ItemList() {
  const [items, setItems] = useState([]);

  //USE EFFECT
  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      
    }, 2000);
  });

  return (
    <>
      {items.map((item) => (
        <div className="col" key={item.id}>
          <ItemListContainer
            titulo={item.title}
            descripcion={item.descripcion}
            precio={item.precio}
            cantidad={item.cantidad}
            imagen={item.imagen}
          />
        </div>
      ))}
    </>
  );
}

export default ItemList;
