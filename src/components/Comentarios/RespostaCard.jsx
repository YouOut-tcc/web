import { GoPaperAirplane } from "react-icons/go";
import CommerceLogo from "../../img/commerceLogo.png";
import { responderAvaliacao } from "../../services/commerce";
import { useState } from "react";
import "./style.css";
import { useReducerInputs } from "../../hooks/Inputs";

import InputB from "../Inputs/InputB";
let respostaState = [
  {
    label: "Digite sua resposta",
    value: "",
    multiline: true,
    maxRows: 4
  }
]
export default function RespostaCard({ respostaProps, avaliacaoid, uuid }) {
  const [resposta, setResposta] = useState(respostaProps);
  const [state, onChange, setError, clearErrors] =
  useReducerInputs(respostaState);

  // vaidar coisas
  const handleResposta = () => {
    let resposta = state[0].value;
    // console.log(resposta);
    responderAvaliacao(uuid, avaliacaoid, resposta);
    setResposta(resposta);
  };

  return (
    <div className="conteinerRespostas">
      {/* <div className="line2"></div> */}
      <div className="conteinerRespostasImg">
      <img src={CommerceLogo} className="fotoPerfilCNPJ" alt="Logo YouOut" />
      </div>
      <div className="conteinerRespostasInput">
        {resposta ? (
          <p className="resposta">
            {resposta}
          </p>
        ) : (
          <>
            <InputB index={0} state={state} onChange={onChange} />
            <GoPaperAirplane className="iconeAviao" onClick={handleResposta} />
          </>
        )}
      </div>
    </div>
  );
}
