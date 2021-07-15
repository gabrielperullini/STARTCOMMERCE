import React from "react";
import Item from "../../components/Item/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../components/CartContext/CartContext.";

function Cart(props) {
  const { cart } = useCartContext();
  return (
    <>
      {cart.map((item) => (          
        <div className="col" key={item.id}>
          <Item
            imagen={item.imagen}
            tit={item.titulo}
            desc={item.descripcion}
            cant={item.cantidad}
            id={item.id}
            price={item.precio}            
          />
        </div>
      ))}
    </>
  );
}

export default Cart;
