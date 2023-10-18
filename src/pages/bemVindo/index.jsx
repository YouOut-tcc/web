import styles from './style.css'
import Logo from '../../img/logoYouOut.jpeg';
import { Outlet, Link } from "react-router-dom";

function BemVindo() {
    return(
        <div className='divPrincipal'>
             <div className='divLogo'>
                <img src={Logo} id='logo' alt='Logo YouOut'/> 
            </div>
            
            <div className='btns'>
                <h1 id='titulo'>Bem-Vindo ao <br></br>YouOut!</h1>
                <Link to={`cadastro`}>Cadastro</Link>
                <button className='btnUsuario'>USUÁRIO</button>
                <Link to={'/login'}><button className='btnEstabelecimento'>ESTABELECIMENTO</button></Link>
                <Link to={'/cadastro'}><button className='btnCadastrese'>CADASTRE-SE</button></Link>
            </div>
        </div>

    )
}

export default BemVindo;