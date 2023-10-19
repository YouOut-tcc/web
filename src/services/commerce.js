import api from './api';
import {AxiosError} from 'axios';
// import { BackendAcessError } from '../error/user';

async function getCommerceInfo(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/informacoes`);

    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function getAvaliacoes(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/avaliacoes`);

    return res.data;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

async function responderAvaliacao(uuid, id, resposta) {
  try {
    await api.post(`/estabelecimento/manage/${uuid}/responder/${id}`, {
      resposta
    });

  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log(error.response.status);
      console.log(error.response.data.message);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    }
  }
}

export { getAvaliacoes, getCommerceInfo, responderAvaliacao }