import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Tabela = ({ cuponsData, eventosData }) => {
  return (
    <Box>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#F2E7FE' }}>
        <Typography variant="h6" gutterBottom >
          Tabela de Cupons
        </Typography>
        <TableContainer component={Paper}>
          <Table style={{backgroundColor: '#F2E7FE' }}>
            <TableHead>
              <TableRow>
                <TableCell>Tipo de Cupom</TableCell>
                <TableCell>Número de Cupons Disponíveis</TableCell>
                <TableCell>Cupons Utilizados</TableCell>
                <TableCell>Taxa de Utilização de Cupons (%)</TableCell>
                <TableCell>Acessos</TableCell>
                <TableCell>Check-ins</TableCell>
                <TableCell>Cupons Expirados</TableCell>
                <TableCell>Data de Expiração</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cuponsData.map((item) => (
                <TableRow key={item.tipo}>
                  <TableCell>{item.tipo}</TableCell>
                  <TableCell>{item.cuponsDisponiveis}</TableCell>
                  <TableCell>{item.cuponsUtilizados}</TableCell>
                  <TableCell>{item.taxaUtilizacao}</TableCell>
                  <TableCell>{item.acessos}</TableCell>
                  <TableCell>{item.checkins}</TableCell>
                  <TableCell>{item.cuponsExpirados}</TableCell>
                  <TableCell>{item.dataExpiracao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#F2E7FE' }}>
        <Typography variant="h6" gutterBottom>
          Tabela de Eventos
        </Typography>
        <TableContainer component={Paper}>
          <Table style={{backgroundColor: '#F2E7FE' }}>
            <TableHead>
              <TableRow>
                <TableCell>Nome do Evento</TableCell>
                <TableCell>Data Inicial do Evento</TableCell>
                <TableCell>Data Final do Evento</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Visualizações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eventosData.map((evento) => (
                <TableRow key={evento.id}>
                  <TableCell>{evento.nome}</TableCell>
                  <TableCell>{evento.dataI}</TableCell>
                  <TableCell>{evento.dataF}</TableCell>
                  <TableCell>{evento.valor}</TableCell>
                  <TableCell>{evento.visualizacoes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Tabela;
