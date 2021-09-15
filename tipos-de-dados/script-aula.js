//Typeof
var idade = 26;
var simbolo = Symbol();
console.log(typeof nome); //tipo de dado string, number etc

//juntando frases
var nome = "josiane ";
var sobreNome = "Gomes";
var nomeCompleto = nome + sobreNome;
console.log(nomeCompleto);

//Numero junto com string
var gol = 1000;
var frase = "Romario fez " + gol + " gols";
console.log(frase);

//mostrar "" no console
var frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);

//template String
var gols1 = 1000;
var frase2 = `Romario fez ${gols1 * 2} gols`;
console.log(frase2);
