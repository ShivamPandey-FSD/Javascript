// // const myArray = [0, 1, 2, 3, 4, true, "SP"];
const myArray = [0, 1, 2, 3, 4];

// // console.log(myArray[0]);

// const myHeroes = ["superman", "spiderman"]

// const myArrTwo = new Array(1, 2, 3, 4)

// // console.log(myArray.length);
// // console.log(myHeroes.length);
// // console.log(myArrTwo.length);

// myArray.push(5)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);

// myArray.unshift(100)
// console.log(myArray);

// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(100));
// console.log(myArray.indexOf(5));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join();

// console.log(myArray); // object
// console.log(newArr); // string

// slice, splice

console.log("A ", myArray);

const arr1 = myArray.slice(1, 3) // doesn't change the original array

console.log(arr1);
console.log("B ", myArray);

const arr2 = myArray.splice(1, 3) // cut the portion of the original array (change in the original array)

console.log(arr2);
console.log("C ", myArray);

