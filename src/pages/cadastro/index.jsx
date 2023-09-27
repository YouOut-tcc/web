import React from "react";
import "./style.css";
import Logo from "../../components/LogoInicial";
import { useState } from "react";
import InputA from "../../components/Inputs/InputA";

export default function Cadastro() {

  const [name, setName] = useState('')
  const [fanatyName, setFantasyName] = useState('')
  const [email, setEmail] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const handleSignupForm = (event) =>{
    event.preventDefault()
    console.log({ name, fanatyName, email, cnpj, password, confPassword })
  }

  return (
    <div className="divGeral">
      <Logo/>

      <div id="container-b">
        <h1 className="title">Cadastre-se</h1>
          <form className="form" onSubmit={handleSignupForm}>
            {/* <label className="label">
            Nome Comercial:
            </label> 
            <input 
              className="comercialInput"
              type="text" 
              required
              value={name}
              onChange={(event) => setName(event.target.value)} */}
            {/* /> */}
            <InputA nome="Nome Comercial" id="nomeC"/>
            <InputA nome="Nome Fantasia" id="nomeF"/>

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
