// constructor method
// Object.create

const tinderUser = new Object();

console.log(tinderUser);  // {}

tinderUser.id = 101;
tinderUser.name = "Shivam"
tinderUser.email = "shivam@abc.com"

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
  email: "gp123@jk.com",
  fullname: {
    userfullname: {
      firstname: "Gaurav",
      lastname: "Panchal"
    }
  }
}

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// console.log(regularUser.fullname?.userfullname); // ? it provdes the protection if the value is empty

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const user = [
  {
    id: 1,
    email: "shivam@kj.com"
  }
]

const courseInfo = {
  courseName: "Java",
  price: "30000",
  institute: "edureka"
}

const {courseName, price, institute} = courseInfo

console.log(courseName);
console.log(price);
console.log(institute);

