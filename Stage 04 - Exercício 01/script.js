alert("Insira dois números que desejar")
let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const restDiv = numberOne % numberTwo;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + multi);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + restDiv);

const isSomaPar = sum % 2 === 0;
const areNumbersEqualOrDifferent = numberOne === numberTwo || numberOne !== numberTwo;

alert("A soma é par? " + isSomaPar);

if (numberOne === numberTwo) {
    alert("Os números são iguais.");
  } else {
    alert("Os números são diferentes.");
}
