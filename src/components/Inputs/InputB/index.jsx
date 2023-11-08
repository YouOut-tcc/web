import InputBmasked from "./masked";
import InputBnormal from "./normal";
// import "./style.css";

export default function InputB({
  mask,
  value,
  setValue,
  inputError,
  errorMessage,
  index,
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
          index={index}
          error={inputError}
          type={type}
        />
      ) : (
        <InputBnormal
          value={value}
          setValue={setValue}
          label={label}
          index={index}
          error={inputError}
          type={type}
        />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
