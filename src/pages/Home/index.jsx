import styles from '../Home/style.css';
import Header from '../../components/Header';
import HeaderComercio from '../../components/headerComercio';
import Carrosel from '../../components/Carrosel';
import Comentarios from '../../components/Comentarios';
import { Link } from 'react-router-dom';



function Home() {
return(
    <div>
        <Header/>
        <HeaderComercio/>
        <Carrosel/>
        <Comentarios/>
        <Link to='/cadastro'><h1 className='testee'>Cadastre-se</h1></Link>
    </div>
)
}

export default Home;