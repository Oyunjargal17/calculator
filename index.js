const args = process.argv;
const a = Number(args[2]);
const b = Number(args[4]);
const operator = args[3];
console.log(args);

if (operator === "+") {
  console.log("=", a + b);
} else if (operator === "-") {
  console.log("=", a - b);
} else if (operator === "*") {
  console.log("=", a * b);
} else if (operator === "/") {
  console.log("=", a / b);
}

// console.log(subtract);

// console.log(args);

//hervee op ni + baival
// console.log(a + b)

//hervee op ni - baival
// console.log(a - b)
