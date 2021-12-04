
import React,{useState} from "react";
import Button from "../Button";
import Input from "../Input";
import './index.css'
import axios from "axios";





export default function ModalEditar(props) {


  const [nomeProduto, setNomeProduto] = useState(props.nome);
  const [valorQuantidade, setValorQuantidade] = useState(props.quantProduto);
  const nomeAntigo = props.nome
  const quantidadeAntiga = props.quantProduto

  const urlEdi = `https://crud-produtos-unifaa.herokuapp.com/produtos/update`

   let editar = async() =>{
       let res = await axios.put(urlEdi,[{ "antigoNome":nomeAntigo,"novoNome":nomeProduto,"novaQuantidade": valorQuantidade,"antigaQuantidade":quantidadeAntiga}])
       alert(res.data['message'])
       props.fechar()
       props.callback()
   }

   

  return(
    <div className='modal'>
      <h3 className = "title">Editar produto</h3>
      <div className = "locInput">
        <Input label={props.idP} id={props.idP} value = {nomeProduto}  onChange = {(value) => setNomeProduto(value.target.value)} visibility={props.visibility}></Input>
        
      </div>
      <div className = "locInput">
      <Input label={props.idQ} id={props.idQ} value = {valorQuantidade} type = "number" min= "0" onChange = {(value) =>setValorQuantidade(value.target.value)}></Input>
      </div>
      <div className="locBotoes">
        <Button texto ='Concluir'color="white" backgroundColor='green'onClick={() => editar()}></Button>
        <Button texto = 'Cancelar'color="white" backgroundColor='red'onClick={props.fechar}></Button>
      </div>
    </div>
  )

}
   