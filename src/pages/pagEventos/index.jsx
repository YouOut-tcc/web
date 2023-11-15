import styles from "../pagEventos/style.css";
import Header from "../../components/Header";
import HeaderPerfil from "../../components/headerPerfil";
import { BsCalendarCheck } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "../../components/modalCupons";
import { BiTimeFive } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import CommerceLogo from "../../img/commerceLogo.png";
import { Link } from "react-router-dom";
import CardEventos from "../../components/cardEventos/cardEvento";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { BiEdit } from "react-icons/bi";

function PagEventos() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="containerEventos">
      <HeaderPerfil/>
      <div className="divTituloEvento">
        <h1><BsCalendarCheck size={35}/> Eventos</h1>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            justifyContent: "end",
            height: "auto",
            display: "flex",
            marginTop: "-8.5vh"
          }}
        >
          <Fab color="primary" aria-label="add" style={{width: "50px", height: "50px"}} onClick={() => setOpenModal(true)}>
            <BsPlusCircleFill size={25}  />
          </Fab>
        </Box>
      </div>
      <div className="divPaiModalConteudoEventos">
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <div className="divModalConteudoEventos">
            <h1 className="tituloEvento">Evento De Fulano</h1>

            <div className="divModalConteudoImgEventos">
              <img src={CommerceLogo} className="imgLogoEvento" />
            </div>

            <div className="divModalConteudoInputsEventos">
              <h1>Detalhes</h1>
              <BsCalendarCheck /> <input type="text" id="inicio" />
              <BiTimeFive />
              <input type="text" id="fim" />
              <RiMoneyDollarCircleFill /> <input type="text" id="descricao" />
              <button className="btnSalvarEvento">Salvar Evento</button>
            </div>
          </div>
        </Modal>
      </div>

      <div className="evento">
        <CardEventos />
      </div>
    </div>
  );
}

export default PagEventos;
