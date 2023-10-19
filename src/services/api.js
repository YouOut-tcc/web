import axios from 'axios';
// dotenv

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws"
});

api.interceptors.request.use(async (config)=>{
  let token;
  try {
    token = sessionStorage.getItem("loginToken");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  } catch (error) {
    console.log("error on initial setup of a request: " +error.constructor.name);
  }
  return config;
})

api.interceptors.response.use(null, (error)=>{
  if(!error.response){
    // retorna o erro de backend
  }
  return Promise.reject(error);
})

export default api;
export {cepApi, api};