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
import InputB from "../../components/Inputs/InputB";
import { useReducerInputs } from "../../hooks/Inputs";

const cadastroInitialState = [
  {
    label: "Nome Completo",
    name: "nome",
    type: undefined
  },
  {
    label: "E-Mail",
    name: "email",
    type: "email",
  },
  {
    label: "Celular",
    name: "telefone",
    type: undefined

  },
  {
    label: "Senha",
    name: "senha",
    type: "password",
  },
  {
    label: "Confirme sua Senha",
    name: "confirma a senha",
    type: "password",
  },
];

export default function Cadastro() {
  const [cadastro, onChange, setError, clearErrors] =
    useReducerInputs(cadastroInitialState);

  const navigate = useNavigate();

  const handleSignupForm = async (event) => {
    event.preventDefault();

    let name = cadastro[0].value;
    let email = cadastro[1].value;
    let celular = cadastro[2].value;
    let password = cadastro[3].value;
    let confsenha = cadastro[4].value;

    console.log({ name, email, password });

    try {
      await userCadastro({ name, email, password });
      let token = await userLogin({ email, password });
      if (!token) {
        return null;
      }
      sessionStorage.setItem("loginToken", token);
      return navigate("estabelecimento");
    } catch (error) {
      console.log(error.constructor.name);
    }
  };

  return (
    <div id="container-b">
      <h1 className="title">Cadastre-se</h1>
      <form className="form" onSubmit={handleSignupForm}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%"
          }}
          component="form"
          sx={{
            // display: "flex",
            // alignItems: "center",
            // flexDirection: "column",
            // width: "75%",
            "& .MuiTextField-root": {
              m: 1,
              width: "65ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="textField formCad">
            <InputB index={0} state={cadastro} onChange={onChange} />
            <InputB index={1} state={cadastro} onChange={onChange} />
            <InputB index={2} state={cadastro} onChange={onChange} />
            <InputB index={3} state={cadastro} onChange={onChange} />
            <InputB index={4} state={cadastro} onChange={onChange} />
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
