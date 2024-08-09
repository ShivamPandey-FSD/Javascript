const user = {
  username: "Shivam",
  loginCount: 7,
  signedIn: true,
  getUserDetails: function() {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
}

console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("dev", 10, true);
const userTwo = new User("chai aur code", 7, false);
console.log(userOne);