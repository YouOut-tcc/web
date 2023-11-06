import React from "react";
import "./style.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";
import InputA from "../../components/Inputs/InputA";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { height } from "@mui/system";
import { userCadastro, userLogin } from "../../services/login";

export default function Cadastro() {
  const [name, setName] = useState(undefined);
  const [fanatyName, setFantasyName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [telefone, setTelefone] = useState(undefined);
  const [cnpj, setCnpj] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confPassword, setConfPassword] = useState(undefined);

  const navigate = useNavigate()

  const handleSignupForm = async (event) => {
    event.preventDefault();
    console.log({ name, email, password });

    try {
      await userCadastro({ name, email, password });
      let token = await userLogin({ email, password });
      if(!token){
        return null;
      }
      sessionStorage.setItem("loginToken", token);
      return navigate("estabelecimento");
    } catch (error) {
      console.log(error.constructor.name)
    }
  };

  return (


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
                InputLabelProps={{ shrink: true }}
                id="outlined-required"
                label="Nome Completo"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <TextField
                required
                id="outlined-required"
                label="E-mail"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                // defaultValue="Insira seu melhor e-mail"
              />

              <TextField
                required
                id="outlined-required"
                InputLabelProps={{ shrink: true }}
                label="Celular"
                onChange={(e) => {
                  setTelefone(e.target.value);
                }}
              />

              <TextField
                required
                id="outlined-required"
                label="Senha"
                type="password"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                // defaultValue="Insira uma senha alfanumérica"
              />
              <TextField
                required
                id="outlined-required"
                label="Confirme sua Senha"
                type="password"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => {
                  setConfPassword(e.target.value);
                }}
                // defaultValue="Confirme a sua senha"
              />
            </div>
            <div className="botoesCad">
              <Button
                variant="contained"
                InputLabelProps={{ shrink: true }}
                style={{ backgroundColor: "#8200A8", height: "5vh" }}
                onClick={handleSignupForm}
              >
                Cadastrar
              </Button>

              <Link to={"/"}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8200A8", height: "5vh" }}
                >
                  Voltar
                </Button>
              </Link>
            </div>
          </Box>
        </form>
      </div>

  );
}
