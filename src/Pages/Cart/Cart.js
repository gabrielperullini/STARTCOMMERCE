import React from "react";
import Item from "../../components/Item/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../components/CartContext/CartContext.";

function Cart(props) {
  const { cart } = useCartContext();

  console.log("cantidad items", cart.length);
  let tot = 0;
  let pagoProd = 0;
  const totalPagar = () => {
    cart.map((item) => {
      pagoProd = pagoProd + item.cantidad * item.precio;
    });
    tot = tot + pagoProd;
    return tot;
  };

  return (
    <>
      <h2>Las ofertas de la semana</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            {cart.map((item) => (
              <Item
                imagen={item.imagen}
                tit={item.titulo}
                desc={item.descripcion}
                cant={item.cantidad}
                id={item.id}
                price={item.precio}
              />
            ))}
            <div className="row">
              <h1>Cantidad de Items Seleccionados: {cart.length}</h1>
              <h1>Total a Pagar: ${totalPagar()}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
