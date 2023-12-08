import { useState, useContext, useEffect, useRef } from "react";
import { useRouteLoaderData } from "react-router-dom";
import HeaderPerfil from "../../components/headerPerfil";
import { useReducerInputs } from "../../hooks/Inputs";
import UuidContext from "../../contexts/uuidCommerceContext";
import CommerceContext from "../../contexts/commerceContext";
import InputB from "../../components/Inputs/InputB";
import "./style.css";
import Fab from "@mui/material/Fab";
import { BsPlusCircleFill } from "react-icons/bs";
import MenuPerfil from "../../components/MenuPerfil";
import logoComercio from "../../assets/logoComercio.png";
import CardMedia from "@mui/material/CardMedia";
import { updateIconImage, updateInfo } from "../../services/commerce";

const initialState = [
  // {
  //   label: "Nome do estabelecimento",
  //   name: "email",
  // },
  {
    label: "Telefone",
    name: "email",
  },
  {
    label: "Celular",
    name: "email",
  },
];

// quando o usuario passa o mouse em cima do icone de modificar o icone
// aparecer um lapis, talzes
function App({ setUuid, setCommerce }) {
  const [state, onChange, setError, clearErrors] =
    useReducerInputs(initialState);
  const [selectedIMG, setSelectedIMG] = useState();
  const [selectedIMGPreview, setSelectedIMGPreview] = useState();
  const [oldInputValues, setOldInputValues] = useState();
  const [icon, setIcon] = useState();

  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);
  const commerce = useContext(CommerceContext);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Aciona o clique no input de arquivo quando o botão é clicado
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    setSelectedIMG(file);
    setSelectedIMGPreview(preview);
  };

  const handleSubmit = () => {
    let change = false;
    let telefone = state[0].value;
    let celular = state[1].value;

    let oldValuesInputs = Object.entries(oldInputValues);
    oldValuesInputs.forEach((element, index) => {
      if (element[1] != state[index].value) {
        change = true;
      }
    });
    if (selectedIMGPreview) {
      // enviar a imagem
      console.log("imagem para atualizar");
      let form = new FormData();
      form.append("icon", selectedIMG);
      console.log(uuid);
      updateIconImage(uuid, form);
      setIcon(selectedIMGPreview);
      setSelectedIMGPreview(undefined);
    }
    if (!change) {
      console.log("não mudou nada");
    } else {
      console.log("mudou alguma coisa");
      let data = {
        telefone,
        celular,
      };
      updateInfo(uuid, data);
    }
  };

  const fetchPlaceInfos = () => {};

  useEffect(() => {
    console.log(commerce);
    if (commerce) {
      if (commerce.icon_url) {
        setIcon(commerce.icon_url);
      } else {
        setIcon(logoComercio);
      }
      setOldInputValues({
        telefone: commerce.telefone,
        celular: commerce.celular,
      });
      onChange(commerce.telefone, 0);
      onChange(commerce.celular, 1);
    }
  }, [uuid]);

  return (
    <>
      <HeaderPerfil
        commerces={commerces}
        setUuid={setUuid}
        setCommerceInfo={setCommerce}
      />
      <h1 style={{ margin: "2vh", fontSize: "2vh" }}>
        Alterar informações do perfil
      </h1>
      <button
        style={{
          background: "none",
          borderWidth: 0,
          borderRadius: "50%",
        }}
        onClick={handleButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
        <CardMedia
          className="commerceListImg"
          component="img"
          image={selectedIMGPreview ? selectedIMGPreview : icon}
          sx={{
            backgroundColor: "var(--primary-color)",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            alignContent: "center",
            marginBottom: "2vh",
            marginTop: "2vh",
            justifyContent: "center",
            justifySelf: "center",
            marginLeft: "5vh",
          }}
        />
        <button className="btnSalvarCupom">
          Adicionar/Alterar
        </button>
      </button>

      <div className="divInfo">
        <InputB index={0} state={state} onChange={onChange} />
        <InputB index={1} state={state} onChange={onChange} />
        {/* <InputB index={2} state={state} onChange={onChange} /> */}
      </div>
      <div className="divSalvarPerfil">
        <button className="btnSalvarCupom" type="submit" onClick={handleSubmit}>
          Salvar Informações
        </button>
      </div>
    </>
  );
}

export default function Perfil() {
  const [uuid, setUuid] = useState();
  const [commerce, setCommerce] = useState();
  return (
    <UuidContext.Provider value={uuid}>
      <CommerceContext.Provider value={commerce}>
        <App setUuid={setUuid} setCommerce={setCommerce} />
      </CommerceContext.Provider>
    </UuidContext.Provider>
  );
}
