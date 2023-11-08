import './style.css';
import Logo from '../../img/minilogoYouOut.jpg';
import CommerceLogo from '../../img/commerceLogo.png';
import {LiaStarSolid} from 'react-icons/lia';
import { AiFillStar } from "react-icons/ai";


export default function ComentarioHeader({ length }) {
  return (
    <div className="divComentario">
      <h1>{length} Comentários</h1>
      <h1>
      <AiFillStar size={30} color="var(--secondary-color)" />
        {"  "}
        4,47
      </h1>
    </div>
  );
}
