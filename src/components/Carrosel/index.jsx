import { useState, useEffect } from "react";
import comercio1 from "../../img/comercio1.jpg";
import comercio2 from "../../img/comercio2.jpg";
import comercio3 from "../../img/comercio3.jpg";
import CardMedia from "@mui/material/CardMedia";
import { BsPlusCircleFill } from "react-icons/bs";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { BiEdit } from "react-icons/bi";
import Modal from "../modalA";
import ModalImagens from "../BannerModal";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";
register();

export default function Carrosel({ uuid }) {
  const [slidePerView, setSlidePerView] = useState(3);
  const [openModalImagens, setOpenModalImagens] = useState(false);
  const [openModalInfos, setOpenModalInfos] = useState(false);

  const data = [
    comercio1,
    comercio2 ,
    comercio3,

        "https://blog.decorlumen.com.br/wp-content/uploads/2020/09/restaurante_4.jpg",

        "https://static.wixstatic.com/media/a52447_0cc2649656014001b99a392992bfdef2.jpg/v1/fit/w_2500,h_1330,al_c/a52447_0cc2649656014001b99a392992bfdef2.jpg",
  ];

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
    <div className="carrosel">
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
            setOpenModalImagens(true);
          }}
        >
          <BsPlusCircleFill size={30} />
        </Fab>
        <Fab
          color="primary"
          aria-label="edit"
          onClick={() => {
            setOpenModalInfos(true);
          }}
        >
          <BiEdit size={30} />
        </Fab>
      </Box>

      <div className="divSlide">
        <Swiper
          slidesPerView={slidePerView}
          navigation={{ clickable: true }}
          autoplay={true}
          autoplayTimeout={5}
          className="slider"
          style={{
            // marginLeft: "1%",
            paddingLeft: "3.5vw",
          }}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                width: "28.3vw",
                height: "15.7vw",
              }}
            >
              <CardMedia
                component="img"
                image={item}
                alt="Paella dish"
                sx={{
                  width: "28.3vw",
                  height: "15.7vw",
                  borderRadius: "20px",
                  marginLeft: "0vw",
                }} // ~16:9
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Modal
          isOpen={openModalImagens}
          setModalOpen={() => setOpenModalImagens(!openModalImagens)}
          title={"Editar Imagens"}
        >
          <ModalImagens setModalOpen={setOpenModalImagens} images={data}/>
        </Modal>
        <Modal
          isOpen={openModalInfos}
          setModalOpen={() => setOpenModalInfos(!openModalInfos)}
          title={"Editar Imformações"}
        >
          {/* <ModalEventos setModalOpen={setOpenModal} /> */}
        </Modal>
      </div>
    </div>
  );
}
