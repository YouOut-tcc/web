import { Outlet, Link } from "react-router-dom";
import Header from "../../../components/Header";
import Logo from "../../../components/LogoInicial";


import "../../../styles/main.css";

// kk tem que arrumar isso, o overflow esta bugado, foi usado margin-bottom para tentar corrigir

export default function LayoutB() {
  return (
    <div className="layoutBConteiner_A">
      <div className="layoutBConteinerMenu">
        <Header/>
      </div>

      <div className="layoutBConteiner_B">
        <Outlet />
      </div>
    </div>
  );
}
