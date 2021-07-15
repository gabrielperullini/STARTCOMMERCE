import React, { createContext, useState, useContext } from "react";

//COMPONENTES

//creando el contexto
export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

// PROVIDER
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);
  let objeto;

  const deletedToCart = (id) => {
    console.log("context Item", id);
    const copy = [...cart];
    const index = copy.findIndex((x) => x.id === id);
    if (index !== -1) {
      copy.splice(index, 1);
      setCart(copy);
    }
  };

  //var indice = cart.indexOf(id)
  //setCart(cart.splice(indice, 1)); // 1 es la cantidad de elemento a eliminar

  const addToCart = (cantidad, obj) => {
    objeto = cart.find((item) => item.id === obj.id);

    if (objeto == null) {
      console.log("paso el null");
      setCart((prev) => [...prev, { ...obj, cantidad }]);
    } else {
      console.log("no paso el null");

      objeto.cantidad = objeto.cantidad + cantidad;
    }
  };
  // RETORNO DE CONTEXT
  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, clearCart, addToCart, deletedToCart }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};
