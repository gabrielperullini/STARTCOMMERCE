import React, { useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../CartContext/CartContext.";

function ItemCount(props) {
  const [numero, setNumero] = useState(props.cantidad);
  const [cantidad, setCantidad] = useState(0);
  const { cart } = useCartContext();

  //PARTE DEL HOOK
  const handleIncrement = () => {
    if (numero > 0) {
      setNumero(numero - 1);
      setCantidad(cantidad + 1);
    }
  };

  const handleDecrement = () => {
    if (cantidad > 0) {
      setNumero(numero + 1);
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Card className="App">
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            STOCK: {numero} COMPRA: {cantidad}
          </ListGroupItem>
        </ListGroup>
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <CartWidget />
            </div>
            <div className="col">
              <Button onClick={handleIncrement} variant="outline-success">
                +
              </Button>
            </div>
            <div className="col">
              <Button onClick={handleDecrement} variant="outline-primary">
                -
              </Button>
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          onClick={() => props.paramOnAdd(cantidad, props.id)}
          type="submit"
        >
          AGREGAR
        </Button>

        <Link className="Link" to="/Cart">
          <button disabled={cart.length === 0 ? true : false}>
            TERMINAR COMPRA
          </button>
        </Link>
        <button
          disabled={cart.length === 0 ? true : false}
          onClick={() => props.paramClearCart()}
        >
          Eliminar carrito
        </button>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
