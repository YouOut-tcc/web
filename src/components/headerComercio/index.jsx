import styles from "../headerComercio/style.css";
import { AiFillStar } from "react-icons/ai";

function HeaderComercio() {
  return (
    // <div className="conteinerInfoHeader">
    <div className="titulo">
      <h1>Comércio 1</h1>
      <h3>Estr. Kizaemon Takeuti, 1987</h3>
      <h3>Pirajussara, Taboão da Serra - SP</h3>
      <h3>06775-002</h3>
      <h3
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          margin: "1vh",
          marginTop: "-4vh"
        }}
      >
      </h3>
    </div>
    // </div>
  );
}

{
  /* </div>
<div className="divBorda">
  <div className="divTitulo">
    <div className="titulo">
      <h1>Lorem Ipsum</h1>
      <h3>Rua lorem, 0000 - 12345-678</h3>
    </div>
    <div className='checkin'>
                <h3><BsFillPeopleFill className='iconeCheckin'/>Check-in</h3>
            </div>
  </div>
</div> */
}
export default HeaderComercio;
