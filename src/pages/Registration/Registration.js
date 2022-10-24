import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Registration(){
    return <Registro>
                 <Formulario>
                <input type="email" placeholder="email" required/>
                <input type="senha" placeholder="senha" required/>
                <input type="nome" placeholder="nome" required/>
                <input type="foto" placeholder="foto" required/>
                <button type="enviar">Cadastrar</button>
            </Formulario>
            <Link to="/">
                <h3>Já tem uma conta? Faça login!</h3>
            </Link>
                
            </Registro>
}

const Registro = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 

   
`
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 40px;


    input {
        width: 303px;
        heigth: 45px;
        outline: none;
        border: 1px solid gray;
        border-radius: 5px;
        font-size 20px;
        padding-left: 11px;
        margin-bottom: 6px;
    }

    input::placeholder {
        color: gray;
    }

    button {
        width: 303px;
        heigth: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
    }
`


