import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCEP } from "../../services/cep";
import logoComercio from "../../assets/logoComercio.png";


export default function CommerceHomeCard({ place }) {
  const [endereco, setEndereco] = useState(undefined);

  const fetchEndereco = async () => {
    // cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
    let enderecofetch = await fetchCEP(place.cep);
    console.log(enderecofetch);
    setEndereco(enderecofetch);
  };

  useEffect(() => {
    fetchEndereco();
    console.log("redenrizando um card");
  }, []);

  return (
    <div className="commerceDiv">
    <li key={place.uuid} className="commerceList">
      <Link to={`comercio/${place.uuid}`} className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={logoComercio} alt="" />
          </div>
          {/* <div className="divTextCommerce">
            <p>{place.nome}</p>
            {endereco &&
              <p>cep: {place.cep}, {endereco.logradouro},{place.numero},{endereco.bairro},{endereco.uf} </p>
            }
            
          </div> */}
          {/* <div className="divTextCommerce"> <p>{place.nome}</p> <p>{endereco.logradouro}, {place.numero}</p> <p>{endereco.bairro},{endereco.uf}</p> <p> {place.cep}</p> </div> */}
          <div className="divTextCommerce">
            <p>Lorem Ipsum</p>
            <p>Estr. Kizaemon Takeuti, 1987</p>
            <p>Pirajussara, Taboão da Serra - SP</p>
            <p> 06775-002</p>
          </div>
        </div>
      </Link>
    </li>
    </div>
  );
}
