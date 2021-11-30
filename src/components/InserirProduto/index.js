import React, { Fragment, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import './index.css'
import axios from "axios";



export default function InserirProduto(props){

    let [produto, setProduto] = useState('')
    let [quantidade, setQuantidade] = useState('')


    const urlIns =  "https://crud-produtos-unifaa.herokuapp.com/produtos"

    

    let postar = async() =>{

        console.log(quantidade)

        if(produto !== '' && quantidade !== ''){
            let res = await axios.post(urlIns,[{'produto':produto, 'quantidade':quantidade}])
            props.callback()
            alert(res.data['message'])
            } else {
                alert(`Insira dados em todos os campos.`)
        }

    }






    return(
        <Fragment>
            <div className="header">
                <h2>Cadastro de Produtos</h2>
            </div>
            <div className ="inserir">
                <Input className="input" placeholder="Digite o nome do produto..." onChange = {(value) => setProduto(value.target.value)}/>
                <Input  className="input" placeholder="Digite a quantidade..." onChange = {(value) => setQuantidade(value.target.value)} type = "number" min= "0"/>
                <Button className="button" color ="white" backgroundColor ="#4169E1" texto = "Inserir" onClick = {() => postar()} />
            </div>
        </Fragment>
    )

}