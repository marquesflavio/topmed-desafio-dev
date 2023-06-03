import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import TesteRequisitosTec from "./components/TesteRequisitosTec/TesteRequisitosTec";
import EsqueceuSenha from "./components/EsqueceuSenha/EsqueceuSenha";
import EmailEnviado from "./components/EmailEnviado/EmailEnviado";
import RedefinirSenha from "./components/RedefinirSenha/RedefinirSenha";
import NovaSenha from "./components/NovaSenha/NovaSenha";
import Logado from "./components/Logado/Logado";
import { useEffect } from "react";

function ScrollToTop() {
    const { pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }, [pathname]);
    return null;
}

function AppRoutes() {
    return(
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/teste" element={<TesteRequisitosTec/>}></Route>
                <Route path="/esqueceusenha" element={<EsqueceuSenha/> }></Route>
                <Route path="/emailenviado" element={<EmailEnviado/> }></Route>
                <Route path="/redefinirsenha" element={<RedefinirSenha/> }></Route>
                <Route path="/novasenha" element={<NovaSenha/>}></Route>
                <Route path="/logado" element={<Logado/>}></Route>
            </Routes>
        </HashRouter>

    )
}

export default AppRoutes;