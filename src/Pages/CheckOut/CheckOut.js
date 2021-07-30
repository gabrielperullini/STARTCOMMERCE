import React, { useState } from "react";
import Formulario from "../../components/Formulario/Formulario";
import { useCartContext } from "../../components/CartContext/CartContext.";
import { db } from "../../components/firebase";
import moment from "moment";

const CheckOut = (props) => {
  const { cart, clearCart, addToCart } = useCartContext();
  const [cod, setCod] = useState("");
  const addProduct = async (objeto) => {
    await restarCantidadDb(objeto);
  };

  const restarCantidadDb = (objeto) => {
    const datos = [];
    cart.map((item) => {
      let objDb = {};
      db.collection("ItemData")
        .doc(item.id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            objDb = doc.data();
            objDb.cantidad = objDb.cantidad - item.cantidad;
            db.collection("ItemData").doc(item.id).set(objDb);
          }
        });
    });
    let orden = {
      productos: { cart },
      usuario: { objeto },
      fecha: moment().format("DD-MM-YYYY hh:mm:ss"),
      total: pago,
    };
    db.collection("ORDERS")
      .add(orden)
      .then(({ id }) => setCod(id));
  };

  let tot = 0;
  let pagoProd = 0;
  const totalPagar = () => {
    cart.map((item) => {
      pagoProd = pagoProd + item.cantidad * item.precio;
    });
    tot = tot + pagoProd;
    return tot;
  };
  let pago = totalPagar();

  return (
    <div>
      <Formulario addProduct={addProduct} codigo={cod} />
    </div>
  );
};

export default CheckOut;
