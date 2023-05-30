import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TesteRequisitosTec from "./components/TesteRequisitosTec/TesteRequisitosTec";
import EsqueceuSenha from "./components/EsqueceuSenha/EsqueceuSenha";
import EmailEnviado from "./components/EmailEnviado/EmailEnviado";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/teste" element={<TesteRequisitosTec/>}></Route>
                <Route path="/esqueceusenha" element={<EsqueceuSenha/> }></Route>
                <Route path="/emailenviado" element={<EmailEnviado/> }></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;