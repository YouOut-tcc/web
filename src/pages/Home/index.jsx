import { useState, useContext, useEffect } from "react";
import styles from "../Home/style.css";
import Header from "../../components/Header";
import HeaderComercio from "../../components/headerComercio";
import Carrosel from "../../components/Carrosel";
import Comentarios from "../../components/Comentarios";
import { Link } from "react-router-dom";
import Dashboard from "../../components/Dashboard";

function Home() {
  const [selectedOption, setSelectedOption] = useState("perfil");

  return (
    <div>
      <HeaderComercio />
      <div className="divButtons">
        <button onClick={() => setSelectedOption("perfil")}>Perfil</button>
        <button onClick={() => setSelectedOption("dashboard")}>
          Dashboard
        </button>
      </div>
      {selectedOption === "perfil" && (
        <div>
          <Carrosel />
          <Comentarios />
        </div>
      )}
      {/* <Link to='/cadastro'><h1 className='testee'>Cadastre-se</h1></Link> */}
      {selectedOption === "dashboard" && (
        <div>
          <Dashboard/>
        </div>
      )}
    </div>
  );
}

export default Home;
