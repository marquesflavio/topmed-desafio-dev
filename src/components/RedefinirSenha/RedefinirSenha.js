import './RedefinirSenha.css'
import LogoTopMed from '../../img/topmed_logo1.png'
import { Link } from 'react-router-dom'

const RedefinirSenha = () =>{
    return(
        <div className="App-redefinir-senha">
            <div className='redefinir-senha-cabecalho'>
                <p>Redefinição de senha</p>
            </div>
            <div className='container-redefinir-senha'>

                <p>Olá,</p>
                <p>Recebemos sua solicitação de redefinição de senha do Consultório Pró.</p>
                <p>Clique no botão abaixo para redefinir sua senha.</p>
                                
                <div className='campo-redef-senha-botao'>
                    <Link to="/novasenha">
                    <button>Redefinir Senha</button>
                    </Link>
                </div>
                
                <div className='container-redefinir-senha-texto'>
                    <p>Esta deve ser uma senha de acesso exclsuiva do usuário, que não deve ser compartilhada com terceiros.</p>
                    <p>Se necessário, a senha pode ser alterada posteriormente através do menu “Alterar minha senha” no Consultório Pró.</p>
                </div>

                <div className='redef-senha-imagem'>
                    <img src={LogoTopMed} alt='Logo da TopMed' title="Logo da TopMed" className="logo-topmed"/>
                    
                </div>
            </div>
        </div>
    )
}

export default RedefinirSenha