import React from "react"
import styles from '../modalCupons/style.css'
import {IoClose} from 'react-icons/io5'
import {BsPlusCircleFill} from 'react-icons/bs'


export default function Modal({ isOpen, setModalOpen, children}) {
  if(isOpen) {
    return (
        <div className="divPaiModal">
          <div className="divModalButtons">
            <div className="divModalButtonFechar">
              {children}
              <button onClick={setModalOpen} className="btnModalFechar"><IoClose className="iconeBtnModalFechar"/></button>
            </div>
          
            <div className="divModalButtonAdd">
              <button className="btnModalAdd"><BsPlusCircleFill className="iconeBtnModalAdd"/></button>
            </div>
          </div>
        </div>
    )
  }

  return null
}