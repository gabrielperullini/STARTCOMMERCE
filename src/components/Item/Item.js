import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//TRAER CONTEXTO
import { useCartContext } from "../CartContext/CartContext.";

function Item(props) {
  const { deletedToCart } = useCartContext();

  if (props.cantidad === 0) {
    return (
      <>
        <div>
          <Card style={{ width: "18rem" }}>
            <Link className="Link" to={`/Detalle/${props.id}`}>
              <Card.Img variant="top" src={props.imagen} />
            </Link>
            <Card.Body>
              <Card.Title>{props.tit}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Text>Precio: ${props.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Link className="Link" to={`/Detalle/${props.id}`}>
              <Card.Img variant="top" src={props.imagen} />
            </Link>
            <Card.Body>
              <Card.Title>{props.tit}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                Precio: ${props.price} Compra: {props.cant}
              </Card.Text>
              <Button
                variant="danger"
                onClick={() => deletedToCart(props.id)}
                type="submit"
              >
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Item;
//<Card.Text>{props.desc}</Card.Text>
//<ItemCount cantidad={props.cant} />
