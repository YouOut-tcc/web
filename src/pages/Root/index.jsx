import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

import "../../styles/main.css";

export default function Root() {
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
