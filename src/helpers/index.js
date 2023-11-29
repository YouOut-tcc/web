function minetypeFromBase64(base64) {
  // Extrair o cabeçalho da string base64
  const cabecalho = base64.substring(0, base64.indexOf(','));

  // Extrair a parte que contém o tipo da imagem
  const minetype = cabecalho.split(';')[0].split(':')[1];

  return minetype;
}

export {minetypeFromBase64};