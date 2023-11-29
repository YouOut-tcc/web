import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DashboardCard = ({ title, value }) => {
  return (
    <Card sx={{backgroundColor: "#F2E7FE", border: "1px solid", display: "flex", justifyContent: "center"}}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

const CardDash = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <DashboardCard title="Acessos" value={1000} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DashboardCard title="Check-ins" value={500} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <DashboardCard title="Cupons Disponíveis" value={10} />
      </Grid>
    </Grid>
  );
};

export default CardDash;
