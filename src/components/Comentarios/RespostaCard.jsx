import { GoPaperAirplane } from "react-icons/go";
import CommerceLogo from "../../img/commerceLogo.png";
import { responderAvaliacao } from "../../services/commerce";
import { useState } from "react";
import "./style.css";

export default function RespostaCard({ respostaProps, avaliacaoid, uuid }) {
  const [resposta, setResposta] = useState(respostaProps);
  const [respostaInput, setRespostaInput] = useState("");

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
            <input
              placeholder="    Digite sua resposta ..."
              className="AvaliacaoRespotaInput"
              onChange={(e) => {setRespostaInput(e.target.value)}}
            />
            <GoPaperAirplane className="iconeAviao" onClick={handleResposta} />
          </>
        )}
      </div>
    </div>
  );
}
