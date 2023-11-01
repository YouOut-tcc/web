import styles from "./user.css";
import main from "../../styles/main.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../../components/LogoInicial";
import Button from "@mui/material/Button";

function Usuario() {
  return (
    <div className="containerInfos">
      <h1 id="titulo">Acesse nossa plataforma como usuário baixando o app.</h1>
      <p id="desc">
        {" "}
        Descubra estabelecimentos incríveis e desfrute de ofertas exclusivas.
        <br /> Explore o melhor da sua região com o YouOut!
      </p>
      <Link to={"/"}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#8200A8", height: "5vh" }}
        >
          Voltar
        </Button>
      </Link>
    </div>
  );
}

export default Usuario;
