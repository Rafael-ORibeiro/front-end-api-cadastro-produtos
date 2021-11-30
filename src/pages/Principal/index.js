import React,{useState,Fragment,useEffect} from 'react';

import axios from 'axios';
import ItensLista from '../../components/ItensLista';
import InserirProduto from '../../components/InserirProduto';
import './index.css'




export default function Principal (){

    const [listaProdutos,setListaProdutos] = useState(null)

    const url = `https://crud-produtos-unifaa.herokuapp.com/produtos`

   let getProdutos = async() =>{
       let res = await axios.get(url)
       setListaProdutos(res.data.result)
       console.log(res.data.result)
   }

   useEffect(() =>{
       getProdutos()
   },[])
   
   if(listaProdutos == null){

       return(
           <Fragment>
               <p>Recebendo informações</p>
           </Fragment>
       )

   } else{

    return(
        <Fragment>
            <InserirProduto callback = {() => getProdutos()} />
            <div className="uli">
                {listaProdutos.map((item) => <ItensLista fechar = {() =>{}} callback = {() => getProdutos()} nome={item['produto']} quantidade = {item['quantidade']}/>)}
            </div>
        </Fragment>
    )

   }

}