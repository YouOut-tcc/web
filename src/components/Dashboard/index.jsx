import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Tabela from './tabela'; 
import Grafico from './grafico'; 
import CardDash from './cardDash';

const Dashboard = () => {
  const cuponsData = [
    {
      id: 1,
      tipo: 'Primeira compra',
      cuponsDisponiveis: 50,
      cuponsUtilizados: 25,
      taxaUtilizacao: (25 / 50) * 100,
      acessos: 100,
      checkins: 30,
      cuponsExpirados: 5,
      dataExpiracao: '2023-12-31',
    },
    {
      id: 2,
      tipo: 'Check-in',
      cuponsDisponiveis: 20,
      cuponsUtilizados: 15,
      taxaUtilizacao: (15 / 20) * 100,
      acessos: 50,
      checkins: 20,
      cuponsExpirados: 2,
      dataExpiracao: '2023-12-31',
    },
   
  ];
  
  const eventosData = [
    {
      id: 1,
      nome: 'Evento Tal x',
      dataI: '2023-11-30, hh:mm:ss',      
      dataF: '2023-11-30, hh:mm:ss',
      valor: 100.0,
      visualizacoes: 10
    },
    {
      id: 2,
      nome: 'Evento Tal y',
      dataI: '2023-11-30, hh:mm:ss',      
      dataF: '2023-11-30, hh:mm:ss',
      valor: 200.0,
      visualizacoes: 20,
    }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: "#EDE0D6" }}>
        <CardDash />
      </Paper>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: "#EDE0D6"  }}>
        <Grafico />
      </Paper>
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: "#EDE0D6"  }}>
        <Tabela cuponsData={cuponsData} eventosData={eventosData} />
      </Paper>
    </Container>
  );
};

export default Dashboard;
