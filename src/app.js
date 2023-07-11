/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function numeroRandom(limite) {
  let numero = Math.floor(Math.random() * limite);
  return numero;
}

//write your code here
console.log(
  who[numeroRandom(who.length)],
  action[numeroRandom(action.length)],
  what[numeroRandom(what.length)],
  when[numeroRandom(when.length)]
);
document.querySelector("#excuse").innerHTML =
  who[numeroRandom(who.length)] +
  action[numeroRandom(action.length)] +
  what[numeroRandom(what.length)] +
  when[numeroRandom(when.length)];

// console.log(who[numeroRandom(who.length)]);
// console.log(action[numeroRandom(action.length)]);
// console.log(what[numeroRandom(what.length)]);
// console.log(when[numeroRandom(when.length)]);
