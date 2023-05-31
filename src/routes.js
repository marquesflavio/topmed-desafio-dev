import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import TesteRequisitosTec from "./components/TesteRequisitosTec/TesteRequisitosTec";
import EsqueceuSenha from "./components/EsqueceuSenha/EsqueceuSenha";
import EmailEnviado from "./components/EmailEnviado/EmailEnviado";
import RedefinirSenha from "./components/RedefinirSenha/RedefinirSenha";
import NovaSenha from "./components/NovaSenha/NovaSenha";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/teste" element={<TesteRequisitosTec/>}></Route>
                <Route path="/esqueceusenha" element={<EsqueceuSenha/> }></Route>
                <Route path="/emailenviado" element={<EmailEnviado/> }></Route>
                <Route path="/redefinirsenha" element={<RedefinirSenha/> }></Route>
                <Route path="/novasenha" element={<NovaSenha/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;