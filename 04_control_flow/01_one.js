// if

const isUserLoggedIn = true;

if (2 == "2") {
  console.log("executed");
}

if (2 === "2") {
  console.log("executed");
} else {
  console.log("not executed");
}

if (2 != "2") {
  console.log("executed");
} else {
  console.log("not executed");
}

if (2 !== "2") {
  console.log("executed");
}

// <, >, ==, <=, >=, !=, ===

const temp = 40;

if (temp < 50) {
  console.log("temp less than 50");
}

const score = 200;

if (score > 100) {
  const power = "fly"
  console.log(`User Power: ${power}`);
}

const balance = 1000;

// if (balance > 500) console.log("test");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("more than 750");
}

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("allow to buy courses");
}
