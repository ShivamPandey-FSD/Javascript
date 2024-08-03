let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let newDate = new Date(2024, 7, 5);

console.log(newDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(newDate.getTime()); // output in milliseconds (ms)

console.log(Math.floor(Date.now()/1000));

console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getYear());

newDate.toLocaleString('default', {
  weekday: 'narrow'
})





