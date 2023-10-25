import styles from './style.css'
// import Logo from '../../img/logoYouOut.jpeg';
import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/LogoInicial";

function BemVindo() {
    return(
        <div className='divPrincipal'>
             {/* <div className='divLogo'> */}
                {/* <img src={Logo} className='logoPgHome' alt='Logo YouOut'/>  */}
                {/* <Logo/> */}
            {/* </div> */}
             <Logo/>
            <div className='btns'>
                <h1 id='titulo'>Bem-vindo ao <br></br>YouOut!</h1>
                <button className='btnUsuario'>USUÁRIO</button>
                <Link className="linkPgHome" to={'/login'}><button className='btnEstabelecimento'>ESTABELECIMENTO</button></Link>
                <Link className="linkPgHome" to={'/cadastro'}><button className='btnCadastrese'>CADASTRE-SE</button></Link>
               
            </div>
           
        </div>

    )
}

export default BemVindo;