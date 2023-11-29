import api from "./api";
import { AxiosError } from "axios";
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
      resposta,
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

async function criarEvento(uuid, evento) {
  try {
    await api.post(`/estabelecimento/manage/${uuid}/eventos/`, evento);
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

async function getEventos(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/eventos/`);
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

async function placeCadastro(data) {
  try {
    const res = await api.post("/estabelecimento/manage/request", data);

    return res;
  } catch (error) {
    console.log(error.constructor.name);
    if (error instanceof AxiosError) {
      console.log("erro no cadastro");
      console.log(error.response.status);
      console.log(error.response.data.message);
      throw error;
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
      throw error;
    }
  }
}

async function criarCupom(uuid, cupom) {
  try {
    let result = await api.post(`/estabelecimento/manage/${uuid}/cupons/`, cupom);
    return result.data
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

async function getCupom(uuid) {
  try {
    let res = await api.get(`/estabelecimento/places/${uuid}/cupons/`);
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

export {
  getAvaliacoes,
  getCommerceInfo,
  responderAvaliacao,
  placeCadastro,
  criarEvento,
  getEventos,
  criarCupom,
  getCupom,
};
