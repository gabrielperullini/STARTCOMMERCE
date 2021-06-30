import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemList(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
      </Card.Body>
      <Card.Body>
        <ItemCount cantidad={props.cantidad} />
      </Card.Body>
    </Card>
  );
}

export default ItemList;
