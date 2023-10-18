import styles from "./style.css";
import Logo from "../../img/minilogoYouOut.jpg";
import { LiaHomeSolid } from "react-icons/lia";
import { BsCalendarCheck } from "react-icons/bs";
import { ImTicket } from "react-icons/im";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="divHeader">
        <div className="divMiniLogo">
          <img src={Logo} className="logo" alt="Logo YouOut" />
          <h1>You Out</h1>
        </div>
        <div className="menu">
           {/* <nav> */}
             {/* <ul> */}
               <Link className="iconesMenu" to="">
                   <LiaHomeSolid className="iconesMenuHome iconesHeader" /> 
                   <p>Pagina Inicial</p>
               </Link>
               <Link className="iconesMenu" to="eventos">
                   <BsCalendarCheck className="iconesMenuEventos iconesHeader" /> 
                   <p>Eventos</p>
               </Link>
               <Link className="iconesMenu" to="cupons">
                   <ImTicket className="iconesMenuCupons iconesHeader" /> 
                   <p>Cupons</p>
               </Link>
               <Link className="iconesMenu" to="perfil">
                   <RxPerson className="iconesMenuPerfil iconesHeader" /> 
                   <p>Perfil</p>
               </Link>
             {/* </ul> */}
           {/* </nav> */}
         </div>
      </div>
    </header>
  );
}

export default Header;
