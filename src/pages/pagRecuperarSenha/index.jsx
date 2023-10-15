import styles from '../pagRecuperarSenha/style.css';
import Logo from "../../components/LogoInicial";
import InputA from "../../components/Inputs/InputA";
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className="divGeral">
    <Logo/>

    <div id="container-b">
      <div className='divPaiSenha'>
      <h1 className="title">Recuperar Senha</h1>
        
          <div className='divRecuperaSenha'>
          <InputA nome="E-mail" id="recupSenha"/>
          </div>

          <button className='btnLinkLogin'>Enviar link para login</button>

          <Link to='/'><h1 className='voltaLogin'>Voltar ao login</h1> </Link>

      </div>    
          

    </div>
    
      

      
        
      
    
  </div>
  )
  }
  
  export default Home;