import React from "react";
import "./styles.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";

import { userLogin } from "../../services/login";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import {FcGoogle} from "react-icons/fc"
// import { MuiThemeProvider } from '@mui/material/styles';


export default function Login() {
  const [login, setLogin] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const navigate = useNavigate()

  const handleSignupForm = async (event) => {
    event.preventDefault();
    console.log({ name: login, password });
    
    try {
      let token = await userLogin({email: login, password});
      if(!token){
        return null;
      }
      sessionStorage.setItem("loginToken", token);
      return navigate("/home");
    } catch (error) {
      console.log(error.constructor.name)
    }

  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#8200A8",
      },
      secondary: {
        main: "#fe0472",
      },
    },
  });

  return (
    <div className="divGeral">
      <Logo />
      {/* <MuiThemeProvider theme={theme}> */}

      <div id="container-b">
        <h1 className="title">Faça Login</h1>
        <form className="formLogin" onSubmit={handleSignupForm}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                width: "100%",
                color: purple,
                marginTop: "2%",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="E-mail / CNPJ"
                className="inputEmail inputLogin"
                onChange={(e) => {setLogin(e.target.value)}}

                // defaultValue="Insira nome de Registro"
              />
              <TextField
                required
                id="outlined-required"
                label="Senha"
                className="inputSenha inputLogin"
                onChange={(e) => {setPassword(e.target.value)}}
                // defaultValue="Insira uma senha alfanumérica"
              />
            </div>
            <div className="links">
              <Link to="/recuperarSenha" id="linkSenha">
                Esqueceu a senha? Clique aqui.
              </Link>
              <FcGoogle/>
              <Link to="/cadastro">Cadastre-se</Link>
            </div>
          </Box>
        </form>
        <div className="botoes">
          <Link>
            <Button 
              variant="contained"
              style={{backgroundColor: "#8200A8"}}
              onClick={handleSignupForm}>
              Entrar
            </Button>
          </Link>
          <Link to={"/"}>
            <Button 
              variant="contained"
              style={{backgroundColor: "#8200A8"}}>
              Voltar
            </Button>
          </Link>
        </div>
        
      </div>
      {/* </MuiThemeProvider> */}
      
    </div>
  );
}
