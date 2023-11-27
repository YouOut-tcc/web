import { BsCalendarCheck } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { useRouteLoaderData } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CardEventos from "../../components/cardEventos/cardEvento";
import HeaderPerfil from "../../components/headerPerfil";
import Modal from "../../components/modalA";
import { getEventos } from "../../services/commerce";
import ModalEventos from "./modalEventos";
import UuidContext from "../../contexts/uuidCommerceContext";
import styles from "../pagEventos/style.css";
import zIndex from "@mui/material/styles/zIndex";

function App({ setUuid }) {
  const [openModal, setOpenModal] = useState(false);
  const [eventos, setEventos] = useState([]);

  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  // // funcionado parcialmente
  // useEffect(()=>{
  //   console.log("pegando o uuid do useContext");
  //   console.log(uuid);
  // },[uuid]);

  const eventosFetch = async () => {
    let eventoFetch = await getEventos(uuid);
    console.log(eventoFetch);
    setEventos(eventoFetch);
  };

  // // se o usuario ficar mudando o uuid, vai acontecer um ataque ddos no backend
  useEffect(() => {
    if (uuid) {
      console.log("pag eventos entrou no useEffect");
      eventosFetch();
    }
  }, [uuid]);

  return (
    <div className="containerEventos">
      <HeaderPerfil commerces={commerces} setUuid={setUuid} />
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
            <BsPlusCircleFill size={25} style={{ zIndex: 1 }} />
          </Fab>
        </Box>
      </div>
      <div>
        <Modal
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          title={"Evento"}
        >
          <ModalEventos setModalOpen={setOpenModal} />
        </Modal>
      </div>

      <div className="evento">
        {eventos &&
          eventos.map((evento, index) => (
            <CardEventos key={index} title={evento.nome} valor={evento.valor}/>
          ))}
      </div>
    </div>
  );
}

export default function PagEventos() {
  const [uuid, setUuid] = useState();
  return (
    <UuidContext.Provider value={uuid}>
      <App setUuid={setUuid} uuid={uuid} />
    </UuidContext.Provider>
  );
}
