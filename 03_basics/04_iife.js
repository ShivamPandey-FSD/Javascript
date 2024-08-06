// Immediately Invoked Functi on Expressions (IIFE)

// function chai() {
//   console.log("DB CONNECTED");
// }

// chai()

// named iife
(function chai() {
  console.log("DB CONNECTED");
})();

// simple iife
(() => {
  console.log("DB DISCONNECTED");
})();

((name) => {
  console.log(`Hello ${name}`);
})('vijay');
