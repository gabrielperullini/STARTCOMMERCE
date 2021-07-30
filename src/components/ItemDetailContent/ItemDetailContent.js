import React, { useState, useEffect } from "react";

//COMPONENTES
import ItemDetail from "../ItemDetail/ItemDetail";

//DATOS
import { itemsData } from "../ItemData/ItemData";
import { db } from "../firebase";

function ItemDetailContent(props) {
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

  let objeto;

  objeto = items.filter((item) => item.id === props.identificador);
  return (
    <>
      {objeto.map((item) => (
        <div className="col" key={item.id}>
          <ItemDetail
            imagen={item.imagen}
            tit={item.title}
            desc={item.descripcion}
            cant={item.cantidad}
            id={item.id}
            price={item.price}
          />
        </div>
      ))}
    </>
  );
}

export default ItemDetailContent;
