import { Link, useNavigate, redirect, useLoaderData } from "react-router-dom";
import CommerceHomeList from "../../components/CommerceHomeList";
import { getPlacesOwn } from "../../services/login";


import "./styles.css"

export async function loader() {
  let placefetch = await getPlacesOwn();
  console.log(placefetch);
  if(placefetch < 1){
    return redirect("/cadastro/estabelecimento");
  }
  return placefetch;
}

export default function CommenceHome() {
  const commerces = useLoaderData();

  return(
    <>
      <CommerceHomeList data={commerces}/>
    </>
  )
}