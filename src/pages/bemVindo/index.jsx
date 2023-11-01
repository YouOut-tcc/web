import styles from "./indexBemVindo.css";
import main from "../../styles/main.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/LogoInicial";

function BemVindo() {
  return (
    <div className="containerInfos">
      <h1 id="titulo">
        Bem-vindo ao <br></br>YouOut!
      </h1>
      <div className="btns">
        <button className="btnUsuario">USUÁRIO</button>
        <Link className="linkPgHome" to={"/login"}>
          <button className="btnEstabelecimento">ESTABELECIMENTO</button>
        </Link>
        <Link className="linkPgHome" to={"/cadastro"}>
          <button className="btnCadastrese">CADASTRE-SE</button>
        </Link>
      </div>
    </div>
  );
}

export default BemVindo;
