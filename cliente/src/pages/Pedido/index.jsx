import { useState, useEffect } from 'react';
import {Envia_mensagem, Recebe_mensagem} from "../../components"


import './style.css'

const Pedido = () => {
 
  const url = 'http://localhost:3010/mensagem'

  const [texto, setTexto] = useState(null)
  const fetchApi = async() =>{
      const response = await fetch(url)
      const respoJSON = await response.json()
      setTexto(respoJSON)
  }

  useEffect(()=>{
      fetchApi()
  }, [])


    return (
   <div>
     <Envia_mensagem/>
     {texto && texto.map(item=>
   <Recebe_mensagem key={item.id} nome={item.nome} mensagem={item.mensagem} />)}
   </div>
    )
}

export default Pedido;
