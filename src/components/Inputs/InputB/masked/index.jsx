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
  let beforeMask = state[index].beforeMask;

  return (
    <>
      <InputMask
        mask={state[index].mask}
        value={state[index].value? state[index].value : ""}
        disabled={false}
        maskChar={state[index].maskChar? state[index].maskChar: "_"}
        onChange={(e) => setValue(e.target.value, index)}
        beforeMaskedValueChange={beforeMask}
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
            style={{ width: "100%" }}
          />
        )}
      </InputMask>
    </>
  );
}
