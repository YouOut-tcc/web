import { BsCalendarCheck } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { useRouteLoaderData } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CardEventos from "../../components/cardEventos/cardEvento";
import HeaderPerfil from "../../components/headerPerfil";
import Modal from "../../components/modalA";
import { criarEvento } from "../../services/commerce";
import ModalEventos from "./modalEventos";
import UuidContext from "../../contexts/uuidCommerceContext";
import styles from "../pagEventos/style.css";
import zIndex from "@mui/material/styles/zIndex";

function App({ setUuid }) {
  const [openModal, setOpenModal] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [preco, setPreco] = useState("");

  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  // funcionado parcialmente
  // useEffect(()=>{
  //   console.log("pegando o uuid do useContext");
  //   console.log(uuid);
  // },[uuid]);

  useEffect(() => {
    console.log("pag eventos entrou no useEffect");
  }, []);

  const handleSubmit = async () => {
    try {
      let uuid = undefined;
      let inicioT = new Date(inicio)
        .toISOString()
        .replace("T", " ")
        .replace(".000Z", "");
      let fimT = new Date(fim)
        .toISOString()
        .replace("T", " ")
        .replace(".000Z", "");
      console.log(nome);
      console.log(descricao);
      console.log(inicioT);
      console.log(fimT);
      console.log(preco);
      await criarEvento(uuid, {
        descricao: descricao,
        inicio: inicioT,
        fim: fimT,
        nome: nome,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containerEventos">
      <HeaderPerfil
        commerces={commerces}
        setUuid={setUuid}
      />
      <div className="divTituloEvento">
        <h1>
          <BsCalendarCheck size={35} /> Eventos
        </h1>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            justifyContent: "end",
            height: "auto",
            display: "flex",
            marginTop: "-8.5vh",
          }}
        >
          <Fab
            color="primary"
            aria-label="add"
            style={{ width: "50px", height: "50px" }}
            onClick={() => setOpenModal(true)}
          >
            <BsPlusCircleFill size={25} style={{zIndex:1}}/>
          </Fab>
        </Box>
      </div>
      <div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <ModalEventos />
        </Modal>
      </div>

      <div className="evento">
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />
        <CardEventos />

      </div>
    </div>
  );
}

export default function PagEventos() {
  const [uuid, setUuid] = useState();
  return (
    <UuidContext.Provider value={uuid}>
      <App setUuid={setUuid} />
    </UuidContext.Provider>
  );
}
