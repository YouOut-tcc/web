import styles from './style.css'
import Logo from '../../img/logoYouOut.jpeg'

function BemVindo() {
    return(
        <div className='divPrincipal'>
             <div className='divLogo'>
                <img src={Logo} id='logo' alt='Logo YouOut'/> 
            </div>
            
            <div className='btns'>
                <h1 id='titulo'>Bem-Vindo ao <br></br>YouOut!</h1>
                <button className='btnUsuario'>USUÁRIO</button>
                <button className='btnEstabelecimento'>ESTABELECIMENTO</button>
                <button className='btnCadastrese'>CADASTRE-SE</button>
            </div>
        </div>

    )
}

export default BemVindo;