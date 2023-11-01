import { Outlet, Link } from "react-router-dom";
import Header from "../../../components/Header";
import Logo from "../../../components/LogoInicial";

import "../../../styles/main.css";

// kk tem que arrumar isso, o overflow esta bugado, foi usado margin-bottom para tentar corrigir

export default function LayoutA() {
  return (
    <div className="layoutAConteiner_main">
      <Logo />

      <div className="layoutAConteiner_body">
        <Outlet/>
      </div>
    </div>
  );
}
