import React, { useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemCount(props) {
  const [numero, setNumero] = useState(props.cantidad);
  const [cant, setCant] = useState(0);

  //PARTE DEL HOOK
  const handleIncrement = () => {
    if (numero > 0) {
      setNumero(numero - 1);
      setCant(cant + 1);
    }
  };
  const handleDecrement = () => {
    if (cant > 0) {
      setNumero(numero + 1);
      setCant(cant - 1);
    }
  };

  console.log(props.imagen);

  return (
    <Card className="App">
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            STOCK: {numero} COMPRA: {cant}
          </ListGroupItem>
        </ListGroup>
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <CartWidget />
            </div>
            <div class="col">
              <Button onClick={handleIncrement} variant="outline-success">
                +
              </Button>
            </div>
            <div class="col">
              <Button onClick={handleDecrement} variant="outline-primary">
                -
              </Button>
            </div>
          </div>
        </div>
        <Button variant="primary">AGREGAR</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
