import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyles"
import Registration from "./pages/Registration/Registration"
import Login from "./pages/Login/Login"

//import Today from "./pages/Today/Today"
//import Habits from "./pages/Habits"
import Teste from "./Teste"



function App(){

    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
            <Route path="/"  element={<Login/>} />
            <Route path="/cadastro" element={<Registration/>}  />
            <Route path="/"   />
            </Routes>
        </BrowserRouter>

    )





}


export default App