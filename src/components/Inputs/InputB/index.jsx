import InputBmasked from "./masked";
import InputBnormal from "./normal";
// import "./style.css";

export default function InputB({
  mask,
  value,
  setValue,
  inputError,
  errorMessage,
  label,
  type
}) {
  return (
    <>
      {mask ? (
        <InputBmasked
          mask={mask}
          value={value}
          setValue={setValue}
          label={label}
          error={inputError}
          type={type}
        />
      ) : (
        <InputBnormal
          value={value}
          setValue={setValue}
          label={label}
          error={inputError}
          type={type}
        />
      )}
      {inputError && <p>{errorMessage}</p>}
    </>
  );
}
