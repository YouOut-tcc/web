import { useState, useContext, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import HeaderPerfil from "../../components/headerPerfil";
import UuidContext from "../../contexts/uuidCommerceContext";

function App({setUuid}) {
  const commerces = useRouteLoaderData("commerceRoot");
  const uuid = useContext(UuidContext);

  return (
    <div>
      <HeaderPerfil commerces={commerces} setUuid={setUuid}/>
      <div className="containerNotificacao">
        <IoMdNotifications className="iconeNotificacao" />
        <h1>Notificações (10)</h1>
      </div>
      <div className="divPaiNotificaco">
        <div className="divNotificacao">
          <h1>Usuário do YouOut Usuário Usuário do YouOut</h1>
          <h2>
            Fez um comentario Fez um comentario Fez um comentario Fez um
            comentario Fez um comentario Fez um comentario Fez um comentario
          </h2>
        </div>

        <div className="divNotificacao">
          <h1>Usuário do YouOut</h1>
          <h2>Fez um comentario</h2>
        </div>

        <div className="divNotificacao">
          <h1>Usuario do YouOut</h1>
          <h2>Fez um comentario</h2>
        </div>

        <div className="divNotificacao">
          <h1>Usuário do YouOut</h1>
          <h2>Fez um comentario</h2>
        </div>

        <div className="divNotificacao">
          <h1>Usuário do YouOut</h1>
          <h2>Fez um comentario</h2>
        </div>

        <div className="divNotificacao">
          <h1>Usuário do YouOut</h1>
          <h2>Fez um comentario</h2>
        </div>
      </div>
      <h1 className="linkVisualizar">Visualizar todas...</h1>
    </div>
  );
}

export default function PgNotificacao() {
  const [uuid, setUuid] = useState();
  return(
    <UuidContext.Provider value={uuid}>
      <App setUuid={setUuid}/>
    </UuidContext.Provider>
  )
}
