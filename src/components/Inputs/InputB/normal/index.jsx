import TextField from "@mui/material/TextField";

export default function InputBnormal({ value, setValue, label, index, type, error }) {
  return (
    <TextField
      required
      id="outlined-required"
      label={label}
      type={type}
      error={error}
      variant="outlined"
      InputLabelProps={{ shrink: true, style: { height: "auto" } }}
      className="inputLogin"
      value={value}
      onChange={(e) => {
        setValue(e.target.value, index)
      }}
      style={{ width: "30vw" }}
    />
  );
}
