// Elementos traídos del HTML:
let dato1: number = <HTMLInputElement>document.getElementById("dato1");
let btnIgual = <HTMLButtonElement>document.getElementById("btnIgual");
let btnSumar = <HTMLButtonElement>document.getElementById("btnSumar");
let btnRestar = <HTMLButtonElement>document.getElementById("btnRestar");
let valor: number = 0;
let btnMultiplicar = <HTMLButtonElement>(
  document.getElementById("btnMultiplicar")
);
let btnDividir = <HTMLButtonElement>document.getElementById("btnDividir");
btnIgual.addEventListener("click", () => {
  valor = Number(dato1.value);
  console.log("IGUAL " + valor);
});
btnSumar.addEventListener("click", () => {
  console.log("SUMAR " + valor);
});
btnRestar.addEventListener("click", () => {
  console.log("RESTAR " + valor);
});
btnDividir.addEventListener("click", () => {
  console.log("DIVIDIR " + valor);
});
btnMultiplicar.addEventListener("click", () => {
  console.log("MULTIPLICAR " + valor);
});

//funcion contador
