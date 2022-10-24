import styled from "styled-components"
import { Link } from "react-router-dom"
//import logo from "./components/img/logo.png"


export default function Login(){
    return (
        <Home>
            <Formulario>
                <input type="email" placeholder="email" required/>
                <input type="senha" placeholder="senha" required/>
                <button type="enviar">Entrar</button>
            </Formulario>
            <Link to="/cadastro">
                <h3>Não tem uma conta? Cadastre-se!</h3>
            </Link>
            
        </Home>
    )
}

const Home = styled.div`
    display: flex;
    flex-direction: column;
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

