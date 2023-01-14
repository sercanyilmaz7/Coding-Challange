// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.



let sum = 0;
let a = 0;
const binaryArrayToNumber = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    sum = sum + arr[i] * 2 ** a;
    a++;
  }
  return sum;
};



console.log(binaryArrayToNumber([1, 1, 1, 1, 1]));

const arr = [1, 0, 1, 1];
const parseArray = (arr) => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};


