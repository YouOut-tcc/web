import { useRef } from "react";
import InputBmasked from "./masked";
import InputBnormal from "./normal";
import InputBSelect from "./select";

export default function InputB({
  index,
  state,
  onChange,
  categorias,
  onSubmit,
}) {
  // const inputRef = useRef();
  let type = state[index].type;

  let defaultProps = {
    state: state,
    setValue: onChange,
    index: index,
    type: type,
    // onSubmit: onSubmit ? onSubmit : handleSubmit,
  };


  // state[index].ref = inputRef;

  // const handleSubmit = () => {
  //   state[index + 1].ref.current.focus();
  // };

  const inputSelector = () => {
    if (state[index].mask) {
      return (
        <InputBmasked
          {...defaultProps}
        />
      );
    } else if (state[index].categoria) {
      return <InputBSelect {...defaultProps} categorias={categorias}/>;
    } else {
      return (
        <InputBnormal
          {...defaultProps}
        />
      );
    }
  };

  return (
    <>
      {inputSelector()}
      {state[index].errorMessage && <p>{state[index].errorMessage}</p>}
    </>
  );
}
