import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Link className="Link" to={`/Detalle/${props.id}`}>
            <Card.Img variant="top" src={props.imagen} />
          </Link>
          <Card.Body>
            <Card.Title>{props.tit}</Card.Title>
            <Card.Text>{props.desc}</Card.Text>
            <Card.Text>Precio: {props.price}</Card.Text>
          </Card.Body>
          <Card.Body>
            <ItemCount cantidad={props.cant} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Item;
