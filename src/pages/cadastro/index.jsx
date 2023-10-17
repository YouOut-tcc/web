import React from "react";
import "./style.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";
import InputA from "../../components/Inputs/InputA";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [fanatyName, setFantasyName] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSignupForm = (event) => {
    event.preventDefault();
    console.log({ name, fanatyName, email, cnpj, password, confPassword });
  };

  return (
    <div className="divGeral">
      <Logo />

      <div id="container-b">
        <h1 className="title">Cadastre-se</h1>
        <form className="form" onSubmit={handleSignupForm}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "65ch",
                
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="textField formCad">
              <TextField
                required
                id="outlined-required"
                label="Nome"
                
                // defaultValue="Insira nome de Registro"
              />
              <TextField
                required
                id="outlined-required"
                label="Nome Fantasia"
                // defaultValue="Insira nome comercial"
              />
              <TextField
                required
                id="outlined-required"
                label="CNPJ"
                // defaultValue="Insira um CNPJ válido"
              />
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                // defaultValue="Insira seu melhor e-mail"
              />
              <TextField
                required
                id="outlined-required"
                label="Senha"
                // defaultValue="Insira uma senha alfanumérica"
              />
              <TextField
                required
                id="outlined-required"
                label="Confirme sua Senha"
                // defaultValue="Confirme a sua senha"
              />
            </div>
            <div className="botoesCad">
            <Button
              variant="contained"
              style={{backgroundColor: "#8200A8"}}
              
            >
              Cadastrar
            </Button>
            <Button
              variant="contained"
              style={{backgroundColor: "#8200A8"}}
            >
              Voltar
            </Button>
            </div>
          </Box>
          
          
        </form>
       
      </div>
    </div>
  );
}
