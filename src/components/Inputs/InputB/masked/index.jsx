import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";

export default function InputBmasked({
  state,
  setValue,
  index,
  type,
}) {
  // console.log({
  //   mask,
  //   value,
  //   setValue,
  //   label,
  //   error,
  //   type,
  // });
  return (
    <>
      <InputMask
        mask={state[index].mask}
        value={state[index].value? state[index].value : ""}
        disabled={false}
        maskChar="_"
        onChange={(e) => setValue(e.target.value, index)}
      >
        {() => (
          <TextField
            required
            id="outlined-required"
            className="inputLogin"
            InputLabelProps={{ shrink: true, style: { height: "auto" } }}
            variant="outlined"
            error={state[index].error}
            type={type}
            label={state[index].label}
            style={{ width: "30vw" }}
          />
        )}
      </InputMask>
    </>
  );
}
