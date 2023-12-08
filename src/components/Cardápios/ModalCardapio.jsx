import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import InputB from "../../components/Inputs/InputB";
import { uploadCardapio } from "../../services/commerce";
import { BsPlusCircleFill } from "react-icons/bs";
import UuidContext from "../../contexts/uuidCommerceContext";
import { useReducerInputs } from "../../hooks/Inputs";
import "./style.css";
import TipoCupom from "../../components/cardCupom/tipoCupom";
import { useParams, useLocation } from "react-router";

import Fab from "@mui/material/Fab";
import { AiOutlineCheck } from 'react-icons/ai';

export default function ModalCardapio({ setModalOpen, images }) {

  const [selectedIMGPreview, setSelectedIMGPreview] = useState(images[0]);
  const [selectedIMG, setSelectedIMG] = useState();

  let { uuid } = useParams();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const preview = URL.createObjectURL(file);

    setSelectedIMG(file);
    setSelectedIMGPreview(preview);
  };

  const handleSubmit = async () => {
    let form = new FormData();
    form.append("cardapio", selectedIMG);

    try {
      await uploadCardapio(uuid, form);
      setModalOpen(false);
    } catch (error) {
      console.log(error.constructor.name);
    }
    // Add your logic to handle the image submission

  };

  return (
    <>
      <div className="divBtnAdd">
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
      
      <div className="image-preview-container">
        {selectedIMGPreview ? (
          <CardMedia
            component="img"
            image={selectedIMGPreview}
            alt="Image Preview"
            sx={{ width: "30vh", height: "60vh", display: 'flex', justifyContent: 'center' }}
          />
        ) : (
          <p style={{fontSize: "3vh", textAlign:"center", marginTop:"10vh"}}>Nenhum cardápio cadastrado para essa unidade. Clique em  <BsPlusCircleFill size={30}color={"#8200A8"}/> para cadastrar.</p>
        )}
      </div>

      {selectedIMG && (
        <div className="divButtonsAdd">
          <Fab
            style={{
              width: "25vh",
              borderRadius: "5px",
              backgroundColor: '#8200A8',
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#8200A8',  
              },
            }}
            aria-label="salvar imagens"
            onClick={handleSubmit}
          >
            <AiOutlineCheck size={30} style={{ marginRight: "8px" }} /> Salvar cardápio
          </Fab>
        </div>
      )}
    </>
  );
}
