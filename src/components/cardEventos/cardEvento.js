import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BiEdit } from "react-icons/bi";
import Fab from "@mui/material/Fab";
import eventos from "../../assets/events.png";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//o fuso horario esta correto
export default function CardEventos({ evento, title, valor, imagem }) {
  const [expanded, setExpanded] = React.useState(false);
  const opcoesDeFormato = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const dataInicio = new Date(evento.inicio);
  const dataFim = new Date(evento.fim);

  const dataInicioFormatted = dataInicio.toLocaleDateString('pt-Br', opcoesDeFormato);
  const dataFimFormatted = dataFim.toLocaleDateString('pt-Br', opcoesDeFormato);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          margin: "2vh",
          marginLeft: "4vh",
          backgroundColor: "var(--primary-color)",
          border: "solid 2px #8200a8",
        }}
      >
        <CardHeader
          title={evento.nome}
          subheader={`${dataFimFormatted}. Entrada: R$ ${evento.valor}`}
        />
        <CardMedia
          component="img"
          height="100"
          image={evento.image ? evento.image : eventos}
          alt="Paella dish"
          sx={{ height: "200px" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {evento.descricao}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Fab color="primary" aria-label="edit">
              <BiEdit size={30} />
            </Fab>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
