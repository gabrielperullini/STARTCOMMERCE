import React from "react";
import Item from "../../components/Item/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../components/CartContext/CartContext.";
import { Link } from "react-router-dom";

function Cart(props) {
  const { cart, clearCart } = useCartContext();

  let tot = 0;
  let pagoProd = 0;
  const totalPagar = () => {
    cart.map((item) => {
      pagoProd = pagoProd + item.cantidad * item.precio;
    });
    tot = tot + pagoProd;
    return tot;
  };
  let pago = totalPagar();

  if (pago === 0) {
    return (
      <>
        <h1>ELIMINAR CARRITO: </h1>
        <div>
          <Link className="Link" to="/">
            <Button variant="danger" onClick={clearCart}>
              Eliminar Carrito
            </Button>
          </Link>
        </div>
      </>
    );
  }

  {
    return (
      <>
        <h2>Su carrito tiene: {cart.length} elementos </h2>
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
                <div>
                  <h1>Total a Pagar: ${pago}</h1>
                  <Link className="Link" to="/CheckOut">
                    <Button variant="primary">Terminar Compra</Button>
                  </Link>
                  <Link className="Link" to="/">
                    <Button variant="danger" onClick={clearCart}>
                      Eliminar Carrito
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
