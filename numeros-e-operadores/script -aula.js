var idade = 23;
console.log(idade);

//aritmeticas basicas
var adicao = 25 + 25;
var divisao = 25 / 5;
var subtracao = 25 - 5;
var modulo = 25 % 5;
var elevado = 25 ** 5;
console.log(elevado);

//Nan
var testeNan = "isso é 100" / 2;
console.log(testeNan);

//ordem importa (binarios precisam de outro numero para dividir, somar etc)
var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10;
var soma2 = (10 * 20) / 2;
console.log(soma2);

//unarios(nao precisa de outro exemplo o ++ que é incremento)
//incremento
var incremento = 5;
console.log(incremento++);
console.log(incremento);

//decremento
var decremento = 5;
console.log(decremento--);
console.log(decremento);

//colocar +idade ele tranforma a string em numero
var idade = "26";
var somaIdade = 5;
console.log(+idade + somaIdade);
