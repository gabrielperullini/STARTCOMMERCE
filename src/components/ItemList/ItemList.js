import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemList(props) {  
  return (
    <>
      {props.objeto.map((item) => (
        <div className="col" key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.imagen} />
            <Card.Body>
              <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>{item.descripcion}</Card.Text>
            </Card.Body>
            <Card.Body>
              <ItemCount cantidad={item.cantidad} />
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default ItemList;
