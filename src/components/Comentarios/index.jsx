import Logo from "../../img/minilogoYouOut.jpg";
import CommerceLogo from "../../img/commerceLogo.png";
import { LiaStarSolid } from "react-icons/lia";
import { GoPaperAirplane } from "react-icons/go";
import ComentarioHeader from "./ComentariosHeader";
import ComentarioCard from "./ComentarioCard";
import { useState, useEffect } from "react";
import { getAvaliacoes } from "../../services/commerce";
import "./style.css";

function Comentarios({ uuid }) {
  const [avaliacoes, setAvaliacoes] = useState([]);

  const fetchAvaliacoes = async () => {
    let avaliacoesFetch = await getAvaliacoes(uuid);
    console.log(avaliacoesFetch);
    if (avaliacoesFetch < 1) {
      setAvaliacoes([]);
      console.log(avaliacoesFetch);
    }

    // um para testar ou para usar
    setAvaliacoes(avaliacoesFetch);
    // setAvaliacoes(avaliacoesFetch.concat({
    // 	id: 0,
    // 	nome: "Eduardo",
    // 	comentario: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    // 	resposta: undefined,
    // 	teste: true
    // }))
  };

  useEffect(() => {
    fetchAvaliacoes();
  }, [uuid]);

  return (
    <div className="containerComentario">
      {avaliacoes ? (
        <ComentarioHeader length={avaliacoes.length} />
      ) : (
        <ComentarioHeader length={0} />
      )}
      {avaliacoes.length > 0 &&
        avaliacoes.map((element) => {
          return (
            <li key={element.id} className="avaliacoesListDot">
              <ComentarioCard avaliacao={element} uuid={uuid} />
            </li>
          );
        })}
    </div>
  );
}

export default Comentarios;
