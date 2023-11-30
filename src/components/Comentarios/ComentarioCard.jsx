import Logo from "../../img/minilogoYouOut.jpg";
import { GoPaperAirplane } from "react-icons/go";
import CommerceLogo from "../../img/commerceLogo.png";
import RespostaCard from "./RespostaCard";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

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

  let date = new Date(avaliacao.criado).toLocaleDateString('en-GB');

  return (
    <div className="divAvaliacao">
      <div className="conteinerAvaliacaoImg">
        <img src={Logo} className="comentarioUserLogo" alt="Logo YouOut" />
      </div>
      <div className="conteinerAvaliacao">
        <h1>{avaliacao.nome}</h1>
        <div className="infoComent">
          <Box
            sx={{
              "& > legend": { mt: 2 },
              color: "var(--click-color)",
            }}
          >
            <Typography component="legend">{date}</Typography>
            <Rating
              style={{ opacity: 1 }}
              name="disabled"
              disabled
              value={avaliacao.pontuacao}
              sx={{ color: "#fe0472" }}
            />
          </Box>
        </div>
        <p className="comentario">{avaliacao.comentario}</p>
        {resposta ? (
          <RespostaCard
            respostaProps={resposta}
            avaliacaoid={avaliacao.id}
            uuid={uuid}
          />
        ) : requestResposta ? (
          <RespostaCard
            respostaProps={resposta}
            avaliacaoid={avaliacao.id}
            uuid={uuid}
          />
        ) : (
          <p className="btResponderAvaliacao" onClick={handleOpenResposta}>
            Responder
          </p>
        )}
      </div>
    </div>
  );
}
