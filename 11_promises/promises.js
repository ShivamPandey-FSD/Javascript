const promise_one = new Promise((resolve, reject) => {
  // async task
  // DB calls, cryptography, netwoek calls
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise_one.then(() => {
  console.log("Promise consumed");
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 consumed");
})

const promise_three = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "shivam", email: "shivam@abc.com" })
  }, 1000);
})

promise_three.then((res) => {
  console.log(res);
})

const promise_four = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "garima", password: "garima@123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
})

promise_four
.then((user) => {
  return user.username;
}).then((username) => {
  console.log(username);
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log("the promise is either resolved or rejected");
});

const promise_five = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: 'jay', password: 'jay567' });
    } else {
      reject('Something went wrong');
    }
  }, 1000);
})

async function consumePromiseFive() {
  try {
    const response = await promise_five;
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}

consumePromiseFive()
