import React, { useState, useEffect } from "react";

//COMPONENTES
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";

//DATOS
import { itemsData } from "../ItemData/ItemData";

function ItemDetailContent(props) {
  const [items, setItems] = useState([]);

  //USE EFFECT
  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
    }, 2000);
  });

  let obj = items.filter((item) => item.id === props.identificador);

  return (
    <>
      <div className="col" key={obj.id}>
        <ItemList objeto={obj} />
      </div>
    </>
  );
}

export default ItemDetailContent;
