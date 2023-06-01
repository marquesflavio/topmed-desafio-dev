import LogoTopMed from '../../img/topmed_logo1.png'
import LogoNext from '../../img/nextplus-logo1.png'
import './EsqueceuSenha.css'
import { Link } from 'react-router-dom'

const EsqueceuSenha = () => {
    return(
        <div className="App">
            <div className='container-esqueceu-senha'>
                <h1 className='titulo-esqueceu-senha'>Esqueceu sua senha?</h1>
                <p>Informe o endereço de e-mail cadastrado para receber o link de redefinição de senha.</p>
                
                <div className='campo-esqueceu-enviar'>
                    <input type='text' placeholder='E-mail' className='email'></input>
                    <Link to="/emailenviado"><button>Enviar</button></Link> 
                </div>
                
                <div className='campo-imagem'>
                    <img src={LogoTopMed} alt='Logo da TopMed' title="Logo da TopMed" className="logo-topmed"/>
                    <img src={LogoNext} alt='logo da NextPlus' title="Logo da Next" className="logo-nextplus"/>
                </div>
            </div>
        </div>
    )
}

export default EsqueceuSenha