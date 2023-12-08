import { useState, useEffect } from "react";
import CommerceLogo from "../../img/commerceLogo.png";
import styles from "../headerPerfil/style.css";

// tem que fazer um sistema caso não tenha um estabelecimento cadastrado
// pode ser que aconteça, mesmo que não seja permitido entra na home sem um
// estabelecimento cadastro
// vai que ¯\_(ツ)_/¯

export default function HeaderPerfil({ commerces, setUuid, setCommerceInfo }) {
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState(
    commerces[0]
  );

  const handleEstabelecimentoChange = (event) => {
    let index = event.target.value;
    let selected = commerces[index];
    setSelectedEstabelecimento(selected);
    setUuid(commerces[index].uuid);
    if(setCommerceInfo != undefined){
      setCommerceInfo(commerces[index]);
    }
    console.log(commerces[index].uuid)
  };

  useEffect(()=>{
    console.log("header entrou no useeffect")
    console.log(selectedEstabelecimento.uuid)
    setUuid(commerces[0].uuid);
    if(setCommerceInfo != undefined){
      setCommerceInfo(commerces[0]);
    }
  },[])

  return (
    <div className="HPerfil">
      <select
        value={selectedEstabelecimento.id}
        onChange={handleEstabelecimentoChange}
        className="unidade"
      >
        {commerces &&
          commerces.map((estabelecimento, index) => (
            <option value={index}>
              {estabelecimento.nome}
            </option>
          ))}
      </select>
      <div className="estabelecimento-info">
        <img
          src={selectedEstabelecimento.icon_url? selectedEstabelecimento.icon_url:CommerceLogo}
          alt={selectedEstabelecimento.nome}
          className="fotoPerfilCommerce"
        />
        <span className="nome">{selectedEstabelecimento.nome}</span>
      </div>
    </div>
  );
}
