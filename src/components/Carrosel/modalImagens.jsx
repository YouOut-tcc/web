import CardMedia from "@mui/material/CardMedia";
import comercio1 from "../../img/comercio1.jpg";

export default function ModalImagens({ setModalOpen }) {
  return (
    <div className="conteinerImageSelector">
          <CardMedia
                component="img"
                image={comercio1}
                alt="Paella dish"
                sx={{
                  width: "28.3vw",
                  height: "15.7vw",
                  borderRadius: "20px",
                  marginLeft: "0vw",
                }} // ~16:9
              />
    </div>
  );
}
