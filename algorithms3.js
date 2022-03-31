/*
//Ex 1. Numeros aleatorios entre dos valores
let min = prompt(
  `¿A partir de qué valor quiere que se generen números aleatorios`
);
let max = prompt(`¿Hasta qué valor quiere que se generen números aleatorios`);
let counter,
  number = new Array();
for (min, max, number, counter = 0; counter < 20; counter++) {
  number.push(
    Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) +
      parseInt(min)
  );
}
console.log(number);
let counter2 = 0;
number.sort(function (a, b) {
  counter++;
  "a:", a;
  "b:", b;
  a - b;
  return a - b;
});
console.log(
  "El número más pequeño del array es el " +
    number[0] +
    " y el más grande es el " +
    number[19]
);

//Ex 2. Una maquina educada
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
console.log(hour);
if (hour >= 6 && hour < 12) {
  console.log(`¡Buenos días!`);
} else if (hour >= 12 && hour < 21) {
  console.log(`¡Buenas tardes!`);
} else if (hour >= 21) {
  console.log(`¡Buenos noches!`);
} else if (hour >= 0 && hour < 6) {
  console.log(`¡Buenas noches!`);
} else {
  console.log(`¡Se ha roto el espacio-tiempo, corre por tu vida!`);
}
*/
