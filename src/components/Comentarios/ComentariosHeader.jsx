import "./style.css";
import Logo from "../../img/minilogoYouOut.jpg";
import CommerceLogo from "../../img/commerceLogo.png";
import { LiaStarSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
import { Rating } from "@mui/material";

export default function ComentarioHeader({ length, nota }) {
  console.log(nota)
  return (
    <div className="divComentario">
      <h1>{length} Comentários</h1>
      <h1>
        <Rating
          name="disabled"
          disabled
          value={nota}
          sx={{ color: "#fe0472" }}
          style={{ opacity: 1 }}
        />
      </h1>
    </div>
  );
}
