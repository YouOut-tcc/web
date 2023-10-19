import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCEP } from "../../services/cep";

export default function CommerceHomeCard({ place}) {
  const [endereco, setEndereco] = useState(undefined);

  const fetchEndereco = async () => {
    // cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
    let enderecofetch = await fetchCEP(place.cep);
    console.log(enderecofetch)
    setEndereco(enderecofetch);
  };

  useEffect(()=>{
    fetchEndereco();
    console.log("redenrizando um card")
  }, [])

  return (
    <li key={place.uuid} className="commerceList">
      <Link to={`comercio/${place.uuid}`} className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img
              src={
                "https://galeria.people.com.br/noticia/20160510115025610.jpg"
              }
              alt=""
            />
          </div>
          <div className="divTextCommerce">
            <p>{place.nome}</p>
            {endereco &&
              <p>cep: {place.cep}, {endereco.logradouro},{place.numero},{endereco.bairro},{endereco.uf} </p>
            }
            
          </div>
        </div>
      </Link>
    </li>
  );
}
