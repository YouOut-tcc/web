import { useState, useEffect } from "react";
import comercio1 from "../../img/comercio1.jpg";
import comercio2 from "../../img/comercio2.jpg";
import comercio3 from "../../img/comercio3.jpg";
import { BsPlusCircleFill } from "react-icons/bs";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { BiEdit } from "react-icons/bi";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";
register();

export default function Carrosel({uuid}) {
  const [slidePerView, setSlidePerView] = useState(3);

  const data = [
    { image: comercio1 },
    { image: comercio2 },
    { image: comercio3 },
    { image: "https://blog.decorlumen.com.br/wp-content/uploads/2020/09/restaurante_4.jpg" },
    {
      image:
        "https://static.wixstatic.com/media/a52447_0cc2649656014001b99a392992bfdef2.jpg/v1/fit/w_2500,h_1330,al_c/a52447_0cc2649656014001b99a392992bfdef2.jpg",
    },
    {
      image:
        "https://www.macedosrestaurante.com.br/imagens/slider/banner-home_002.jpg",
    },
    { image: "https://s2-oglobo.glbimg.com/MD1_gg8cx1FgBBx_ZIKBSci1YPA=/0x0:1361x907/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/5/B/5cdNh1RqeRocBOLQRs2g/adega-santiago-ambiente-credito-rodrigo-azevedo-8-1-.jpg" },
    {
      image:
        "https://a.cdn-hotels.com/gdcs/production107/d1469/cd36c828-5e95-440f-a8ca-2542627a6d67.jpg",
    },
    {
      image:
        "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/08/votre-brasserie.jpeg?w=1200&h=675&crop=1",
    },
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
        <Fab color="primary" aria-label="add">
          <BsPlusCircleFill size={30} />
        </Fab>
        <Fab color="primary" aria-label="edit">
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
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="Imagens Estabelecimento"
                className="sliderItem"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
