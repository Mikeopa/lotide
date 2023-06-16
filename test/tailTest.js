const tail = require('../tail');
const assertEqual = require('../assertEqual');


// Test cases for tail function
console.log(tail([5, 6, 7]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
const word = tail(words);
console.log(assertEqual(words.length, 3));
console.log(assertEqual(word.length, 2));