import api from "./api";
import { AxiosError } from "axios";

async function checkLoginToken(token) {
  try {
    let res = await api.post("/", null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    return res;
  } catch (error) {
    console.log(error.constructor.name)
    if (error instanceof AxiosError){
      console.log("erro no fetch do cep")
      console.log(error.response.status)
      console.log(error.response.data.message)
    } else if (error instanceof ReferenceError){
      console.log(error.message)
    }
  }
}

async function userLogin(data) {
  try {
    const res = await api.post("/estabelecimento/login", data)

    return res.data.token;
  } catch (error) {
    console.log(error.constructor.name)
    if (error instanceof AxiosError){
      console.log("erro no login")
      console.log(error.response.status)
      console.log(error.response.data.message)
    } else if (error instanceof ReferenceError){
      console.log(error.message)
    }
  }
}

async function userCadastro(data) {
  try {
    const res = await api.post("/estabelecimento/cadastro", data)

    return res;
  } catch (error) {
    console.log(error.constructor.name)
    if (error instanceof AxiosError){
      console.log("erro no cadastro")
      console.log(error.response.status)
      console.log(error.response.data.message)
    } else if (error instanceof ReferenceError){
      console.log(error.message)
    }
  }
}

async function getPlacesOwn(data) {
  try {
    const res = await api.get("/estabelecimento/manage/places");

    return res.data;
  } catch (error) {
    console.log(error.constructor.name)
    if (error instanceof AxiosError){
      console.log("erro no get places own")
      console.log(error.response.status)
      console.log(error.response.data.message)
    } else if (error instanceof ReferenceError){
      console.log(error.message)
    }
  }
}


export { checkLoginToken, userLogin, userCadastro, getPlacesOwn }