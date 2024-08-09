const User = {
  _email: "h@123.com",
  _password: "h123",
  get email() {
    return this._email.toUpperCase();
  },
  set email(email) {
    this._email = email;
  }
}

const Tea = Object.create(User);
console.log(Tea.email);

