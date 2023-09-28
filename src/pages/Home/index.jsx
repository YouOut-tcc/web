import styles from '../Home/style.css';
import Header from '../../components/Header';
import HeaderComercio from '../../components/headerComercio';
import Carrosel from '../../components/Carrosel';
import Comentarios from '../../components/Comentarios';



function Home() {
return(
    <div>
        <Header/>
        <HeaderComercio/>
        <Carrosel/>
        <Comentarios/>
    </div>
)
}

export default Home;