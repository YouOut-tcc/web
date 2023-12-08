import { useState, useEffect } from "react";
import comercio1 from "../../img/comercio1.jpg";
import comercio2 from "../../img/comercio2.jpg";
import comercio3 from "../../img/comercio3.jpg";
import CardMedia from "@mui/material/CardMedia";
import { BsPlusCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
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

import { getBannersImage } from "../../services/commerce";
import { register } from "swiper/element/bundle";
register();


export default function Carrosel() {
  const [slidePerView, setSlidePerView] = useState(3);
  const [openModalImagens, setOpenModalImagens] = useState(false);
  const [openModalInfos, setOpenModalInfos] = useState(false);
  const [images, setImages] = useState();

  let { uuid } = useParams();

  const fetchBanners = async () => {
    let images = await getBannersImage(uuid);
    console.log(images);
    setImages(images);
  }

  useEffect(() => {
    fetchBanners();
  },[uuid])

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
        {/* <Fab
          color="primary"
          aria-label="edit"
          onClick={() => {
            // setOpenModalInfos(true);
          }}
        > */}
          {/* <BiEdit size={30} />
        </Fab> */}
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
          {images &&
            images.map((item) => (
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
          title={"Adicionar Imagens"}
        >
          <ModalImagens setModalOpen={setOpenModalImagens} images={images? images:[]}/>
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
