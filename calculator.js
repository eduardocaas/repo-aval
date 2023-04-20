// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
  return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
  return v1/v2;
}

function mult(v1, v2) {
  return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  return Math.sqrt(v1);
}

console.log(sum(2, 4));
console.log(div(10,5));
console.log(sub(11, 4));
console.log(mult(3, 5));
console.log(square(9));