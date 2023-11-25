import { useState, useContext, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsPlusCircleFill } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import Modal from "../../components/modalA";
import { BiTimeFive } from "react-icons/bi";
import LogoTicket from "../../img/logoTicket.png";
import HeaderPerfil from "../../components/headerPerfil";
import UuidContext from "../../contexts/uuidCommerceContext";
import "./style.css";

function App({setUuid}) {
  const [openModal, setOpenModal] = useState(false);

  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  return (
    <div className="containerCupons">
      <HeaderPerfil commerces={commerces} setUuid={setUuid} />
      <div className="divTituloCupons">
        <h1 className="tituloHeaderCupons">Cupons</h1>
        <ImTicket className="iconeCupon" />
        <button className="btnAddCupons" onClick={() => setOpenModal(true)}>
          <BsPlusCircleFill className="iconeAddCupons" />
        </button>
      </div>
      <div className="divPaiModalConteudoCupons">
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <div className="divModalConteudoCupons">
            <h1 className="tituloCupom">Primeira Compra</h1>

            <div className="divModalConteudoImgCupons">
              <img src={LogoTicket} className="imgLogoCupom" />
              <div className="porcentagemCupom">
                <h1>30%</h1>
              </div>
              <div className="txtCupom">
                <h1>YouOut</h1>
              </div>
            </div>

            <div className="divModalConteudoInputsCupons">
              <h1>Condições</h1>
              <BsCalendarCheck /> <input type="text" />
              <BiTimeFive />
              <input type="text" />
              <RiMoneyDollarCircleFill /> <input type="text" />
              <button className="btnSalvarCupom">Salvar Cupom</button>
            </div>
          </div>
        </Modal>
      </div>

      <div className="divCupons">
        <div className="cardCupons">
          <h1 className="dadosCupons">Cupom primeira compra</h1>
          <br></br>
          <h1>Condições:</h1>
          <ul>
            <li>Apenas primeiras compras</li>
            <li>Expira em XX dias ...</li>
          </ul>
        </div>

        <div className="cardCupons">
          <h1 className="dadosCupons">Cupom primeira compra </h1>
          <br></br>
          <h1>Condições:</h1>
          <ul>
            <li>Apenas primeiras compras</li>
            <li>Expira em XX dias ...</li>
          </ul>
        </div>

        <div className="cardCupons">
          <h1 className="dadosCupons">Cupom primeira compra</h1>
          <br></br>
          <h1>Condições:</h1>
          <ul>
            <li>Apenas primeiras compras</li>
            <li>Expira em XX dias ...</li>
          </ul>
        </div>

        <div className="cardCupons">
          <h1 className="dadosCupons">Cupom primeira compra</h1>
          <br></br>
          <h1>Condições:</h1>
          <ul>
            <li>Apenas primeiras compras</li>
            <li>Expira em XX dias ...</li>
          </ul>
        </div>

        <div className="cardCupons">
          <h1 className="dadosCupons">Cupom primeira compra</h1>
          <br></br>
          <h1>Condições:</h1>
          <ul>
            <li>Apenas primeiras compras</li>
            <li>Expira em XX dias ...</li>
          </ul>
        </div>

        <div className="cardCupons">
          <h1 className="dadosCupons">Cupom primeira compra</h1>
          <br></br>
          <h1>Condições:</h1>
          <ul>
            <li>Apenas primeiras compras</li>
            <li>Expira em XX dias ...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PagCupons() {
  const [uuid, setUuid] = useState();
  return(
    <UuidContext.Provider value={uuid}>
      <App setUuid={setUuid}/>
    </UuidContext.Provider>
  )
}
