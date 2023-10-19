import './style.css';
import Logo from '../../img/minilogoYouOut.jpg';
import CommerceLogo from '../../img/commerceLogo.png';
import {LiaStarSolid} from 'react-icons/lia';
import {GoPaperAirplane} from 'react-icons/go';

export default function ComentarioHeader({ length }) {
  return (
    <div className="divComentario">
      <h1>{length} Comentarios</h1>
      <h1>
        <LiaStarSolid className="iconeEstrela" />
        4,87
      </h1>
    </div>
  );
}
