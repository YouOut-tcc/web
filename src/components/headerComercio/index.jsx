import styles from "../headerComercio/style.css";
import { AiFillStar } from "react-icons/ai";
// import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCommerceInfo } from "../../services/commerce";
import { fetchCEP } from "../../services/cep";

function HeaderComercio({uuid, commerce}) {
  const [endereco, setEndereco] = useState([]);

  const fetchData = async () => {
    console.log(commerce.cep);
    let enderecoInfo = await fetchCEP(commerce.cep);
    setEndereco(enderecoInfo);

    console.log(enderecoInfo);
  };

  useEffect(() => {
    fetchData();
  }, [uuid]);

  return (
    <div className="titulo">
      {commerce && <h1>{commerce.nome}</h1>}
      {endereco && (
        <>
          <h3>
            {endereco.logradouro}, {commerce.numero}
          </h3>
          <h3>
            {endereco.bairro} - {endereco.uf}{" "}
          </h3>
          <h3>{endereco.cep}</h3>
        </>
      )}
      <h3
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          margin: "1vh",
          marginTop: "-4vh",
        }}
      ></h3>
    </div>
  );
}

export default HeaderComercio;
