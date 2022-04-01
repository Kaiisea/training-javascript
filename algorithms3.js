/*
//Ex 1. Numeros aleatorios entre dos valores
//Opción de poder comprobar que minimo < maximo
//for (let i = ; i < 1; i++) {
//    min = parseInt(prompt("Min value"));
//    max = parseInt(prompt("Max value"));
//    if (min > max) {
//        alert("The minimun value can't be bigger than the maximun");
//        i--;
//    }
//}
const exercise1 = () => {
  let min = parseInt(prompt("Minimun value:"));
  let max = parseInt(prompt("Max value:"));
  let counter,
    number = new Array();
  for (min, max, number, counter = 0; counter < 20; counter++) {
    number.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  console.log(number);
  number.sort((a, b) => a - b);
  console.log("Min value: ", number[0]); //Tambien podria usar Math.min
  console.log("Max value: ", number[19]); //Tambien podria usar Math.max
};

//Ex 2. Una maquina educada
const exercise2 = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  console.log(hour);
  if (hour >= 6 && hour < 12) {
    console.log(`¡Buenos días!`);
  } else if (hour >= 12 && hour < 21) {
    console.log(`¡Buenas tardes!`);
  } else if ((hour >= 0 && hour < 6) || hour >= 21) {
    console.log(`¡Buenas noches!`);
  } else {
    console.log(`¡Se ha roto el espacio-tiempo, corre por tu vida!`);
  }
};
*/
//Ex 3. Hello World de colorinchis
const exercise3 = () => {
const generateColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
for (let i = 1; i <= 10; i++) {
  console.log("%cHello World!", `color: ${generateColor()}`);
} 
};
/*
//Validar DNI
//const exercise4 = () => {
let dniFull = prompt("Introduzca su DNI");
let dniNumbers = dniFull.substring(0, 8);
let dniLetter = dniFull.substring(8, 9);
let remainder = dniNumbers % 23;
let letters = "TRWAGMYFPDXBNJZSQVHLCKET";
letters = letters.substring(remainder, remainder + 1);
if (letters != dniLetter.toUpperCase()) {
  console.log("The data entered is wrong");
} else {
  console.log("Valid DNI");
}
//};
*/
