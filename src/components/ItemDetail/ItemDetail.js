import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetail(props) {
  console.log("OBJ", props.objeto);
  return (
    <>
      {props.objeto.map((item) => (
        <div key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.ima} />
            <Card.Body>
              <Card.Title>{item.tit}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
            <Card.Body>
              <ItemCount cantidad={item.cant} />
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default ItemDetail;
