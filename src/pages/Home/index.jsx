import { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import { useParams, useLocation } from "react-router";
import HeaderComercio from "../../components/headerComercio";
import Carrosel from "../../components/Carrosel";
import Comentarios from "../../components/Comentarios";
import { getCommerceInfo } from "../../services/commerce";
import { Link } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import "./style.css";

function Home() {
  const [selectedOption, setSelectedOption] = useState("perfil");
  const [commerce, setCommerce] = useState();

  let { uuid } = useParams();

  const fetchData = async () => {
    let comerce = await getCommerceInfo(uuid);
    console.log(comerce);
    setCommerce(comerce);
  };

  useEffect(() => {
    fetchData();
  }, [uuid]);

  return (
    <div>
      {commerce && <HeaderComercio uuid={uuid} commerce={commerce} />}
      <div className="divButtons">
        <button onClick={() => setSelectedOption("perfil")}>Perfil</button>
        <button onClick={() => setSelectedOption("dashboard")}>
          Dashboard
        </button>
      </div>
      {selectedOption === "perfil" && (
        <div>
          <Carrosel uuid={uuid} />
          {commerce && <Comentarios icon={commerce.icon_url} uuid={uuid} nota={commerce.nota}/>}
        </div>
      )}
      {selectedOption === "dashboard" && (
        <div>
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default Home;
