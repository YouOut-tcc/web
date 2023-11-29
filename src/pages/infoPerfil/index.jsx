import { useState, useContext, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import HeaderPerfil from "../../components/headerPerfil";
import { useReducerInputs } from "../../hooks/Inputs";
import UuidContext from "../../contexts/uuidCommerceContext";
import InputB from "../../components/Inputs/InputB";
import "./style.css";
import MenuPerfil from "../../components/MenuPerfil";

const initialState = [
  {
    label: "Nome do estabelecimento",
    name: "email",
  },
  {
    label: "Telefone",
    name: "email",
  },
  {
    label: "Email",
    name: "email",
  },
];

function App({ setUuid }) {
  const [state, onChange, setError, clearErrors] =
    useReducerInputs(initialState);
  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  return (
    <>
      <MenuPerfil/>
      <HeaderPerfil commerces={commerces} setUuid={setUuid} />
        <h1 style={{margin:"2vh", fontSize:"2vh"}}>Alterar informações do perfil</h1>
      <div className="divInfo">
        <InputB index={0} state={state} onChange={onChange} />
        <InputB index={1} state={state} onChange={onChange} />
        <InputB index={2} state={state} onChange={onChange} />
      </div>
      <div className="divSalvarPerfil">
        <button className="btnSalvarCupom" type="submit">
          Salvar Informações
        </button>
      </div>
      {/* Fazer para essa parte a regra de seleção do MenuPerfil, usar a metade da tela para essas infos */}
      <div style={{ flex: "1", borderLeft: "1px #808080 solid", height: "80vh", margin: "-73vh 0 2vh 90vh"}}></div>


    </>
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
