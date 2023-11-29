import { useState, useContext, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { BsPlusCircleFill } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import Modal from "../../components/modalA";
import { BiTimeFive } from "react-icons/bi";
import LogoTicket from "../../img/logoTicket.png";
import HeaderPerfil from "../../components/headerPerfil";
import UuidContext from "../../contexts/uuidCommerceContext";
import "./style.css";
import ModalCupom from "./modalCupom";
import CardCupom from "../../components/cardCupom/cardCupom";

function App({setUuid}) {
  const [openModal, setOpenModal] = useState(false);
  const [cupom, setCupom] = useState([]);

  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  return (
    <div className="containerCupons">
      <HeaderPerfil commerces={commerces} setUuid={setUuid} />
       <div className="divTituloCupom">
      <h1>
          <BsCalendarCheck size={35} /> Cupons
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
      <div className="divPaiModalConteudoCupons">
      <Modal
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          title={"Cupom"}
        >
          <ModalCupom setModalOpen={setOpenModal} />
        </Modal>
      </div>
      <div className="evento">
        {cupom && cupom.length > 0 ? (
          cupom.map((cupom, index) => (
            <CardCupom key={index} title={cupom.nome} valor={cupom.valor} imagem={cupom.image}/>
          ))
        ):(
          <p style={{fontSize: "4vh", textAlign:"center", margin:"auto"}}>Nenhum cupom cadastrado para essa unidade. Clique em  <BsPlusCircleFill size={30}color={"#8200A8"}/> para cadastrar.</p>
        )}
      </div>
    </div>
  );
}

export default function PagCupons() {
  const [uuid, setUuid] = useState();
  return(
    <UuidContext.Provider value={uuid}>
      <App setUuid={setUuid}/>
    </UuidContext.Provider>
  )
}
