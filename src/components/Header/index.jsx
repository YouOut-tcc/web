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
      <div>
        <div className="divMiniLogo">
          <img src={Logo} className="logo" alt="Logo YouOut" />
          <h1>You Out</h1>
        </div>
        <div className="menu">
           <nav>
             <ul>
               <Link to="/">
                 <li className="pagInicial">
                   {" "}
                   <LiaHomeSolid className="iconesMenuHome" /> Pagina Inicial{" "}
                 </li>{" "}
               </Link>
               <Link to="/eventos">
                 <li className="eventos">
                   {" "}
                   <BsCalendarCheck className="iconesMenuEventos" /> Eventos
                 </li>{" "}
               </Link>
               <Link to="/cupons">
                 <li className="cupons">
                   {" "}
                   <ImTicket className="iconesMenuCupons" /> Cupons
                 </li>{" "}
               </Link>
               <Link to="/perfil">
                 <li className="perfil">
                   {" "}
                   <RxPerson className="iconesMenuPerfil" /> Perfil
                 </li>{" "}
               </Link>
             </ul>
           </nav>
         </div>
      </div>
    </header>
  );
}

export default Header;
