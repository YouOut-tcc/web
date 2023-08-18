import styles from "./style.css";
import Logo from "../../components/Logo1";
import Btn from "../../components/Buttons/Button1";

function BemVindo() {
  return (
    <div className="welcomeconteiner">
      <Logo />
      <div className="welcomeconteinerbtn">
        <h1 id="bemVindoTitulo">
          Bem-Vindo ao <br></br>YouOut!
        </h1>
        <div className="divButtons">
          <Btn text="USUÁRIO" />
          <Btn text="ESTABELECIMENTO" />
        </div>
      </div>
    </div>
  );
}

export default BemVindo;
