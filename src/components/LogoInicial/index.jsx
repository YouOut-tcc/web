import React from "react";
import Logo from "../../img/logoYouOut.jpeg";

const styles = {
  logoInicial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
  },
  logo:{
    borderRadius: "50%",
    width: "50%",
    height: "50%"
  }
}

export default function Logoinicial() {
  return (
    <div style={styles.logoInicial}>
      <img style={styles.logo} src={Logo} alt="logo do app You Out" />
    </div>
  );
}
