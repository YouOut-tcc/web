import styles from '../Comentarios/style.css';
import Logo from '../../img/minilogoYouOut.jpg'
import {LiaStarSolid} from 'react-icons/lia'
import {GoPaperAirplane} from 'react-icons/go'


function Comentarios() {
    return(
        <div className='containerComentario'>
            <div className='divComentario'>
                <h1>13 Comentarios</h1>
                <h1><LiaStarSolid className='iconeEstrela'/>4,87</h1>
            </div>
            <div className='divAvaliacao'>
                <img src={Logo} className='logoPerfil' alt='Logo YouOut'/> 
                <h1>Nome do Usuario</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <img src={Logo} className='logoPerfil2' alt='Logo YouOut'/> 
                <input placeholder='    Digite sua resposta ...'></input> 
                <GoPaperAirplane className='iconeAviao'/>
               
            </div>
        </div>
    )
}

export default Comentarios;