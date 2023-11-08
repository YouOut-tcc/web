function validateIputs(params) {
  
}

function validateInputsEmpty(state, setError) {
  let error = false;
  state.forEach((element, index) => {
    let value = element.value;
    let name = element.name;
    if(!value){
      error = true;
      setError(index, `Por favor, preencha o campo ${name}`);
    }
  });
  return error;
}

export { validateInputsEmpty };