import React, { useState, useEffect } from "react";

//COMPONENTES
import ItemList from "../ItemList/ItemList";

//DATOS
import { itemsData } from "../ItemData/ItemData";
import { db } from "../firebase";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const datosfirebase = [];
  const getItemData = () => {
    db.collection("ItemData").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        datosfirebase.push({ id: doc.id, ...doc.data() });
      });
      setItems(datosfirebase);
    });
  };

  //USE EFFECT
  useEffect(() => {
    getItemData();
  }, []);

  let objdato;

  if (props.elements !== "OFERTA") {
    objdato = items.filter((item) => item.tag === props.elements);
  } else {
    objdato = items.filter((item) => item.destacado === true);
  }
  return (
    <>
      <ItemList objeto={objdato} />
    </>
  );
};

export default ItemListContainer;

//<>
//<img  src={img} alt='logo empresa' width='5%'/>
//<h1>{props.title}</h1>
//<h2>{props.subtitle}</h2>
//</>
//</div>
