import LogoTopMed from '../../img/topmed_logo1.png'
import LogoNext from '../../img/nextplus-logo1.png'
import emailenviado from '../../img/emailenviado.png'
import './EmailEnviado.css'
import { Link } from 'react-router-dom'

const EmailEnviado = () => {
    return (
        <div className="App">
            <div className='container-esqueceu-senha'>
                <h1 className='titulo-esqueceu-senha'>E-mail enviado!</h1>
                <p>Verifique sua caixa de entrada e acesso o link para redefinição de senha.</p>
                
                <div className='campo-email-enviado'>
                    <img src={emailenviado} alt='ícone de email eletrônico'/>
                    <Link to="/redefinirsenha"><button>Login</button></Link>
                </div>
                
                <div className='campo-imagem'>
                    <img src={LogoTopMed} alt='Logo da TopMed' title="Logo da TopMed" className="logo-topmed"/>
                    <img src={LogoNext} alt='logo da NextPlus' title="Logo da Next" className="logo-nextplus"/>
                </div>
            </div>
        </div>
    )
}

export default EmailEnviado