import React, { useState } from "react";
import "./styles.css";
import Logo from "../../components/LogoInicial";
import { userLogin } from "../../services/login";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import InputB from "../../components/Inputs/InputB";
import theme from "../../styles/Global";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignupForm = async (event) => {
    event.preventDefault();
    console.log({ name: login, password });

    try {
      let token = await userLogin({ email: login, password });
      if (!login || !password) {
        setError("Por favor, preencha todos os campos");
        return;
      }
      if (!token) {
        setError("Login falhou. Tente novamente.");
        return null;
      }
      sessionStorage.setItem("loginToken", token);
      return navigate("/home");
    } catch (error) {
      console.log(error.constructor.name);
    }
  };

  return (
    <div className="containerInfos">
      <h1 className="title">Login</h1>
      <form className="formLogin" onSubmit={handleSignupForm}>
        <div className="inputA">
          <InputB value={login} setValue={setLogin} label="E-mail / CNPJ" />
        </div>

        <div className="inputB">
          <InputB
            value={password}
            setValue={setPassword}
            type="password"
            label="Senha"
          />
        </div>
        <div className="btns">
          <Link>
            <button onClick={handleSignupForm} className="btnEntrar">
              Entrar
            </button>
          </Link>
        </div>
        <Link to={"/"} className="esqueceuSenha">
          Esqueceu a senha?
        </Link>
        <div className="OR">
          ━━━━━━━ OU ━━━━━━━ <br></br>
          <Link className="linkPg">
            <div className="googleButton">
              <FcGoogle className="icon-google" />
              Faça login com o Google
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}
