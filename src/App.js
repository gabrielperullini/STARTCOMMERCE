import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//DATOS
import { itemsData } from "./components/ItemData/ItemData";

function App() {

  const [items, setItems] = useState([]);

  //USE EFFECT
  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      console.log(items)
    }, 2000);
  });


  



  return (
    <>
      <NavBar />
      <h2>Las ofertas de la semana</h2>
        <div className="container">
        
          <div className="row align-items-start">            
            <div className="row" >              
            {items.map(item =>(        
              <div className="col" key={item.id}>
               <ItemListContainer                              
                title={item.title}
                subtitle={item.descripcion}
                cantidad={item.cantidad}
                imagen={item.imagen}                
              />
              </div>
              ))}
            </div>            
          </div>
          
        </div>
        
      ))
    </>
  );
}

export default App;
