import './Home.css'
import LogoTopMed from "../../img/topmed_logo1.png"
import LogoNext from "../../img/nextplus-logo1.png"
import imgsvg1 from "../../img/Group 1.svg"
import camera from "../../img/camera.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {
    
    const [valorUsuario, setValorUsuario] = useState('');
    const [valorSenha, setValorSenha] = useState('');

    const handleChange = (e) =>{
        setValorUsuario(e.target.value)
    }
    
    const handleChangeSenha = (e) => {
        setValorSenha(e.target.value)
    }
    
    // fetch ("http://localhost:4000/login-usuario",{
    //     method: "POST",
    //     headers: {
    //         "content-type":"application/json"
    //     },
    //     body:JSON.stringify({email_usuario: "flavio@teste.com", senha_usuario:"1234"})
    // });

    // async function getUser(usuarios){
    //     let response = await fetch(`http://localhost:4000/login-usuario/${usuarios}`);
    //     let userdata = await response.json();
    //     return userdata;
    // }

    // getUser()

    return(
        <div className="App">
            <div className='box-bemvindo'>
                <h1>Bem Vindo,</h1>
                <p className='texto-cabecalho'>Faça o login para continuar.</p>

                <div className='campo-login'>
                <input type='text' value={valorUsuario} onChange={handleChange} placeholder='Usuário' className='usuario'></input>
                <input type='password' value={valorSenha} onChange={handleChangeSenha}placeholder='Senha' className='senha'></input>
                <button>Entrar</button>
                <Link to="/esqueceusenha"><p>Esqueceu sua senha?</p></Link>
                </div>


                <div className='campo-imagem'>
                <img src={LogoTopMed} alt='Logo da TopMed' title="Logo da TopMed" className="logo-topmed"/>
                <img src={LogoNext} alt='logo da NextPlus' title="Logo da Next" className="logo-nextplus"/>
                </div>

            </div>

            <div className='box-teste'>
            <h1>Teste de requisitos</h1>
                <p>Teste seus acessos a câmera, microfone e velocidade da internet.</p>

                <div className="box-teste-img">
                <img src={imgsvg1} className="img-svg1"alt='Símbolo de frequência de áudio'/>
                <img src={camera} alt='ícone de câmera'/>
                </div>

                <div className='container-botao'>
                <Link to="/teste"><button>Realizar Teste</button></Link> 
                </div>      

            </div>
        </div>

    )
}

export default Home