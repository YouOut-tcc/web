import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BiEdit } from "react-icons/bi";
import Fab from "@mui/material/Fab";
import InputB from "../../components/Inputs/InputB";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { criarEvento } from "../../services/commerce";
import eventos from "../../assets/events.png";
import TextField from "@mui/material/TextField";
import { BsPlusCircleFill } from "react-icons/bs";
import UuidContext from "../../contexts/uuidCommerceContext";
import { useReducerInputs } from "../../hooks/Inputs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "./style.css";

// colocar os useStates aqui
// fazer a função de enviar
// fazer as validaçãoes
let now = new Date().toISOString();

function beforeMaskedValueChange(newState, oldState, userInput) {
  let { value } = newState;
  let selection = newState.selection;
  let cursorPosition = selection ? selection.start : null;

  console.log(value);
  console.log(selection);
  console.log(cursorPosition);

  // keep minus if entered by user
  let money = `R$ ${Number(value / 100)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  return {
    money,
    selection,
  };
}

const initialState = [
  {
    label: "Título do evento",
    name: "email",
  },
  {
    label: "Inicio",
    name: "senha",
    type: "datetime-local",
    // value: now,
  },
  {
    label: "Fim",
    name: "senha",
    type: "datetime-local",
  },
  {
    label: "Valor",
    name: "senha",
    // value: "00,00",
    // mask: "R$ *********",
    maskChar: " ",
    // beforeMask: beforeMaskedValueChange,
  },
  {
    label: "Descrição do evento",
    multiline: true,
  },
];

// problemas não pensados, duplicação de imagem e de eventos

export default function ModalEventos({ setModalOpen }) {
  const [state, onChange, setError, clearErrors] =
    useReducerInputs(initialState);

  const [selectedIMG, setSelectedIMG] = useState();

  const uuid = useContext(UuidContext);

  const regexGetValue = /([0-9]+(\.[0-9]+)+),[0-9][0-9]/g;

  // verificar se o inicio é superior a data atual, o mesmo para o fim
  // não deixar cadastrar um evento com o mesmo inicio e fim
  // não exite uma medida para não permitir cadastra o mesmo evento

  // verificar caso não seja possivel cadastra o evento, e mostrar para o usuario
  // mostrar e fechar a modal caso o cadastro do evento seja realizado

  // não é possivel fechar a modal apatir daqui
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valor = state[3].value;
    valor = valor.slice(3);

    let inicio = new Date(state[1].value);
    let fim = new Date(state[2].value);

    if (isNaN(inicio) || isNaN(fim)) {
      console.log("datas invalidads")
      return;
    }

    // if (validateInputsEmpty(login, setError)) return;

    inicio = inicio.toISOString().replace("T", " ").replace(".000Z", "");

    fim = fim.toISOString().replace("T", " ").replace(".000Z", "");

    let eventoForm = new FormData();

    // console.log(selectedIMG == selectedImage.image)

    let evento = {
      nome: state[0].value,
      inicio: inicio,
      fim: fim,
      valor: parseFloat(valor.replace(/\./g, "").replace(",", "")) / 100,
      descricao: state[4].value,
    };
    eventoForm.append("image", selectedIMG);
    eventoForm.append('nome', evento.nome);
    eventoForm.append('inicio', evento.inicio);
    eventoForm.append('fim', evento.fim);
    eventoForm.append('valor', evento.valor);
    eventoForm.append('descricao', evento.descricao);

    clearErrors();

    console.log(eventoForm);

    try {
      await criarEvento(uuid, eventoForm);
      // setModalOpen(false);
    } catch (error) {
      console.log(error.constructor.name);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Use FileReader para ler o arquivo como uma URL de dados
      const reader = new FileReader();

      reader.onloadend = () => {
        // Quando a leitura estiver completa, atualize o estado com a URL da imagem
        setSelectedIMG(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onChangeMoney = (e, key) => {
    let inputValue = e.replace(/[^\d]/g, "");
    if (inputValue.length > 8) {
      inputValue = inputValue.slice(0, 8);
    }

    inputValue = parseFloat(inputValue) / 100;
    const valorFormatado = inputValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      // minimumFractionDigits: 2,
    });
    onChange(valorFormatado, key);
  };

  return (
    <>
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="modalEventoBody">
        <div className="inputTitulo">
          <div id="modalEventInputTitle">
            <InputB index={0} state={state} onChange={onChange} />
          </div>
          <div id="modalEventInputDates">
            <InputB index={1} state={state} onChange={onChange} />
            <InputB index={2} state={state} onChange={onChange} />
          </div>
          <div id="modalEventInputMoney">
            <InputB index={3} state={state} onChange={onChangeMoney} />
          </div>
        </div>
        <div className="divImage">
          <CardMedia
            component="img"
            image={selectedIMG? selectedIMG: eventos}
            alt="Paella dish"
            sx={{ width: "25vw", height: "14.06vw" }} // ~16:9
          />
          {/* <input type="file" hidden /> */}

          {/* <BsPlusCircleFill
              size={30}
              color="--var(secondary-color)"
              containerElement='label'
              // style={{ marginTop: "35vh", marginLeft: "2vh" }}
            >
              <input type="file" />
            </BsPlusCircleFill> */}

          <Button variant="contained" component="label">
            <BsPlusCircleFill
              size={30}
              color="--var(secondary-color)"
              containerElement="label"
              // style={{ marginTop: "35vh", marginLeft: "2vh" }}
            />
            <input type="file" hidden accept=".jpg, .jpeg, .png" onChange={handleImageChange}/>
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "auto",
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <InputB index={4} state={state} onChange={onChange} />
      </div>
      <div className="divSalvar">
        <button className="btnSalvarEvento" type="submit">
          Salvar Evento
        </button>
      </div>
      </form>
    </>
    // <>
    //   {/* <h1
    //     style={{
    //       width: "auto",
    //       height: "auto",
    //       fontSize: "3vh",
    //       fontWeight: "bold",
    //       margin: "1vh",
    //       textAlign: "center",
    //     }}
    //   >
    //     Evento
    //   </h1> */}
    //   <div className="inputTitulo">

    //       <InputB index={0} state={state} onChange={onChange} />
    //       <InputB index={1} state={state} onChange={onChange} />
    //       <InputB index={2} state={state} onChange={onChange} />

    //     {/* <TextField
    //       required
    //       id="outlined-required"
    //       label={"Data"}
    //       type="date"
    //       variant="outlined"
    //       InputLabelProps={{ shrink: true, style: { height: "auto" } }}
    //       className="inputDate"
    //       style={{ width: "11vw", marginLeft: "2vh", height: "auto" }}
    //     />
    //     <TextField
    //       required
    //       id="outlined-required"
    //       label={"Horas"}
    //       type="time"
    //       variant="outlined"
    //       InputLabelProps={{ shrink: true, style: { height: "auto" } }}
    //       className="inputDate"
    //       style={{ width: "8vw", marginLeft: "2vh", height: "auto" }}
    //     />
    //     <TextField
    //       required
    //       id="outlined-required"
    //       label={"Valor"}
    //       variant="outlined"
    //       InputLabelProps={{ shrink: true, style: { height: "auto" } }}
    //       className="inputDate"
    //       style={{ width: "5vw", marginLeft: "2vh", height: "auto" }}
    //     /> */}
    //   </div>

    //   <div className="divImage">
    //     <CardMedia
    //       component="img"
    //       image={eventos}
    //       alt="Paella dish"
    //       sx={{ width: "50vh" }}
    //     />
    //     <BsPlusCircleFill
    //       size={30}
    //       color="--var(secondary-color)"
    //       style={{ marginTop: "35vh", marginLeft: "2vh" }}
    //     />
    //   </div>

    //   {/* <TextField
    //     required
    //     id="outlined-required"
    //     label={"Descrição do evento"}
    //     variant="outlined"
    //     InputLabelProps={{ shrink: true, style: { height: "auto" } }}
    //     className="inputDate"
    //     style={{
    //       width: "55vw",
    //       marginLeft: "2vh",
    //       height: "auto",
    //       marginTop: "2vh",
    //     }}
    //   /> */}
    //   <InputB index={3} state={state} onChange={onChange} />
    //   <div className="divSalvar">
    //     <button className="btnSalvarEvento">Salvar Evento</button>
    //   </div>
    // </>
  );
}
