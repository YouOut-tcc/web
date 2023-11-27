import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function InputBSelect({ categorias, state, index, setValue }) {
  const [categoria, setCategoria] = useState();

  const handleChange = (event) => {
    setCategoria(event.target.value);
    setValue(event.target.value, index)
  };

  console.log(" teste categoria", categoria)
  const menuItemStyle = {
    color: "black",
    height: "5%",
  };

  return (
    // <div>
      <FormControl sx={{ m: 1, width: "100%" }} fullWidth>
        <InputLabel
          shrink={true}
          htmlFor="demo-simple-select-autowidth-label"
          sx={{ backgroundColor: "var(--primary-color)", height: "auto" }}
        >
          {state[index].label}
        </InputLabel>
        <Select
          className="inputLogin"
          style={{ width: "100%" }}
          id="outlined-required"
          value={state[index].value}
          onChange={handleChange}
          label={state[index].label}
          error={state[index].error}
          variant="outlined"
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
            <MenuItem value={"Construção e Reparação"} sx={menuItemStyle}>
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
    // </div>
  );
}
