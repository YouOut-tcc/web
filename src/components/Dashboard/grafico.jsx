import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  // pizza
  { name: 'Cupons Disponíveis', value: 100 },
  { name: 'Acessos', value: 1000 },
  { name: 'Check-ins', value: 500 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Grafico = () => {
  return (
    <>

    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="center" />
      </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default Grafico;
