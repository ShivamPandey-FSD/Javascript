// for in

const myObj = {
  js: 'Javascript',
  cpp: 'C++',
  rp: 'Ruby',
  swift: "Swift by Apple"
}

for (const key in myObj) {
  console.log(key, "=>", myObj[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

// console.log(map);

for (const key in map) {
  console.log(key);
}

// maps are not iterable in for in
