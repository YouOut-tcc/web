import { Outlet, Link, redirect } from "react-router-dom";
import Header from "../../../components/Header";
import Logo from "../../../components/LogoInicial";
import { getPlacesOwn } from "../../../services/login";

import "../../../styles/main.css";

// kk tem que arrumar isso, o overflow esta bugado, foi usado margin-bottom para tentar corrigir

export async function loader() {
  let placefetch = await getPlacesOwn();
  console.log(placefetch);
  if(placefetch < 1){
    return redirect("/cadastro/estabelecimento");
  }
  return placefetch;
}

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
