function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function() {
      return this._email.toUpperCase();
    },
    set: function(email) {
      this._email = email;
    }
  })

  Object.defineProperty(this, "password", {
    get: function() {
      return this._password.toUpperCase();
    },
    set: function(password) {
      this._password = password;
    }
  })
}

const shivam = new User("chai@io.com", "chai123")
console.log(shivam.email)