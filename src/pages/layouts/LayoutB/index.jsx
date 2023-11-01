import Header from "../../../components/Header";
import { Outlet } from "react-router-dom";

import "../../../styles/main.css";

// kk tem que arrumar isso, o overflow esta bugado, foi usado margin-bottom para tentar corrigir

export default function LayoutB() {
  return (
    <div className="root">
      <Header/>
      <div id="main">
        <div id="conteinerMain">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
