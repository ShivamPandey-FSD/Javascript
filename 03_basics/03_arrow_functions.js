// this keyword refers to the current context under a particular scope

const user = {
  username: "dev",
  price: 999,
  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
    
  }
}

// user.welcomeMessage()
// user.username = "guru"
// user.welcomeMessage()

// console.log(this);

// console.log(this) => Window in browser because Window is the global object in browser

function chai() {
  let user = "lala"
  console.log(this.user); // undefined =? becwause we cannot use this inside a function
  console.log(this);
}

chai()

const anotherChai = () => {
  let user = "jd";
  console.log(this.user); // undefined
  console.log(this); // {}
}

anotherChai()

/** BASIC ARROW FUNCTION */

const addTwo = (num1, num2) => {
  return num1 + num2;
}

console.log(addTwo(3, 4));

/** IMPLICIT RETURN ARROW FUNCTION */

const addThree = (num1, num2) => num1 + num2;

console.log(addThree(5, 6));

const addFour = (num1, num2) => (num1 + num2);

console.log(addFour(7, 6));

const userOne = () => ({ username: "dutt" })

console.log(userOne());

