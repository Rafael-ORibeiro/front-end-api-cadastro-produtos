import React from 'react';
import './index.css'

export default function Input(props){
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input className="input" 
            id={props.id} 
            type={props.type}
            value={props.value} 
            placeholder = {props.placeholder}
            min={props.min}
            onChange={props.onChange}></input>
        </div>
    )
}