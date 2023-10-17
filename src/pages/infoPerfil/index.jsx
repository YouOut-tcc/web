import styles from './style.css';
import Header from '../../components/Header';
import HeaderPerfil from '../../components/headerPerfil';

function Perfil() {
  return(
      <div className='pele'>
          <Header/>
          <HeaderPerfil/>

          <div  className='divInfoP'>
            <h1>Informações Pessoais</h1>
            <input placeholder='Nome: ' ></input>
            <input placeholder='Email: ' ></input>
            <input placeholder='CPF: ' ></input>
            <input placeholder='Telefone: ' ></input>
          </div>
          <button className='btnAlterar'>Alterar</button>
          

      </div>
  )
  }
  
  export default Perfil;