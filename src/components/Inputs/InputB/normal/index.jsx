import TextField from "@mui/material/TextField";
// import "./style.css";

export default function InputBnormal({ value, setValue, label, type, error }) {
  return (
    <>
      <TextField
        required={true}
        id="outlined-required"
        label={label}
        type={type}
        error={error}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </>
  );
}
