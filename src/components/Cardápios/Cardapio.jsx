import { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import { BsPlusCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Modal from "../modalA";
import ModalCardapio from "./ModalCardapio";
import { getCardapio } from "../../services/commerce";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

register();

export default function Carrosel({cardapios}) {
  const [slidePerView, setSlidePerView] = useState(3);
  const [openModalInfos, setOpenModalInfos] = useState(false);
  const [images, setImages] = useState([]);
  let { uuid } = useParams();

  const fetchCardapio = async () => {
    let images = await getCardapio(uuid);
    console.log(images);
    setImages(images);
  };

  useEffect(() => {
    fetchCardapio();
  }, [uuid]);

  useEffect(() => {
    function tamanhoTela() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }

    tamanhoTela();

    window.addEventListener("resize", tamanhoTela);

    return () => {
      window.removeEventListener("resize", tamanhoTela);
    };
  }, []);

  return (
    <div className="divCardapio">
      <h1>Cardápio</h1>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          justifyContent: "end",
          height: "auto",
          display: "flex",
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            setOpenModalInfos(true);
          }}
        >
          <BsPlusCircleFill size={30} />
        </Fab>
      </Box>

      <CardMedia
        component="img"
        src={images.length > 0? images[0]:require("../../assets/menu.png")}
        sx={{
          width: "28.3vw",
          height: "15.7vw",
          borderRadius: "20px",
          marginLeft: "30vw",
        }}
      />
      <div>
        <Modal
          isOpen={openModalInfos}
          setModalOpen={() => setOpenModalInfos(!openModalInfos)}
          title={"Visualizar ou alterar cardápio"}
        >
          <ModalCardapio
            setModalOpen={() => setOpenModalInfos(!openModalInfos)}
            images={images ? images : []}
          />
        </Modal>
      </div>
    </div>
  );
}
