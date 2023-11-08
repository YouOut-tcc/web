import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function InputBSelect({ categoria, setCategoria }) {


  const handleChange = (event) => {
    setCategoria(event.target.value);

  };

  console.log(" teste categoria", categoria)
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
            <MenuItem value={"Restaurantes e Cafeterias"} sx={menuItemStyle}>
              Restaurantes e Cafeterias
            </MenuItem>
            <MenuItem value={"Varejo"} sx={menuItemStyle}>
              Varejo
            </MenuItem>
            <MenuItem value={"Saúde e Bem-Estar"} sx={menuItemStyle}>
              Saúde e Bem-Estar
            </MenuItem>
            <MenuItem value={"Entretenimento"} sx={menuItemStyle}>
              Entretenimento
            </MenuItem>
            <MenuItem value={"Serviços Profissionais"} sx={menuItemStyle}>
              Serviços Profissionais
            </MenuItem>
            <MenuItem value={"Serviços Automotivos"} sx={menuItemStyle}>
              Serviços Automotivos
            </MenuItem>
            <MenuItem value={"Tecnologia"} sx={menuItemStyle}>
              Tecnologia
            </MenuItem>
            <MenuItem value={"Educação"} sx={menuItemStyle}>
              Educação
            </MenuItem>
            <MenuItem value={"Construção e Reparação2"} sx={menuItemStyle}>
              Construção e Reparação
            </MenuItem>
            <MenuItem value={"Artes e Cultura"} sx={menuItemStyle}>
              Artes e Cultura
            </MenuItem>
            <MenuItem value={"Agricultura"} sx={menuItemStyle}>
              Agricultura
            </MenuItem>
            <MenuItem value={"Serviços Financeiros"} sx={menuItemStyle}>
              Serviços Financeiros
            </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
