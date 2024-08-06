const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// })

coding.forEach((item) => {
  console.log(item);
})

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
})

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe)

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "java"
  },
  {
    languageName: "Python",
    languageFileName: "py"
  },
]

myCoding.forEach((item) => {
  console.log(item.languageName);
})

myCoding.forEach(({languageFileName}) => {
  console.log(languageFileName);
})
