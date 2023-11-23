import { useState, useContext, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import HeaderPerfil from "../../components/headerPerfil";
import UuidContext from "../../contexts/uuidCommerceContext";
import "./style.css";

function App({ setUuid }) {
  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  return (
    <div className="pele">
      <HeaderPerfil commerces={commerces} setUuid={setUuid} />

      <div className="divInfoP">
        <h1>Informações Pessoais</h1>
        <input placeholder="Nome: "></input>
        <input placeholder="Email: "></input>
        <input placeholder="CPF: "></input>
        <input placeholder="Telefone: "></input>
      </div>
      <button className="btnAlterar">Alterar</button>
    </div>
  );
}

export default function Perfil() {
  const [uuid, setUuid] = useState();
  return (
    <UuidContext.Provider value={uuid}>
      <App setUuid={setUuid} />
    </UuidContext.Provider>
  );
}
