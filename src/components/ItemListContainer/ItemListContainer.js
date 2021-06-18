import React from "react";
import img from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";


function ItemListContainer(props) {
return(   
<>
<img  src={img} alt='logo empresa' width='5%'/>
<h1>{props.title}</h1>
<h2>{props.subtitle}</h2>
</>
)   
};

export default ItemListContainer;