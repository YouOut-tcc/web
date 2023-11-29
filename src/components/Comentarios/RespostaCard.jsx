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
    multiline: true,
  }
]
export default function RespostaCard({ respostaProps, avaliacaoid, uuid }) {
  const [resposta, setResposta] = useState(respostaProps);
  const [respostaInput, setRespostaInput] = useState("");
  const [state, onChange, setError, clearErrors] =
  useReducerInputs(respostaState);

  const handleResposta = () => {
    console.log(respostaInput);
    responderAvaliacao(uuid, avaliacaoid, respostaInput);
    setResposta(respostaInput);
  };

  const handleOpenResposta = () => {
    console.log("eeeeeeee");
  };


  return (
    <div className="conteinerRespostas">
      <div className="line2"></div>
      <div className="conteinerRespostasImg">
      <img src={CommerceLogo} className="fotoPerfilCNPJ" alt="Logo YouOut" />
      </div>
      <div className="conteinerRespostasInput">
        {resposta ? (
          <p>
            {resposta}
          </p>
        ) : (
          <>
            {/* onChange={(e) => {setRespostaInput(e.target.value)}} */}
            <InputB index={0} state={state} onChange={onChange} />
            <GoPaperAirplane className="iconeAviao" onClick={handleResposta} />
          </>
        )}
      </div>
    </div>
  );
}
