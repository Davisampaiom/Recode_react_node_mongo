import { useState, useEffect, lazy , Suspense } from 'react';
import { Recebe_mensagem} from "../../components"


import './style.css'

const Envia_mensagem = lazy (()=> import ('../../components/Envia_mensagem'))


const Contato = () => {
 
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
     <Suspense fallback={<p>Carregando...</p>}>
     <Envia_mensagem/>
     </Suspense>
     {texto && texto.map(item=>
   <Recebe_mensagem key={item.id} nome={item.nome} mensagem={item.mensagem} />)}
   </div>
    )
}

export default Contato;
