import TextField from "@mui/material/TextField";
import { forwardRef } from "react";

export default function InputBnormal({ state, setValue, index,ref, type, onSubmit}) {
  return (
    <TextField
      required
      ref={ref}
      id="outlined-required"
      label={state[index].label}
      type={type}
      error={state[index].error}
      variant="outlined"
      InputLabelProps={{ shrink: true, style: { height: "auto" } }}
      className="inputLogin"
      value={state[index].value? state[index].value : ""}
      onSubmit={onSubmit}
      onChange={(e) => {
        setValue(e.target.value, index)
      }}
      style={{ width: "30vw" }}
    />
  );
}
