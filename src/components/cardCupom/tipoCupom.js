import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BsTicketPerforated, BsLightningFill } from 'react-icons/bs';
import { IoTicket } from "react-icons/io5";
import { HiBadgeCheck } from 'react-icons/hi';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

const TipoCupom = ({ icon, title, description, onSelect, isSelected }) => {
  return (
    <Card
      sx={{
        width: 150, height: 100, margin: "2vh",
        border: isSelected ? '2px solid #FE0472' : '2px solid #8200A8', 
        backgroundColor: "var(--primary-color)"
      }}
      onClick={onSelect}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            {icon}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function CupomSelector() {
  const [selectedType, setSelectedType] = React.useState(null);

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <Box display="flex" gap={1}>
      <TipoCupom
        icon={<IoTicket  size={40} />}
        title="Primeira compra"
        onSelect={() => handleSelect("firstPurchase")}
        isSelected={selectedType === "firstPurchase"}
      />
      <TipoCupom
        icon={<HiBadgeCheck size={40} />}
        title="Check-in"
        onSelect={() => handleSelect("cupomPurchase")}
        isSelected={selectedType === "cupomPurchase"}
      />
      <TipoCupom
        icon={<BiSolidPurchaseTag  size={40} />}
        title="Compra realizada"
        onSelect={() => handleSelect("buyPurchase")}
        isSelected={selectedType === "buyPurchase"}
      />
      <TipoCupom
        icon={<BsLightningFill  size={40} />}
        title="Cupom relâmpago"
        onSelect={() => handleSelect("flashSale")}
        isSelected={selectedType === "flashSale"}
      />
    </Box>
  );
}
