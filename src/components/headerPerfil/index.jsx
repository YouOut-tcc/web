import styles from '../headerPerfil/style.css';
import CommerceLogo from '../../img/commerceLogo.png';

function headerPerfil() {
  return(
      <div className='fundo'>
        <div className='HPerfil'>
          <img src={CommerceLogo} className='fotoPerfilCommerce'/> 
          <h1>Nome do Usuario</h1>
        </div>
      </div>

  )
}

export default headerPerfil;