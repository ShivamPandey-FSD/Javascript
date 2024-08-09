class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const tech = new Teacher("Jay", "jay@abc.com", "jay123")
tech.addCourse()
tech.logMe()

const dev = new User("Sumit");
dev.logMe()

console.log(tech instanceof Teacher);
console.log(tech instanceof User);

