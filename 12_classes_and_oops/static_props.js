class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createID() {
    return Math.round(Math.random() * 1000)
  }
}

const garima = new User("garima");

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const apple = new Teacher("apple", "appleiphone@i.com")
apple.logMe()

