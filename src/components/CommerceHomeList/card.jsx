import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCEP } from "../../services/cep";
import logoComercio from "../../assets/logoComercio.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { AiFillStar } from "react-icons/ai";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CommerceHomeCard({ place }) {
  const [endereco, setEndereco] = useState(undefined);

  const fetchEndereco = async () => {
    // cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
    let enderecofetch = await fetchCEP(place.cep);
    console.log(enderecofetch);
    setEndereco(enderecofetch);
  };

  useEffect(() => {
    fetchEndereco();
    console.log("redenrizando um card");
  }, []);

  return (
    <div className="commerceDiv">
      {/* <li key={place.uuid} className="commerceList">
      <Link to={`comercio/${place.uuid}`} className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={logoComercio} alt="" />
          </div>
          <div className="divTextCommerce">
            <p>Lorem Ipsum</p>
            <p>Estr. Kizaemon Takeuti, 1987</p>
            <p>Pirajussara, Taboão da Serra - SP</p>
            <p> 06775-002</p>
            {/* <p>{place.nome}</p> 
            <p>{endereco.logradouro}, {place.numero}</p> 
            <p>{endereco.bairro},{endereco.uf}</p> 
            <p> {place.cep}</p>  */}
      {/* </div>
        </div>
      </Link>
    </li> */}
      <Card
        key={place.uuid}
        className="commerceList"
        sx={{
          border: "2px solid var(--secondary-color)",
          backgroundColor: "var(--primary-color)",
          borderRadius: "2vh",
        }}
      >
        <CardActionArea>
          <Link to={`comercio/${place.uuid}`} className="commerceLink">
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  alignSelf: "center",
                  display: "grid",
                  alignContent: "center",
                  marginLeft: "2vh",
                }}
              >
                <CardMedia
                  className="commerceListImg"
                  component="img"
                  image={logoComercio}
                  sx={{
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "50%",
                    alignContent: "center",
                    marginBottom: "2vh",
                    marginTop: "2vh",
                    justifyContent: "center",
                    justifySelf: "center",
                  }}
                />
              </Grid>
              <Grid item>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="divTextCommerce"
                  >
                    {place.nome}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="divTextCommerce"
                    sx={{ fontSize: "3vh" }}
                  >
                    <p>Estr. Kizaemon Takeuti, 1987</p>
                    <p>Pirajussara, Taboão da Serra - SP</p>
                    <p>06775-002</p>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiFillStar size={30} color="var(--secondary-color)" />{"  "}
                      4,47
                    </p>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Link>
        </CardActionArea>
      </Card>
    </div>
  );
}
