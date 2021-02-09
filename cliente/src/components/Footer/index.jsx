import React from 'react'
import pagamento from'../img/pagamento.png';
import './style.css'

const Footer = () => {
    return (
        <div>
             <center>  
        <img src={pagamento}   />
        <p >Formas de pagamento</p>
        <p>&copy; Recode Pro</p></center>
        </div>
    )
}

export default Footer
