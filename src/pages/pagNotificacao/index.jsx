import styles from '../pagNotificacao/style.css';
import Header from '../../components/Header';
import HeaderPerfil from '../../components/headerPerfil';
import {IoMdNotifications} from 'react-icons/io'



function PgNotificacao() {
return(
    <div>
        {/* <Header/>    */}
        <HeaderPerfil/>
        <div className='containerNotificacao'>
            <IoMdNotifications className='iconeNotificacao'/>
            <h1>Notificações (10)</h1>
        </div>
        <div className='divPaiNotificaco'>
            <div className='divNotificacao'>
                <h1>Usuário do YouOut Usuário Usuário do YouOut</h1>
                <h2>Fez um comentario Fez um comentario Fez um comentario Fez um comentario Fez um comentario Fez um comentario Fez um comentario</h2>
            </div>

            <div className='divNotificacao'>
                <h1>Usuário do YouOut</h1>
                <h2>Fez um comentario</h2>
            </div>

            <div className='divNotificacao'>
                <h1>Usuario do YouOut</h1>
                <h2>Fez um comentario</h2>
           </div>

           <div className='divNotificacao'>
                <h1>Usuário do YouOut</h1>
                <h2>Fez um comentario</h2>
           </div>

           <div className='divNotificacao'>
                <h1>Usuário do YouOut</h1>
                <h2>Fez um comentario</h2>
           </div>

           <div className='divNotificacao'>
                <h1>Usuário do YouOut</h1>
                <h2>Fez um comentario</h2>
           </div>

        </div>
            <h1 className='linkVisualizar'>Visualizar todas...</h1>
    </div>
)
}

export default PgNotificacao;