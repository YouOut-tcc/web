import React from "react";
import "./style.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";
import InputA from "../../components/Inputs/InputA";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

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
                color: purple,
                alignContent: "center",
                justifyItems: "center",
                outlineColor: "#8200A8",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Nome"
                sx={{

                  outlineColor: "#8200A8",

                }}
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
            <Button
              variant="contained"
              sx={{ marginTop: 50, marginLeft: 28, color: purple }}
            >
              Cadastrar
            </Button>
            <Button
              variant="contained"
              sx={{ marginTop: 3, marginLeft: 30, color: purple }}
            >
              Voltar
            </Button>
          </Box>
          {/* <InputA nome="Nome Comercial" id="nomeC"/>
            <InputA nome="Nome Fantasia" id="nomeF"/>
            <InputA nome="CNPJ" id="cnpj"/>
            <InputA nome="E-mail" id="email"/>
            <InputA nome="Confirme seu e-mail" id="confEmail"/>
            <InputA nome="Senha" id="senha"/>
            <InputA nome="Confirme sua senha" id="confSenha"/> */}

          {/* <br/><br/>
            Nome Fantasia: <input 
              type="text" 
              placeholder="Insira o nome fantasia de seu empreendimento" 
              size={50}
              value={fanatyName}
              onChange={(event) => setFantasyName(event.target.value)}
            />
            <br/><br/>
              E-mail: <input 
              type="email" 
              placeholder="Insira seu melhor e-mail de contato" 
              size={50} 
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br/><br/>
            CNPJ: <input 
              type="text" 
              placeholder="Insira o CNPJ" 
              size={50} 
              required
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
            <br/><br/>
            Senha: <input 
              type="password" 
              placeholder="Insira um senha forte" 
              size={50} 
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br/><br/>
            Confirme a senha: <input 
              type="password" 
              placeholder="Confirme sua senha" 
              size={50} 
              required
              value={confPassword}
              onChange={(event) => setConfPassword(event.target.value)}
            />
            </label>
            <br/><br/> */}
        </form>
        {/* <button id="botaoEnviar" type="submit">Enviar</button>
            <button id="botaoVoltar" type="submit">Voltar</button> */}
      </div>
    </div>
  );
}
