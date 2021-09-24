//IF ELSE
var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("Sim, Possui graduação");
} else if (possuiDoutorado) {
  console.log("Sim, possui doutorado");
} else {
  console.log("Nao, possui.");
}

var nome = "josi";
if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

//FALSE
/*
if(false)
if(0)
if(NaN)
if(null)
if(undefined)
if('', " ", ``)
*/

//TRUE
/*
if(true)
if(1)
if(" ") se tiver um espaco dentro ja e vdd
if("josi")
if(-10)
if({}) objeto tbm é vdd mesmo estando vazio
*/

//OPERADOR LOGICO DE NEGAÇÃO
if (!possuiGraduacao); //! inverte o valor se era vdd passa a ser falso vice versa
console.log("nao possui graduacao");

//OPERADORES DE COMPARAÇÃO
a = 10 > 5;
b = 10 > 10;
c = 10 >= 50;
console.log(a, b, c);

var x = 10;
console.log(x == 10);

var y = "10";
console.log(y === 10);

var x = "Gato";
console.log(x === "Gato");

var d = "gato";
console.log(d == "Gato");

//USANDO !==

var x = "Gato";
console.log(x !== "Gato");

// OPERADOR LÓGICO &&(E)

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

if (5 - 10 && 5 + 5) {
  // V pois 5-10 é -5 ou seja verdadeiro nao importa se é negativo
  console.log("verdadeiro");
} else {
  console.log("falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("verdadeiro", condicional);
} else {
  console.log("falso");
}

//OPERADOR LÓGICO || (OU)
var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var condicional3 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional3);

//SWITH

var corFavorita = "amarelo";
switch (corFavorita) {
  case "azul":
    console.log("Olhe para o céu");
    break; //ele quebra caso seja verdade
  case "amarelo":
    console.log("olhe para o sol");
    break;
  default:
    // default é o padrao ou seja caso nenhuma seja verdadeira exibe o console de baixo dela
    console.log("feche os olhos");
}
