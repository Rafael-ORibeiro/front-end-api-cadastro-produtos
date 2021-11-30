import React,{useState} from "react";
import Button from "../Button";
import './index.css';
import ModalEditar from "../ModalEditar";
import '../../components/ModalEditar/index.css';
import axios from "axios";

export default function TelaCadastro(props){

    const [visible, setVisible] = useState(false)

    let produto = props.nome
    let quantidade = props.quantidade


const urlDel = "https://crud-produtos-unifaa.herokuapp.com/produtos/delete"

    let deletar = async() =>{
        let res = await axios.delete(urlDel,{data:[{'produto':produto}]})
        props.callback()
        alert(res.data['message'])


}


    function confirmar(){
        let resultado = window.confirm(`Você deseja deletar \nproduto: ${produto}\nquantidade: ${quantidade}?`)
        if(resultado === true){
            deletar()
        }else{
        
        }


    }


    return (
        
            <div className='ul'>
                <li className='li'>
                    <div className= "locProduto">
                        <p>Produto: {produto}</p>
                        <p>Quantidade: {quantidade}</p>
                    </div>
                    <div  className= "locBotao">
                        <div><Button backgroundColor = "#3CB371" color = "white" texto="Editar" onClick = {() => setVisible(true)}></Button></div>
                        <div><Button backgroundColor = "#DC143C" color = "white" texto="Excluir" onClick={() =>confirmar()} ></Button></div>
                    </div>
                    {visible? (<ModalEditar callback = {() => props.callback()} fechar = {() => setVisible(false)} nome={produto} quantProduto={quantidade}idP="Produto"idQ="Quantidade"/>): null}
                </li>
            </div>


    );
}