const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
const all_heroes = marvel_heros.concat(dc_heros)
console.log(all_heroes);

const all_new_heroes = [...marvel_heros, ...dc_heros]

console.log(all_new_heroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// let correctedArr = anotherArr.flat(1)
// console.log(correctedArr);

// correctedArr = anotherArr.flat(2)
// console.log(correctedArr);

let correctedArr = anotherArr.flat(Infinity)
console.log(correctedArr);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"));


console.log(Array.from({name: "Dev"})); // output: [] => specify which array you want keys or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
console.log(Array.of("score1", "score2", "score3"));


