import React from "react"
import styles from '../modalEvento/style.css'


export default function Modal({ isOpen, setModalOpen, children}) {
  if(isOpen) {
    return (
      <div className="divPai">
        <button onClick={setModalOpen}>fechar</button>
        {children}
      </div>
    )
  }

  return null
}