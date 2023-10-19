import Logo from "../../img/minilogoYouOut.jpg";
import { GoPaperAirplane } from "react-icons/go";
import CommerceLogo from "../../img/commerceLogo.png";
import RespostaCard from "./RespostaCard";
import { useState, useEffect } from "react";

import "./style.css";

export default function ComentarioCard({ avaliacao, uuid }) {
  const [resposta, setResposta] = useState(false);
  const [requestResposta, setRequestResposta] = useState(false);

  const handleResposta = () => {
    console.log("testesrestpoajrte");
  };

  const handleOpenResposta = () => {
    setRequestResposta(true);
    console.log("eeeeeeee");
  };

  useEffect(() => {
    console.log(avaliacao);
    setResposta(avaliacao.resposta);
  }, []);

  return (
    <div className="divAvaliacao">
      <div className="conteinerAvaliacaoImg">
        <img src={Logo} className="comentarioUserLogo" alt="Logo YouOut" />
      </div>
      <div className="conteinerAvaliacao">
        <h1>{avaliacao.nome}</h1>
        <p>{avaliacao.comentario}</p>
        {resposta ? (
          <RespostaCard respostaProps={resposta} avaliacaoid={avaliacao.id} uuid={uuid}/>
        ) : requestResposta ? (
          <RespostaCard respostaProps={resposta} avaliacaoid={avaliacao.id} uuid={uuid}/>
        ) : (
          <p className="btResponderAvaliacao" onClick={handleOpenResposta}>
            Responder
          </p>
        )}
      </div>
    </div>
  );
}
