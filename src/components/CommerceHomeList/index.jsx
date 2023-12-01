import { useState, useEffect } from "react";
import CommerceHomeCard from "./card";
import Button from "@mui/material/Button";
import { Link, redirect, useNavigate } from "react-router-dom";

export default function CommerceHomeList({ data }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(data);
  }, []);

  return (
    <>
      <Link to={"/cadastro/estabelecimento"}>
        {/* por favor colocar tirar estilo inline */}
        <Button
          variant="contained"
          style={{
            backgroundColor: "#8200A8",
            height: "45px",
            marginLeft: "80%",
            marginTop: "2%",
          }}
        >
          Cadastrar nova unidade
        </Button>
      </Link>
      <div className="conteinerPlacesCards">
        {places.length > 0 &&
          places.map((element) => {
            return <CommerceHomeCard place={element} />;
          })}
      </div>
    </>
  );
}
