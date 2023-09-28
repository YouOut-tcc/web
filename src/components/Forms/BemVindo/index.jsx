import styles from "./style.css";
import Logo from "../../img/logoYouOut.jpeg";

function App() {
  return (
      <div className="divButtons">
        {/* <div className="btn"> */}
          <h1 id="titulo">
            Bem-Vindo ao <br></br>YouOut!
          </h1>
          <button className="btnUsuario">USUÁRIO</button>
          <button className="btnEstabelecimento">ESTABELECIMENTO</button>
          <button className="btnCadastrese">CADASTRE-SE</button>
        </div>
  );
}

export default App;