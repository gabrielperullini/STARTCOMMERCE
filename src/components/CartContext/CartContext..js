
import React, {createContext, useState, useEffect } from "react";

//COMPONENTES


//DATOS
import { itemsData } from "../ItemData/ItemData";





//creando el contexto
export const CartContext = createContext();


// PROVIDER
export const CartProvider = (props) => {

    const [items, setItems] = useState({itemsData});

    console.log("CONTEXTO ITEMS",items)
  
  
  

  // RETORNO DE CONTEXT
  return (
    <>
      <CartContext.Provider value={[items, setItems]}>{props.children}</CartContext.Provider>
    </>
  );
};
