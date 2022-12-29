// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7 ?

let operator = prompt(`Please enter operation + or - or * or /`);
let value1 = Number(prompt(`Please enter first value`));
let value2 = Number(prompt(`Please enter second value`));

const operation = function (operator, value1, value2) {
    
  if (operator === "+") {
    return value1 + value2;
  }
  if (operator === "-") {
    return value1 - value2;
  }
  if (operator === "*") {
    return value1 + value2;
  }
  if (operator === "/") {
    return value1 / value2;
  } else {
    return `you have entered wrong number or operators`;
  }
};

console.log(operation(operator, value1, value2));
