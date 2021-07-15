import React from "react";
import Item from "../Item/Item";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemList(props) {
  return (
    <>
      {props.objeto.map((item) => (
        <div className="col" key={item.id}>
          <Item
            imagen={item.imagen}
            tit={item.title}
            desc={item.descripcion}
            cant={item.cantidad}
            cantidad={0}
            id={item.id}
            price={item.price}
          />
        </div>
      ))}
    </>
  );
}

export default ItemList;
