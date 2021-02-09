import React from 'react'
import './style.css'

const Recebe_mensagem = (props) => {

    return (
        <div>
            <center>
                <h6>{props.nome} diz:</h6>
                <h5>{props.mensagem}</h5>
                
            </center>
            <br/>
        </div>
    )
}

export default Recebe_mensagem