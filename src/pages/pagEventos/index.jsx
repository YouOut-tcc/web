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
import InputB from "../../components/Inputs/InputB";
import { criarEvento } from "../../services/commerce";
import ModalEventos from "./modalEventos";

function convertDateToUTC(date) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); }

function PagEventos() {
  const [openModal, setOpenModal] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async () => {
    try {
      let uuid = undefined
      let inicioT = new Date(inicio).toISOString().replace("T", " ").replace(".000Z", "")
      let fimT = new Date(fim).toISOString().replace("T", " ").replace(".000Z", "")
      console.log(nome);
      console.log(descricao);
      console.log(inicioT);
      console.log(fimT);
      console.log(preco);
      await criarEvento(uuid, {descricao: descricao, inicio: inicioT, fim: fimT, nome: nome})
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containerEventos">
      <HeaderPerfil />
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
          <Fab
            color="primary"
            aria-label="add"
            style={{ width: "50px", height: "50px" }}
            onClick={() => setOpenModal(true)}
          >
            <BsPlusCircleFill size={25} />
          </Fab>
        </Box>
      </div>
      <div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <ModalEventos/>
        </Modal>
      </div>

      <div className="evento">
        <CardEventos />
      </div>
    </div>
  );
}

export default PagEventos;
