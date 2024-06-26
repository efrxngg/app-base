export function copyToClipboard(text: string) {
  if(!navigator){ 
    console.error('El dispositivo no cuenta con la funcionalidad de copiado')
    return;
  }
    navigator.clipboard.writeText(text);
}
