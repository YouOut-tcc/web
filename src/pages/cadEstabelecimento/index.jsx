import React from "react";
import "./style.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";
import InputA from "../../components/Inputs/InputA";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link, redirect, useNavigate, useHistory   } from "react-router-dom";
import { height } from "@mui/system";
import InputMask from "react-input-mask";
import InputB from "../../components/Inputs/InputB";
import InputBSelect from "../../components/Inputs/InputB/select/index";
import { placeCadastro } from "../../services/commerce";

export default function CadastroEstabelecimento() {
  const [nomeFantasia, setNomeFantasia] = useState(undefined);
  const [nomeEmpresarial, setNomeEmpresarial] = useState(undefined);
  const [cnpj, setCnpj] = useState(undefined);
  const [emailComercial, setEmailComercial] = useState(undefined);
  const [telefoneComercial, setTelefoneComercial] = useState(undefined);
  const [cep, setCep] = useState(undefined);
  const [numero, setNumero] = useState(undefined);
  const [categoria, setCategoria] = useState(undefined);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);

  const [nomeFantasiaError, setNomeFantasiaError] = useState("");
  const [nomeEmpresarialError, setNomeEmpresarialError] = useState(false);
  const [cnpjError, setCnpjError] = useState(false);
  const [emailComercialError, setEmailComercialError] = useState(false);
  const [telefoneComercialError, setTelefoneComercialError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [numeroError, setNumeroError] = useState(false);
  const [categoriaError, setCategoriaError] = useState(false);
  const [latitudeError, setLatitudeError] = useState(false);
  const [longitudeError, setLongitudeError] = useState(false);
  const [telaAnterior, setTelaAnterior] = useState("");

  const navigate = useNavigate();
  

  const handleVoltar = () => {
    navigate(-1); 
  };


  const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const handleSignupForm = async (event) => {
    event.preventDefault();

    setNomeFantasiaError("");
    setNomeEmpresarialError(false);
    setCnpjError(false);
    setEmailComercialError(false);
    setTelefoneComercialError(false);
    setCepError(false);
    setNumeroError(false);
    setCategoriaError(false);
    setLatitudeError(false);
    setLongitudeError(false);

    if (nomeFantasia == undefined || nomeFantasia.trim() == 0) {
      setNomeFantasiaError("coloque alguma coisa");
    }

    if (nomeFantasia == undefined || nomeFantasia == "") {
      setNomeFantasiaError("coloque alguma coisa");
    }

    if (nomeEmpresarial == undefined || nomeEmpresarial == "") {
      setNomeEmpresarialError(true);
    }

    if (cnpj == undefined || cnpj == "") {
      setCnpjError(true);
    }

    if (emailComercial == undefined || emailComercial == "") {
      setEmailComercialError(true);
    }

    if (telefoneComercial == undefined || telefoneComercial == "") {
      setTelefoneComercialError(true);
    }

    if (cep == undefined || cep == "") {
      setCepError(true);
    }

    if (numero == undefined || numero == "") {
      setNumeroError(true);
    }

    if (categoria == undefined || categoria == "") {
      setCategoriaError(true);
    }

    if (latitude == undefined || latitude == "") {
      setLatitudeError(true);
    }

    if (longitude == undefined || longitude == "") {
      setLongitudeError(true);
    }

    const latitudefloat = parseFloat(latitude);
    const longitudefloat = parseFloat(longitude);
    console.log({
      latitudefloat,
      longitudefloat,
    });
    // console.log({
    //   nomeFantasia,
    //   nomeEmpresarial,
    //   cnpj,
    //   emailComercial,
    //   telefoneComercial,
    //   cep,
    //   numero,
    //   categoria,
    //   latitude,
    //   longitude,
    // });
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
        descricao: categoria,
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
            "& .MuiTextField-root": {
              m: 1,
              width: "65ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="textField formCad">
            <InputB
              value={nomeFantasia}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              setValue={setNomeFantasia}
              inputError={nomeFantasiaError}
              errorMessage={nomeFantasiaError}
              label="Nome Fantasia"
            />

            <InputB
              value={nomeEmpresarial}
              InputLabelProps={{ shrink: true }}
              setValue={setNomeEmpresarial}
              inputError={nomeEmpresarialError}
              errorMessage={nomeEmpresarialError}
              label="Nome Empresarial"
              // onChange={(e) => {
              //   setNomeEmpresarial(e.target.value);
              // }}
            />
            {nomeEmpresarialError && <p>erro</p>}

            <InputB
              value={cnpj}
              InputLabelProps={{ shrink: true }}
              setValue={setCnpj}
              inputError={cnpjError}
              errorMessage={cnpjError}
              label="CNPJ"
              mask="99.999.999/9999-99"
            />

            <InputB
              required
              id="outlined-required"
              InputLabelProps={{ shrink: true }}
              label="E-mail Comercial"
              // onChange={(e) => {
              //   setEmailComercial(e.target.value);
              // }}
            />
            {emailComercialError && <p>erro</p>}

            <InputMask
              mask="(99)99999-9999"
              InputLabelProps={{ shrink: true }}
              value={telefoneComercial}
              disabled={false}
              maskChar="_"
              // onChange={(e) => {
              //   setTelefoneComercial(e.target.value);
              // }}
            >
              {() => (
                <InputB
                  required
                  id="outlined-required"
                  label="Telefone Comercial"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            </InputMask>
            {telefoneComercialError && <p>erro</p>}

            <InputMask
              mask="99999-999"
              InputLabelProps={{ shrink: true }}
              value={cep}
              disabled={false}
              maskChar="_"
              onChange={(e) => {
                setCep(e.target.value);
              }}
            >
              {() => (
                <InputB
                  required
                  id="outlined-required"
                  label="CEP"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            </InputMask>
            {cepError && <p>erro</p>}

            <InputB
              required
              InputLabelProps={{ shrink: true }}
              id="outlined-required"
              label="Número"
              onChange={(e) => {
                setNumero(e.target.value);
              }}
            />
            {numeroError && <p>erro</p>}

            <InputBSelect
              value={categoria}
              setValue={setCategoria}
              label="Categoria/Segmento"
              error={categoriaError}
   className="selectBox"
            />

            <InputB
              required
              InputLabelProps={{ shrink: true }}
              id="outlined-required"
              label="Latitude"
              onChange={(e) => {
                setLatitude(e.target.value);
              }}
            />
            {latitudeError && <p>erro</p>}

            <InputB
              required
              InputLabelProps={{ shrink: true }}
              id="outlined-required"
              label="Longitude"
              onChange={(e) => {
                setLongitude(e.target.value);
              }}
            />
            {longitudeError && <p>erro</p>}
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
