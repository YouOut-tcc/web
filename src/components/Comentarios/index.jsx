import Logo from "../../img/minilogoYouOut.jpg";
import CommerceLogo from "../../img/commerceLogo.png";
import { LiaStarSolid } from "react-icons/lia";
import { GoPaperAirplane } from "react-icons/go";
import ComentarioHeader from "./ComentariosHeader";
import ComentarioCard from "./ComentarioCard";
import { useState, useEffect } from "react";
import { getAvaliacoes } from "../../services/commerce";
import { useParams } from "react-router";
import "./style.css";

function Comentarios() {
  const [avaliacoes, setAvaliacoes] = useState([]);

	let { uuid } = useParams();

	const fetchAvaliacoes = async () => {
		// falta pegar o uuid
		let avaliacoesFetch = await getAvaliacoes(uuid);
		console.log(avaliacoesFetch)
		if(avaliacoesFetch < 1){
			setAvaliacoes([])
			console.log(avaliacoesFetch)
		}

		// um para testar ou para usar

		setAvaliacoes(avaliacoesFetch);
		// setAvaliacoes(avaliacoesFetch.concat({
		// 	id: 0,
		// 	nome: "Eduardo",
		// 	comentario: `dsadaddddddddddddddddd
		// 	dddddddddddddddddddddddddddddddddddddd
		// 	dddddddddddddddddddddddddddddddddddddddd
		// 	ddddddddddddddddddddddddddddddddddddddddd
		// 	ddddddddddddddddddddddddddddddddddddddddddd
		// 	dddddddddddddddddddddddddddddddddddddddddddd
		// 	ddddddddddddddddddddddddddddddddddddddddd`,
		// 	resposta: undefined,
		// 	teste: true
		// }))
	}

	useEffect(()=>{
		fetchAvaliacoes();
	},[])

  return (
    <div className="containerComentario">
			{avaliacoes ? <ComentarioHeader length={avaliacoes.length}/> : <ComentarioHeader length={0}/>}
			{avaliacoes.length > 0 &&
				avaliacoes.map((element)=>{
					return <li key={element.id} className="avaliacoesListDot"><ComentarioCard avaliacao={element} uuid={uuid}/></li>
				})
			}
			{/* segue um exemplo e imfomaçoes nescessarias para fazer um comentario falso para testar */}
			{/* use a funçao avaliacoesFetch e coloque concatene um array com o array de avaliacoes para testar */}
			{/* [{
						nome:
						comentario:
						resposta:
			}] */}
    </div>
  );
}

export default Comentarios;
