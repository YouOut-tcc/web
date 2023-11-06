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
        <Button
          variant="contained"
          style={{
            backgroundColor: "#8200A8",
            height: "5vh",
            marginLeft: "85%",
            marginTop: "2%",
          }}
        >
          Cadastrar nova unidade
        </Button>
      </Link>
      {/* {places &&
        places.map((element) => {
          return <CommerceHomeCard place={element} />;
        })} */}
    </>
  );
}
