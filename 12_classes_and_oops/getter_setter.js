class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(password) {
    this._password = password;
  }
}

const Dev = new User("dev@abc.com", "dev123")
console.log(Dev.email);
console.log(Dev.password);

