import { Link } from 'react-router-dom'
import './Logado.css'
const Logado = () => {
    return(
        <div className="App">
            <div className='box-logon'>
                <h1>Login realizado!</h1>
                <p className='texto-logon'>Bem vindo, </p>

                <div className='campo-logon'>
                    <p>Área de uso da plataforma...</p>
                    <Link to="/"><button>Logoff</button></Link> 
                </div>
            </div>
        </div>

    )
}

export default Logado