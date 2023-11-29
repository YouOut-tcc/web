import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import InputB from "../../components/Inputs/InputB";
import { criarCupom } from "../../services/commerce";
import cupom from "../../assets/cupom.png";
import { BsPlusCircleFill } from "react-icons/bs";
import UuidContext from "../../contexts/uuidCommerceContext";
import { useReducerInputs } from "../../hooks/Inputs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import TipoCupom from "../../components/cardCupom/tipoCupom";

let now = new Date().toISOString();

function beforeMaskedValueChange(newState, oldState, userInput) {
  let { value } = newState;
  let selection = newState.selection;
  let cursorPosition = selection ? selection.start : null;

  console.log(value);
  console.log(selection);
  console.log(cursorPosition);

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
    label: "Título do cupom",
    name: "email",
  },
  {
    label: "Inicio",
    name: "senha",
    type: "datetime-local",
  },
  {
    label: "Fim",
    name: "senha",
    type: "datetime-local",
  },
  {
    label: "Valor/Percentual",
    name: "senha",
    maskChar: " ",
  },
  {
    label: "Condições do cupom",
    multiline: true,
  },
  {
    label: "Tipo",
    name: "senha",
  },
];

export default function ModalCupom({ setModalOpen }) {
  const [state, onChange, setError, clearErrors] =
    useReducerInputs(initialState);
  const [tipoDesconto, setTipoDesconto] = useState("reais");

  const [selectedIMG, setSelectedIMG] = useState();

  const uuid = useContext(UuidContext);

  const regexGetValue = /([0-9]+(\.[0-9]+)+),[0-9][0-9]/g;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valor = state[3].value;
    valor = valor.slice(3);
    let tipoDesconto = state[6].value;

    let inicio = new Date(state[1].value);
    let fim = new Date(state[2].value);

    if (isNaN(inicio) || isNaN(fim)) {
      console.log("datas invalidads");
      return;
    }

    inicio = inicio.toISOString().replace("T", " ").replace(".000Z", "");

    fim = fim.toISOString().replace("T", " ").replace(".000Z", "");

    let cupomForm = new FormData();

    let cupom = {
      nome: state[0].value,
      inicio: inicio,
      fim: fim,
      valor: parseFloat(valor.replace(/\./g, "").replace(",", "")) / 100,
      descricao: state[4].value,
      tipoDesconto: state[5].value,
    };
    cupomForm.append("image", selectedIMG);
    cupomForm.append("nome", cupom.nome);
    cupomForm.append("inicio", cupom.inicio);
    cupomForm.append("fim", cupom.fim);
    cupomForm.append("valor", cupom.valor);
    cupomForm.append("descricao", cupom.descricao);
    cupomForm.append("tipo", cupom.tipoDesconto);

    clearErrors();

    console.log(cupomForm);

    try {
      await criarCupom(uuid, cupomForm);
    } catch (error) {
      console.log(error.constructor.name);
    }
  };

  const handleImageChange = (cupom) => {
    const file = cupom.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
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
    });
    onChange(valorFormatado, key);
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="modalCupomBody">
          <div className="inputTitulo">
            <div id="modalCupomInputTitle">
              <InputB index={0} state={state} onChange={onChange} />
            </div>
            <div id="modalCupomInputDates">
              <InputB index={1} state={state} onChange={onChange} />
              <InputB index={2} state={state} onChange={onChange} />
            </div>

            <div id="modalCupomInputMoney">
              <div style={{ marginRight: "2%", backgroundColor: "var(--primary-color)" }}>
                
                <select
                  value={state[5].value}
                  onChange={(e) => onChange(e.target.value, 5)}
                  className="selectCupom"
                >
                  <option value="null"></option>
                  <option value="reais">Reais</option>
                  <option value="porcentagem">Porcentagem</option>
                </select>
              </div>
              <InputB index={3} state={state} onChange={onChangeMoney} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
          </div>

          <div className="divImage">
            <CardMedia
              component="img"
              image={selectedIMG ? selectedIMG : cupom}
              alt="Paella dish"
              sx={{ width: "25vw", height: "14.06vw" }}
            />
            <Button
              variant="contained"
              component="label"
              sx={{ alignItems: "flex-end", margin: "2vh 0 0 42vh" }}
            >
              <BsPlusCircleFill
                size={35}
                color="--var(secondary-color)"
                containerElement="label"
              />
              <input
                type="file"
                hidden
                accept=".jpg, .jpeg, .png"
                onChange={handleImageChange}
              />
            </Button>
          </div>
        </div>
        <div className="divCategoriaCupom">
          <TipoCupom />
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
          <button className="btnSalvarCupom" type="submit">
            Salvar Cupom
          </button>
        </div>
      </form>
    </>
  );
}
