import React from "react";
import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Item(props) {
console.log("compra",props.cantidad)

if(props.cantidad === 0){

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
            <Card.Text>Precio: {props.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
else
{
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
            <Card.Text>Precio: {props.price} Compra:{props.cant}</Card.Text>
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
