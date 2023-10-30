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
import { height } from "@mui/system";
import InputMask from "react-input-mask";
import InputB from "../../components/Inputs/InputB";

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

  const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const handleSignupForm = (event) => {
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
    if (regexEmail.test(emailComercial)) {
      alert("qualquer coisa");
    }
  };

  return (
    <div className="divGeral">
      <Logo />

      <div id="container-b">
        <h1 className="title">Cadastre-se seu Estabelecimento</h1>
        <form className="form" onSubmit={handleSignupForm} >
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
                setValue={setNomeFantasia}
                inputError={nomeFantasiaError}
                errorMessage={nomeFantasiaError}
                label="Nome Fantasia"
              />

              <TextField
                required
                id="outlined-required"
                label="Nome Empresarial"
                onChange={(e) => {
                  setNomeEmpresarial(e.target.value);
                }}
              />
              {nomeEmpresarialError && <p>erro</p>}

              <InputMask
                mask="99.999.999/9999-99"
                value={cnpj}
                disabled={false}
                maskChar="_"
                onChange={(e) => {
                  setCnpj(e.target.value);
                }}
              >
                {() => (
                  <TextField required id="outlined-required" label="CNPJ" />
                )}
              </InputMask>
              {cnpjError && <p>erro</p>}

              <TextField
                required
                id="outlined-required"
                label="E-mail Comercial"
                onChange={(e) => {
                  setEmailComercial(e.target.value);
                }}
              />
              {emailComercialError && <p>erro</p>}

              <InputMask
                mask="(99)99999-9999"
                value={telefoneComercial}
                disabled={false}
                maskChar="_"
                onChange={(e) => {
                  setTelefoneComercial(e.target.value);
                }}
              >
                {() => (
                  <TextField
                    required
                    id="outlined-required"
                    label="Telefone Comercial"
                  />
                )}
              </InputMask>
              {telefoneComercialError && <p>erro</p>}

              <InputMask
                mask="99999-999"
                value={cep}
                disabled={false}
                maskChar="_"
                onChange={(e) => {
                  setCep(e.target.value);
                }}
              >
                {() => (
                  <TextField required id="outlined-required" label="CEP" />
                )}
              </InputMask>
              {cepError && <p>erro</p>}

              <TextField
                required
                id="outlined-required"
                label="Número"
                onChange={(e) => {
                  setNumero(e.target.value);
                }}
              />
              {numeroError && <p>erro</p>}

              <TextField
                required
                id="outlined-required"
                label="Categoria/Segmento"
                onChange={(e) => {
                  setCategoria(e.target.value);
                }}
              />
              {categoriaError && <p>erro</p>}

              <TextField
                required
                id="outlined-required"
                label="Latitude"
                onChange={(e) => {
                  setLatitude(e.target.value);
                }}
              />
              {latitudeError && <p>erro</p>}

              <TextField
                required
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
    </div>
  );
}
