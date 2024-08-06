const user_email = "dev@abc.com"

if (user_email) {
  console.log("have user email");
} else {
  console.log("dont have user email");
}

const match = [];

if (match) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// falsy values => false, "", 0, -0, BigInt 0n, null, undefined, NaN

// interesting truthy values => "0", "false", " ", [], {}, function() {}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = undefined ?? null;
// val1 = null ?? undefined;
// val1 = null ?? 10 ?? 15
// val1 = null ?? undefined ?? 10 ?? 15
val1 = undefined ?? null ?? 10 ?? 15

console.log(val1);

// ternary operator
// condition ? true : false
