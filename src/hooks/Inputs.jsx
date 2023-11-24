import { useReducer } from "react";

function inputReducer(state, action) {
  switch (action.optType) {
    case "change":
      state[action.key].value = action.value;
      break;
    case "error":
      state[action.key].error = true;
      break;
    case "clear":
      state.forEach((element) => {
        element.error = false;
        element.errorMessage = undefined;
      });
      break;
    case "errorMessage":
      state[action.key].error = true;
      state[action.key].errorMessage = action.message;
      break;
    case "allError":
      state.forEach((element, index) => {
        element.error = true;
      });
      break;
    case "emptyAllError":
      let error = action.error;

      state.forEach((element, index) => {
        let value = element.value;
        let name = element.label;
        if (!value || value == "" || value.trim() == 0) {
          error = true;
          console.log("caiu aqui")
          action.setError(index, `Por favor, preencha o campo ${name}`);
        }
      });

      break;
  }
  return structuredClone(state);
}

function useReducerInputs(initialState) {
  const [inputState, setInputState] = useReducer(inputReducer, initialState);

  const onChange = (value, key) => {
    setInputState({ key, value, optType: "change" });
  };

  const setError = (key, message = undefined) => {
    if (message) {
      setInputState({ key, message, optType: "errorMessage" });
      return;
    }
    setInputState({ key, optType: "error" });
  };

  const setAllErrors = () => {
    setInputState({ optType: "allError" });
  };

  const clearErrors = () => {
    setInputState({ optType: "clear" });
  };

  const emptyAllError = () => {
    let error = false;
    setInputState({ optType: "emptyAllError", error: error, setError });
    return error;
  };

  return [
    inputState,
    onChange,
    setError,
    clearErrors,
    setAllErrors,
    emptyAllError,
  ];
}

export { useReducerInputs };
