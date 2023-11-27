import React from "react";
import "./style.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";
import InputA from "../../components/Inputs/InputA";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link, redirect, useNavigate, useHistory } from "react-router-dom";
import InputB from "../../components/Inputs/InputB";
import { placeCadastro } from "../../services/commerce";
import { useReducerInputs } from "../../hooks/Inputs";
import { validateInputsEmpty } from "../../helpers/validator/inputs";

const cadastroInitialState = [
  {
    label: "Nome Fantasia",
    name: "email",
  },
  {
    label: "Nome Empresarial",
    name: "senha",
  },
  {
    label: "CNPJ",
    mask: "99.999.999/9999-99",
    name: "senha",
  },
  {
    label: "E-mail Comercial",
    name: "senha",
  },
  {
    label: "Telefone Comercial",
    mask: "(99)99999-9999",
    name: "senha",
  },
  {
    label: "CEP",
    mask: "99999-999",
    name: "senha",
  },
  {
    label: "Número",
    name: "senha",
  },
  {
    label: "Categoria/Segmento",
    categoria: true,
    name: "senha",
  },
  {
    label: "Latitude",
    name: "senha",
  },
  {
    label: "Longitude",
    name: "senha",
  },
];

export default function CadastroEstabelecimento() {
  const [cadastro, onChange, setError, clearErrors] =
    useReducerInputs(cadastroInitialState);

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const handleSignupForm = async (event) => {
    event.preventDefault();

    let nomeFantasia = cadastro[0].value;
    let nomeEmpresarial = cadastro[1].value;
    let cnpj = cadastro[2].value;
    let emailComercial = cadastro[3].value;
    let telefoneComercial = cadastro[4].value;
    let cep = cadastro[5].value;
    let numero = cadastro[6].value;
    let descricao = cadastro[7].value;
    let latitude = cadastro[8].value;
    let longitude = cadastro[9].value;

    clearErrors();

    if (validateInputsEmpty(cadastro, setError)) return;

    const latitudefloat = parseFloat(latitude);
    const longitudefloat = parseFloat(longitude);
    console.log({
      latitudefloat,
      longitudefloat,
    });

    console.log({
      nomeFantasia,
      nomeEmpresarial,
      cnpj,
      emailComercial,
      telefoneComercial,
      cep,
      numero,
      descricao,
      latitude,
      longitude,
    });

    if (!regexEmail.test(emailComercial)) {
      return alert("erro no email");
    }

    try {
      await placeCadastro({
        nome: nomeFantasia,
        nome_empresarial: nomeEmpresarial,
        cnpj: cnpj.replace(/[^\d]/g, ""),
        emailComercial,
        telefone: telefoneComercial.replace(/[^\d]/g, ""),
        celular: telefoneComercial.replace(/[^\d]/g, ""),
        cep: cep.replace(/[^\d]/g, ""),
        numero,
        descricao: descricao,
        latitude,
        longitude,
      });
      return navigate("/home");
    } catch (error) {
      console.log(error.constructor.name);
    }
  };

  return (
    <div id="container-b">
      <h1 className="title">Cadastre seu estabelecimento</h1>
      <form className="form" onSubmit={handleSignupForm}>
        <Box
          component="form"
          sx={{
            width: "70%",
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
            <InputB index={5} state={cadastro} onChange={onChange} />
            <InputB index={6} state={cadastro} onChange={onChange} />
            <InputB index={7} state={cadastro} onChange={onChange} />
            <InputB index={8} state={cadastro} onChange={onChange} />
            <InputB index={9} state={cadastro} onChange={onChange} />
          </div>
          <div className="botoesCad">
            <Button
              variant="contained"
              style={{ backgroundColor: "#8200A8", height: "5vh" }}
              onClick={handleSignupForm}
            >
              Cadastrar
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#8200A8", height: "5vh" }}
              onClick={handleVoltar}
            >
              Voltar
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}
