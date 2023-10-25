import styles from '../pagRecuperarSenha/style.css';
import Logo from "../../components/LogoInicial";
import InputA from "../../components/Inputs/InputA";
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import { useState } from "react";

function Home() {
  const [email, setEmail] = useState(undefined);

  const handleSignupForm = (event) => {
    event.preventDefault();
    console.log({ email});
  };



  return(
    <div className="divGeralRecupSenha">
    <Logo/>

    <div id="RecupSenha-Container-b">
    
      <h1 className="recupSenhaTitle">Recuperar senha</h1>
      <form className="formRecupSenha" onSubmit={handleSignupForm}>
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
                label="E-mail"
                onChange={(e) => {setEmail(e.target.value)}}
                
                // defaultValue="Insira nome de Registro"
              />
            </div>
        
            <div className='divBotaoRecupSenha'>
            <Button
                variant="contained"
                style={{backgroundColor: "#8200A8", height:"5vh"}}
                onClick={handleSignupForm}
              >
              Enviar link para login
              </Button>
            </div>
          </Box>
          <Link to='/'><p className='voltaLogin'>Voltar ao login</p> </Link>
        </form>       
    </div>
  </div>

  )
  }
  
  export default Home;