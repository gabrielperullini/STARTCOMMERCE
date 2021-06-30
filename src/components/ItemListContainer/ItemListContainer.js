import React, { useState, useEffect } from "react";

//COMPONENTES
import ItemList from "../ItemList/ItemList";

//DATOS
import { itemsData } from "../ItemData/ItemData";

function ItemListContainer(props) {
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
          <ItemList
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

export default ItemListContainer;

//<>
//<img  src={img} alt='logo empresa' width='5%'/>
//<h1>{props.title}</h1>
//<h2>{props.subtitle}</h2>
//</>
//</div>
