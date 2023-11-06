import styles from "./style.css";
import YOUT from "../../assets/logotipo.png";
import { TfiHome } from "react-icons/tfi";
import { BsCalendarCheck } from "react-icons/bs";
import { ImTicket } from "react-icons/im";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="divHeader">
      <div className="layoutBLogo">
        <div className="logoY">

          <img src={YOUT} className="logolb" alt="Logo YouOut" />
        </div>
          <h1>YouOut</h1>
          <div className="line"></div>
        </div> 
        <div className="menu">
           {/* <nav> */}
             {/* <ul> */}
               <Link className="iconesMenu" to="">
                   <TfiHome className="iconesMenuHome iconesHeader" /> 
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
