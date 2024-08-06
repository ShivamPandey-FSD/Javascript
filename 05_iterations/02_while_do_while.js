let i = 1;

while (i < 11) {
  process.stdout.write(`${i} `);
  i += 2;
}

console.log("\n");

const myArray = ["fruits", "vegetables", "curries"]

let j = 0;

do {
  console.log(myArray[j]);
  j++;
} while( j < myArray.length);

