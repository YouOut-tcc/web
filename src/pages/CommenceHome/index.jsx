import { redirect, useRouteLoaderData } from "react-router-dom";
import CommerceHomeList from "../../components/CommerceHomeList";
import { getPlacesOwn } from "../../services/login";

import "./styles.css";

export default function CommenceHome() {
  const commerces = useRouteLoaderData("commerceRoot");
  console.log("carregando os places");

  return (
    <>
      <CommerceHomeList data={commerces} />
    </>
  );
}
