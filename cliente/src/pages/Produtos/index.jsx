import { useState, useEffect, lazy, Suspense } from 'react';
import { Produto } from '../../components';

import './style.css';


 const Categoria = lazy(() => import('../../components/Categoria'))


const Produtos = () => {
   
    const url= 'http://localhost:3010/'

    const [produtos, setProdutos] =useState(null)
    const fetchApi = async() =>{
        const response = await fetch(url)
        const responsJSON = await response.json()
        setProdutos(responsJSON)
    }
        useEffect(()=>{
        fetchApi()
    }, [])
    
    return (
        <div className="pageProdutos">
         <div className="grid1">
         <Suspense fallback={<p>Carregando...</p>}>
         <Categoria/>
         </Suspense>

         </div>
         <div className="grid2">
         {produtos && produtos.map(item => <Produto key={item.id} imagem={item.imagem} descricao={item.descricao}
       preco={item.preco} preco_venda={item.preco_venda} /> )}
       
         </div>
       </div>
    )
}

export default Produtos;
