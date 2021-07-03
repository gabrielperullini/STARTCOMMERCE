import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetail(props) {
  console.log("props", props.imagen);
  return (
    <>
      <div key={props.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.imagen} />
          <Card.Body>
            <Card.Title>{props.tit}</Card.Title>
            <Card.Subtitle>{props.desc}</Card.Subtitle>
          </Card.Body>
          <Card.Body>
            <Card.Text>Precio:{props.price}</Card.Text>
            <ItemCount cantidad={props.cant} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ItemDetail;
