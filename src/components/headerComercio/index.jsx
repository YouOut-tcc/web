import styles from "../headerComercio/style.css";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCommerceInfo } from "../../services/commerce";
import { fetchCEP } from "../../services/cep";

function HeaderComercio() {
  const [info, setInfo] = useState({});
  const [endereco, setEndereco] = useState([]);

  let { uuid } = useParams();

  const fetchData = async () => {
    // falta pegar o uuid
    let enderecoInfo;
    let comerce = await getCommerceInfo(uuid);
    console.log(comerce.cep);
    enderecoInfo = await fetchCEP(comerce.cep);
    setEndereco(enderecoInfo);
    setInfo(comerce);

    console.log(comerce);
    console.log(enderecoInfo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <div className="conteinerInfoHeader">
    <div className="titulo">
      {info && <h1>{info.nome}</h1>}
      {endereco && (
        <>
          <h3>
            {endereco.logradouro}, {info.numero}
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
    // </div>
  );
}

{
  /* </div>
<div className="divBorda">
  <div className="divTitulo">
    <div className="titulo">
      <h1>Lorem Ipsum</h1>
      <h3>Rua lorem, 0000 - 12345-678</h3>
    </div>
    <div className='checkin'>
                <h3><BsFillPeopleFill className='iconeCheckin'/>Check-in</h3>
            </div>
  </div>
</div> */
}
export default HeaderComercio;
