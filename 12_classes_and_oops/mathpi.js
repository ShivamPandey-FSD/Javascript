const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const Tea = {
  name: "Ginger Tea",
  price: 250,
  isAvailable: true,
  order: function() {
    console.log("The tea is not ready yet");
  }
}

// console.log(Object.getOwnPropertyDescriptor(Tea, 'name'))

// Object.defineProperty(Tea, "name", {
//   writable: false,
//   enumerable: false
// })

// Tea.name = "Ice Tea"

Object.defineProperties(Tea, {
  "name": {
    writable: false,
    enumerable: false
  },
  "price": {
    writable: false,
    enumerable: false
  },
  "isAvailable": {
    writable: false,
    enumerable: false
  }
})

console.log(Object.getOwnPropertyDescriptor(Tea, 'name'))

for (let [key, value] of Object.entries(Tea)) {
  if (typeof value !== 'function') {
    console.log(`${key}: ${value}`);
  }
}
