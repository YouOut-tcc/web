import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BiEdit } from "react-icons/bi";
import Fab from "@mui/material/Fab";
import InputB from "../../components/Inputs/InputB";
import eventos from "../../assets/events.png";
import TextField from "@mui/material/TextField";
import { BsPlusCircleFill } from "react-icons/bs";
import UuidContext from "../../contexts/uuidCommerceContext";
import { useReducerInputs } from "../../hooks/Inputs";

// colocar os useStates aqui
// fazer a função de enviar
// fazer as validaçãoes

const initialState = [
  {
    label: "Título do evento",
    name: "email",
  },
  {
    label: "Data e Hora",
    name: "senha",
    type: "datetime-local",
  },
  {
    label: "Valor",
    name: "senha",
  },
];

export default function ModalEventos() {
  const [state, onChange, setError, clearErrors] =
    useReducerInputs(initialState);

  const uuid = useContext(UuidContext);

  return (
    <>
      <h1
        style={{
          width: "auto",
          height: "auto",
          fontSize: "3vh",
          fontWeight: "bold",
          margin: "1vh",
          textAlign: "center",
        }}
      >
        Evento
      </h1>
      <div className="inputTitulo">
        
          <InputB index={0} state={state} onChange={onChange} />
          <InputB index={1} state={state} onChange={onChange} />
          <InputB index={2} state={state} onChange={onChange} />
        

        {/* <TextField
          required
          id="outlined-required"
          label={"Data"}
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true, style: { height: "auto" } }}
          className="inputDate"
          style={{ width: "11vw", marginLeft: "2vh", height: "auto" }}
        />
        <TextField
          required
          id="outlined-required"
          label={"Horas"}
          type="time"
          variant="outlined"
          InputLabelProps={{ shrink: true, style: { height: "auto" } }}
          className="inputDate"
          style={{ width: "8vw", marginLeft: "2vh", height: "auto" }}
        />
        <TextField
          required
          id="outlined-required"
          label={"Valor"}
          variant="outlined"
          InputLabelProps={{ shrink: true, style: { height: "auto" } }}
          className="inputDate"
          style={{ width: "5vw", marginLeft: "2vh", height: "auto" }}
        /> */}
      </div>

      <div className="divImage">
        <CardMedia
          component="img"
          image={eventos}
          alt="Paella dish"
          sx={{ width: "50vh" }}
        />
        <BsPlusCircleFill
          size={30}
          color="--var(secondary-color)"
          style={{ marginTop: "35vh", marginLeft: "2vh" }}
        />
      </div>

      <TextField
        required
        id="outlined-required"
        label={"Descrição do evento"}
        variant="outlined"
        InputLabelProps={{ shrink: true, style: { height: "auto" } }}
        className="inputDate"
        style={{
          width: "55vw",
          marginLeft: "2vh",
          height: "auto",
          marginTop: "2vh",
        }}
      />
      <div className="divSalvar">
        <button className="btnSalvarEvento">Salvar Evento</button>
      </div>
    </>
  );
}
