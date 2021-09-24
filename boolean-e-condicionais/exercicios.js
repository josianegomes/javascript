//verifique se a sua idade é maior que a de um parente seu
//dependendo do resultado coloque no console é maior, é igual

var minhaIdade = 26;
var idadeMinhaIrma = 21;
if (minhaIdade > idadeMinhaIrma) {
  console.log("É maior");
} else if (minhaIdade === idadeMinhaIrma) {
  console.log("É igual");
} else {
  console.log("É menor");
}

//qual valor é retornado na seguinte expressão ?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); //3

//verefique as seguintes variaveis que sao true ou false
var nome = "josiane";
var idade = 26;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

//compare o total de habilidades do brasil com china (valor em milhoes)
var Brasil = 207;
var China = 1340;

if (Brasil > China) {
  console.log("Brasil tem mais habitantes");
} else if (Brasil < China) {
  console.log("Brasil tem menos habitantes");
} else {
  console.log("Eles tem a mesma quantidade de habitantes");
}

//O que ira aparecer no console
if ("Gato" === "gato" && 5 > 2) {
  console.log("verdadeiro");
} else {
  console.log("falso"); //falso
}

// Oque ira aparecer no console

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cao");
} else {
  console.log("falso"); //Cao por que cao é veraddeiro e o && exibe no console o ultimo verdadeiro
}
