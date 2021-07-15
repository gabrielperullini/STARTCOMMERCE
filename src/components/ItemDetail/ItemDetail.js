import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../CartContext/CartContext.";

function ItemDetail(props) {
  const { cart, addToCart, clearCart } = useCartContext();

  const obj = {
    titulo: props.tit,
    descripcion: props.desc,
    precio: props.price,
    id: props.id,
    imagen: props.imagen,
  };
  const onAdd = (cant, object) => addToCart(cant, obj);

  console.log("cart", cart);

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
            <ItemCount
              cantidad={props.cant}
              id={props.id}
              price={props.price}
              paramOnAdd={onAdd}
              paramClearCart={clearCart}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ItemDetail;
