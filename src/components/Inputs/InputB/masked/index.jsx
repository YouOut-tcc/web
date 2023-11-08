import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";

export default function InputBmasked({
  mask,
  value,
  setValue,
  label,
  index,
  error,
  type,
}) {
  console.log({
    mask,
    value,
    setValue,
    label,
    error,
    type,
  });
  return (
    <>
      <InputMask
        mask={mask}
        value={value}
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
            error={error}
            type={type}
            label={label}
            style={{ width: "30vw" }}
          />
        )}
      </InputMask>
    </>
  );
}
