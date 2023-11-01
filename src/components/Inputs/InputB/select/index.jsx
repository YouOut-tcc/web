import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function InputBSelect() {
  const [categoria, setCategoria] = React.useState("");

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  const menuItemStyle = {
    color: "black",
    height: "5%",
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "30vw" }}>
        <InputLabel
          shrink={true}
          htmlFor="demo-simple-select-autowidth-label"
          sx={{ backgroundColor: "var(--primary-color)" }}
        >
          Categoria/Segmento
        </InputLabel>
        <Select
          
          value={categoria}
          onChange={handleChange}
          label={"categoria"}
        >
            <MenuItem value="" sx={menuItemStyle}>
              <em></em>
            </MenuItem>
            <MenuItem value={10} sx={menuItemStyle}>
              Restaurantes e Cafeterias
            </MenuItem>
            <MenuItem value={21} sx={menuItemStyle}>
              Varejo
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Saúde e Bem-Estar
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Entretenimento
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Serviços Profissionais
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Serviços Automotivos
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Tecnologia
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Educação
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Construção e Reparação
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Artes e Cultura
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Agricultura
            </MenuItem>
            <MenuItem value={22} sx={menuItemStyle}>
              Serviços Financeiros
            </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
