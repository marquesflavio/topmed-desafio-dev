import LogoTopMed from '../../img/topmed_logo1.png'
import LogoNext from '../../img/nextplus-logo1.png'
import './NovaSenha.css'
import { Link } from 'react-router-dom'

const NovaSenha = () =>{
    return(
        <div className="App">
            <div className='container-nova-senha'>
                <h1 className='titulo-esqueceu-senha'>Redefinição de Senha</h1>
                
                <div className='campo-login'>
                    <input type='text' placeholder='Nova senha' className='nova-senha'></input>
                    <input type='text' placeholder='Confirme a nova senha' className='confirme-nova-senha'></input>
                </div>
                
                <div className='campo-nova-senha'>
                    <Link to="/">
                    <button className='enviar'>Redefinir Senha</button>
                    <button className='cancelar'>Cancelar</button>
                    </Link>
                </div>
                
                <div className='novasenha-imagem'>
                    <img src={LogoTopMed} alt='Logo da TopMed' title="Logo da TopMed" className="logo-topmed"/>
                    <img src={LogoNext} alt='logo da NextPlus' title="Logo da Next" className="logo-nextplus"/>
                </div>
            </div>
        </div>
    )
}

export default NovaSenha