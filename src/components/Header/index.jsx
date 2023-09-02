import styles from './style.css'
import Logo from '../../img/minilogoYouOut.jpg'
import {LiaHomeSolid} from 'react-icons/lia'
import {BsCalendarCheck} from 'react-icons/bs'
import {ImTicket} from 'react-icons/im'
import {RxPerson} from 'react-icons/rx'


function Header(){
    return(
        <header>
            <container className='container'>
                <div className='divMiniLogo'>
                    <img src={Logo} className='logo' alt='Logo YouOut'/> 
                    <h1>You Out</h1>
                </div>
                <div className='menu'>
                    <nav>
                        <ul>
                            <li className='pagInicial'> <LiaHomeSolid className='iconesMenuHome'/> Pagina Inicial </li>
                            <li className='eventos'> <BsCalendarCheck className='iconesMenuEventos'/> Eventos</li>
                            <li className='cupons'> <ImTicket className='iconesMenuCupons'/> Cupons</li>
                            <li className='perfil'> <RxPerson className='iconesMenuPerfil'/> Perfil</li>
                        </ul>
                    </nav>
                </div>
            </container>
        </header>
    )
}

export default Header;