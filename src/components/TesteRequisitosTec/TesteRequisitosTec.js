import imgNote from '../../img/imagem-notebook.png'
import imgCamera from '../../img/camera.png'
import iconeCheck from '../../img/check.png'
import iconeExclamacao from '../../img/exclamacao.png'
import LogoTopMed from '../../img/topmed_logo1.png'
import LogoNext from '../../img/nextplus-logo1.png'
import './TesteRequisitosTec.css'
import { Link } from 'react-router-dom'

const TesteRequisitosTec = () =>{
    return(
        <div className="App">
            <div className='container-teste-requisitos'>
                <p className='titulo-cabecalho'>Teste de requisitos técnicos</p>
                <div>
                    <div className='container-teste erro'><img src={iconeExclamacao}alt='ícone de status'/>Câmera não encontrada.</div>
                    <div className='container-teste erro'><img src={iconeExclamacao}alt='ícone de status'/>Acesso a câmera bloqueado.</div>
                    <div className='container-teste'><img src={iconeCheck}alt='ícone de status'/>Microfone disponível.</div>
                    <div className='container-teste'><img src={iconeCheck}alt='ícone de status'/>Acesso ao microfone disponível.</div>
                    <div className='container-teste erro'><img src={iconeExclamacao}alt='ícone de status'/>Navegador não compatível - Favor utilizar o Google Chrome</div>
                    <div className='container-teste'><img src={iconeCheck}alt='ícone de status'/>Velocidade da internet suficiente</div>
                </div>
                
                <div className='campo-imagem'>
                    <img src={LogoTopMed} alt='Logo da TopMed' title="Logo da TopMed" className="logo-topmed"/>
                    <img src={LogoNext} alt='logo da NextPlus' title="Logo da Next" className="logo-nextplus"/>
                </div>
            </div>
                    {/* Lado direito do container */}
        
                    <div className='container-teste-camera'>
                        <div className='container-teste-camera-icone'>
                            <img src={imgCamera} alt="ícone de câmera fotográfica"/>
                            <p>Câmera</p>
                        </div>
                        
                    <img src={imgNote} alt="Pessoa mexendo no notebook"/>

                    <div className='container-botao'>
                        <Link to="/"><button>Concluído</button></Link> 
                    </div>      
                </div>

        </div>

    )
}
export default TesteRequisitosTec