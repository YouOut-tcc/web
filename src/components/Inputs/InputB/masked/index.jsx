import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";
// import "./style.css";

export default function InputBmasked({
  mask,
  value,
  setValue,
  label,
  error,
  type
}) {
  return (
    <>
      <InputMask
        mask={mask}
        value={value}
        disabled={false}
        maskChar="_"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {() => <TextField required={true} id="outlined-required"  error={error} type={type} label={label} />}
      </InputMask>
    </>
  );
}
