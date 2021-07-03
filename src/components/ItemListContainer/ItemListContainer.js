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

  let objdato;

  if (props.elements === "oferta") {
    objdato = items.filter((item) => item.destacado === true);
  } else {
    if (props.elements === "CUBIERTAS") {
      objdato = items.filter((item) => item.tag === "CUBIERTA");
    }
  }

  return (
    <>
      <ItemList objeto={objdato} />
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
