import React from "react";
import Logo from "../../assets/logotipo.png";

const styles = {
  logoInicial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
  },
  logo:{
    width: "25vw",
    height: "25vw",
    borderRadius: "50%",
  }
}

export default function Logoinicial() {
  return (
    <div className="layoutAConteiner_logo">
      <img style={styles.logo} src={Logo} alt="logo do app You Out" />
    </div>
  );
}
