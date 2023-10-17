import styles from '../pagEventos/style.css';
import Header from '../../components/Header';
import HeaderPerfil from '../../components/headerPerfil';
import {BsCalendarCheck} from 'react-icons/bs'
import {BsPlusCircleFill} from 'react-icons/bs'
import {useState} from 'react';
import Modal from '../../components/modalCupons';
import {BiTimeFive} from 'react-icons/bi'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import CommerceLogo from '../../img/commerceLogo.png';
import { Link } from 'react-router-dom';

function PagEventos() {
  const [openModal, setOpenModal] = useState(false)

  return(
      <div className='containerEventos'>
          {/* <Header/> */}
          <HeaderPerfil/>
          <div className='divTituloEvento'>
            <h1 className='tituloHeaderEvento' > Eventos</h1>   
            <BsCalendarCheck className='iconeEvento'/>
            <button className='btnAddEvento' onClick={() => setOpenModal(true)}><BsPlusCircleFill className='iconeAddEvento'/></button>
          </div>
          <div className='divPaiModalConteudoEventos'>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
              <div className='divModalConteudoEventos'>

                <h1 className='tituloEvento'>Evento De Fulano</h1>

                <div className='divModalConteudoImgEventos'>

                <img src={CommerceLogo}  className='imgLogoEvento'/>

                </div>

                <div className='divModalConteudoInputsEventos'>
                  <h1>Detalhes</h1>
                  <BsCalendarCheck/> <input type="text" id='inicio' />
                  <BiTimeFive/><input type="text" id='fim'/>
                  <RiMoneyDollarCircleFill/> <input type="text" id='descricao' />
                  <button className='btnSalvarEvento'>Salvar Evento</button>
                 
                </div>
                
              </div>
            </Modal>
          </div>

            <div className='evento'>
             
              <div className='cardEvento'>
                <h1 className='dadosEvento'>Evento Fulano de tal</h1>
                <h1>Detalhes:</h1>
                <ul>
                  <li>Dia xx/xx/xxxx</li>
                  <li>A partir de xxh</li>
                  <li>Valor do ingresso</li>
                </ul>
              </div>

              <div className='cardEvento'>
              <h1 className='dadosEvento'>Evento Fulano de tal </h1>
              <h1>Detalhes:</h1>
                <ul>
                  <li>Dia xx/xx/xxxx</li>
                  <li>A partir de xxh</li>
                  <li>Valor do ingresso</li>
                </ul>
              </div>

              <div className='cardEvento'>
              <h1 className='dadosEvento'>Evento Fulano de tal</h1>
              <h1>Detalhes:</h1>
                <ul>
                  <li>Dia xx/xx/xxxx</li>
                  <li>A partir de xxh</li>
                  <li>Valor do ingresso</li>
                </ul>
              </div>

              <div className='cardEvento'>
              <h1 className='dadosEvento'>Evento Fulano de tal</h1>
              <h1>Detalhes:</h1>
                <ul>
                  <li>Dia xx/xx/xxxx</li>
                  <li>A partir de xxh</li>
                  <li>Valor do ingresso</li>
                </ul>
              </div>

              <div className='cardEvento'>
              <h1 className='dadosEvento'>Evento Fulano de tal</h1>
              <h1>Detalhes:</h1>
                <ul>
                  <li>Dia xx/xx/xxxx</li>
                  <li>A partir de xxh</li>
                  <li>Valor do ingresso</li>
                </ul>
              </div>

              <div className='cardEvento'>
              <h1 className='dadosEvento'>Evento Fulano de tal</h1>
              <h1>Detalhes:</h1>
                <ul>
                  <li>Dia xx/xx/xxxx</li>
                  <li>A partir de xxh</li>
                  <li>Valor do ingresso</li>
                </ul>
              </div>

            </div>
        
      </div>
  )
  }
  
  export default PagEventos;