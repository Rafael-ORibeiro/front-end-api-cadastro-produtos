import React  from "react";
import './index.css';


export default function Button(props){

    return(
        <button className = "botao" onClick={props.onClick} style={{backgroundColor:props.backgroundColor, color:props.color}}>
            {props.texto}
        </button>
    )
}
