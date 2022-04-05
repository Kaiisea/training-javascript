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
*/ /*
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
*/ /*
//Generating license plates
let repeats = prompt("How many license plates do you want to generate?");
let matricula = "";
let letters = "BCDFGHJKLMNPRSTVWXYZ";
let numbers = "0123456789";
for (let i = 0; i < repeats; i++) {
  for (let l = 0; l < 4; l++) {
    matricula += numbers[Math.floor(Math.random() * 10)];
  }
  matricula += " "
  for (let l = 0; l < 3; l++) {
    matricula += letters[Math.floor(Math.random() * 20)];
  }
  console.log(`${i+1}. ${matricula}`);
  matricula = "";
}
*/ /*
//Quoting each 2 minutes
quotes = [
  "All of us are put in boxes by our family, by our religion, by our society, our moment in history, even our own bodies. Some people have the courage to break free - Geena Rocero",
  "Self-definition and self-determination is about the many varied decisions that we make to compose and journey toward ourselves... It’s OK if your personal definition is in a constant state of flux as you navigate the world - Janet Mock",
  "In trans women's eyes, I see a wisdom that can only come from having to fight for your right to be recognized as female, a raw strength that only comes from unabashedly asserting your right to be feminine in an inhospitable world - Julia Serrano",
  "Everyone is both sexes in varying degrees. I am more of a woman than a man - Christine Jorgensen",
  "I've never been interested in being invisible and erased - Laverne Cox",
  "So long as we refuse to accept that 'woman' is a holistic concept, one that includes all people who experience themselves as women, our concept of womanhood will remain a mere reflection of our own personal experiences and biases rather than something based in the truly diverse world that surrounds us - Julia Serrano",
  "I identify as what I am - Andreja Pejic",
  "Trans people deserve something vital. They deserve your respect. From that respect comes a more compassionate community - Caitlyn Jenner",
  "I believe much more in love and heart. ... That’s much bigger [than] to see what you have in the middle of your legs - Lea T.",
  "I knew even as a teenager that my femininity was more than just adornments; they were extensions of me, enabling me to express myself and my identity - Janet Mock",
  "We are people. We’re human beings, and this is a human life - Andreja Pejic",
  "Being transgender is not just a medical transition. ... [It's about] discovering who you are, living your life authentically, loving yourself, and spreading that love towards other people and accepting one another - Jazz Jennings",
  "The therapist asked me if I knew the difference between a boy and a girl. And in my infinite wisdom as a third-grader... I said, 'There is no difference.' - Laverne Cox",
  "Transgender people, whoever they are, they’re ordinary people. They deserve respect. They’re just human beings - Ines Rau",
  "I am transgender and this doesn’t mean that I am unlovable - Lana Wachowski",
  "There isn’t a trans moment. ... It’s just a presence where there was an absence. We deserve so much more - Hari Nef",
  "A few friends asked me why I have mostly detailed the violence I have had to face while rarely recounting pleasurable moments. I believe narrating acts of violence other hijras or I have faced is important to build awareness - A. Revathi",
  "All governments want to appoint one person from a weaker community to a top post so that voices of others of the community are muffled. I would not let that happen - Joyita Mondol",
  "I was mocked in school and college because of my feminine behavior, but this rebel inside me never let me lose confidence May be this was my rebellious nature which never got me comfused in any circumstances. This rebel inside me taught to become optimistic. This rebellious nature made me fight for myself and my rights - Kami Sid",
  "In every religious community and for all times, the transgender community has been a part of the society. The problem is that present society is more interested in labelling us, and that’s because they are not sensitive to our issues and don’t want to discuss and open their minds - Swati Bidhan Baruah",
];
let randomQuote = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomQuote]);
let intervalo = setInterval(quoteSent, 10000);
function quoteSent() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomQuote]);
};
setTimeout(() => {
  clearInterval(intervalo);
}, 120000);
*/ /*
//Generar 100 numeros aleatorios y filtrar y ordenar los pares
let numbers = [];
let min = 0,
  max = 500;
for (let i = 0; i < 100; i++) {
  numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
};
console.log(numbers);
let even = numbers.filter(x => x%2==0);
even.sort((a, b) => b - a);
console.log(even)
*/
//La carta mas alta
suits = ["treboles", "corazones", "picas", "diamantes"];
cards = ["As", "Rey", "Reina", "Sota", 10, 9, 8, 7, 6, 5, 4, 3, 2];
let initialBalance = 500;
for (l = 0; l < 1; l++) {
  //for base
  if (initialBalance > 0) {
    let bet = prompt(
      `Usted dispone de un saldo de ${initialBalance}€, ¿cuanto quiere apostar?`
    );
    for (let i = 0; i < 1; i++) {
      // for pedir dinero
      if (bet > initialBalance) {
        bet = prompt(
          `Usted no dispone de tanto saldo, actualmente solo cuenta con ${initialBalance}€, ¿cuanto quiere apostar?`
        );
        i--;
      } else if (bet == initialBalance) {
        alert(
          `Ha decidido hacer un all-in de ${bet}€, se va a poner interesante esta ronda`
        );
      } else if (bet < initialBalance) {
        alert(
          `Ha decidido apostar ${bet}€, esperemos que tenga suerte con las cartas`
        );
      } else {
        bet = prompt(
          `Esa apuesta es inválida, recuerde escribir solo el número sin simbolos. Le recuerdo que dispone de ${initialBalance}€ de saldo, ¿cuanto quiere apostar?`
        );
        i--;
      }
    }
    setTimeout(() => {
      console.clear();
      console.log("Barajando");
    }, 500);
    setTimeout(() => {
      console.clear();
      console.log("Barajando.");
    }, 2000);
    setTimeout(() => {
      console.clear();
      console.log("Barajando..");
    }, 3000);
    setTimeout(() => {
      console.clear();
      console.log("Barajando...");
    }, 4000);
    setTimeout(() => {
      console.clear();
      userCard = cards[Math.floor(Math.random() * cards.length)];
      userSuit = suits[Math.floor(Math.random() * suits.length)];
      console.log(`Usted ha sacado un ${userCard} de ${userSuit}`);
      console.log("A ver cuanta suerte tiene la maquina");
    }, 5000);
    setTimeout(() => {
      console.clear();
      console.log("Barajando");
    }, 8000);
    setTimeout(() => {
      console.clear();
      console.log("Barajando.");
    }, 9000);
    setTimeout(() => {
      console.clear();
      console.log("Barajando..");
    }, 10000);
    setTimeout(() => {
      console.clear();
      console.log("Barajando...");
    }, 11000);
    setTimeout(() => {
      console.clear();
      cpuCard = cards[Math.floor(Math.random() * cards.length)];
      cpuSuit = suits[Math.floor(Math.random() * suits.length)];
      for (j = 0; j < 1; j++) {
        if (cpuCard == userCard && cpuSuit == userSuit) {
          cpuCard = cards[Math.floor(Math.random() * cards.length)];
          cpuSuit = suits[Math.floor(Math.random() * suits.length)];
          j--;
        } else {
          j++;
        }
      }
      console.log(`Usted ha sacado un ${userCard} de ${userSuit}`);
      console.log(`La maquina ha sacado un ${cpuCard} de ${cpuSuit}`);
      if (userCard == "Sota") {
        userCard = 11;
      } else if (cpuCard == "Sota") {
        cpuCard = 11;
      } else if (cpuCard == "Reina") {
        cpuCard = 12;
      } else if (userCard == "Reina") {
        userCard = 12;
      } else if (userCard == "Rey") {
        userCard = 13;
      } else if (cpuCard == "Rey") {
        cpuCard = 13;
      } else if (cpuCard == "As") {
        cpuCard = 14;
      } else if (userCard == "As") {
        userCard = 14;
      }
      if (userCard > cpuCard) {
        console.log(
          `¡Felicidades, ha ganado a la máquina! ¡Se han añadido ${bet}€ extras a su saldo!`
        );
        initialBalance = initialBalance + bet;
        console.log(`Su saldo actual es de ${initialBalance}€`);
      } else if (userCard < cpuCard) {
        console.log(
          `¡Que mala suerte, ha perdido esta ronda contra la máquina! ¡Ha perdido ${bet}€ de su saldo!`
        );
        initialBalance = initialBalance - bet;
        console.log(`Su saldo actual es de ${initialBalance}€`);
      } else if ((userCard == cpuCard)) {
        console.log(
          `¡Ha sido un empate! ¡No ha ganado nada pero se le ha devuelto sus ${bet}€ a su saldo!`
        );
        console.log(`Su saldo actual es de ${initialBalance}€`);
      }
    }, 12000);
    setTimeout(() => {
      l--
    }, 14000);
  } else if ((initialBalance == 0)) {
    alert(
      `!Oh no! Su saldo actual es de ${initialBalance}€ !Ha perdido todo su dinero! ¡Parece que la suerte no le ha sonreido! Haga un nuevo ingreso en paypal.com/Kaiisea para seguis jugando`
    );
    l++;
  }
}
