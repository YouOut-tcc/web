import React from "react";
import styles from "../modalA/style.css";
import { IoClose } from "react-icons/io5";
import { BsPlusCircleFill } from "react-icons/bs";

export default function Modal({ isOpen, setModalOpen, children, title }) {
  title = "teste"
  if (isOpen) {
    return (
      <div className="divBackground">
          <div className="divModal">
            <div className="divModalFechar">
            <button onClick={setModalOpen} className="btnModalFechar">
              <IoClose className="iconeBtnModalFechar" />
            </button>
            <h1>{title}</h1>
            </div>
            <div className="divModalBody">{children}</div>
          </div>
      </div>
    );
  }

  return null;
}
