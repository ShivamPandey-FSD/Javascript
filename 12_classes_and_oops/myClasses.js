// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`
  }
}

const coffee = new User('coffee', 'coffee@gmail.com', 'coffee123')

console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());

// behind the scenes

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

const Tea = new User('coffee', 'coffee@gmail.com', 'coffee123')

console.log(Tea.encryptPassword());
console.log(Tea.changeUsername());
