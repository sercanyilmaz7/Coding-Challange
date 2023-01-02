// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7 ?

// let operator = prompt(`Please enter operation + or - or * or /`);
// let value1 = Number(prompt(`Please enter first value`));
// let value2 = Number(prompt(`Please enter second value`));

// const operation = function (operator, value1, value2) {

//   if (operator === "+") {
//     return value1 + value2;
//   }
//   if (operator === "-") {
//     return value1 - value2;
//   }
//   if (operator === "*") {
//     return value1 + value2;
//   }
//   if (operator === "/") {
//     return value1 / value2;
//   } else {
//     return `you have entered wrong number or operators`;
//   }
// };

// console.log(operation(operator, value1, value2));

///*****************************************************************

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// const check =(a,b)=>{
//   if(a.includes(b)){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(check(["what", "a", "great", "kata"], "kata"));  // true
// console.log(check(["what", "a", "great", "kata"], "kat"));  // false

///*****************************************************************

//       1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// function rowSumOddNumbers(n) {
//   return n * n * n;
// }

// console.log(rowSumOddNumbers(42));

///*****************************************************************

// Example :

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

// let number = Number(prompt("please enter a number"));

// const divide = function (number) {
//   numstr = number.toString();
//   counter = 0;
//   for (i = 0; i < numstr.length; i++) {
//     if (number % numstr[i] === 0) {
//       counter ++;
//     }
//   }
//   return counter;
// };

// console.log(divide(number));

//? İkinci Yöntem

// const divisible = (num) => {
//   str = num.toString();
//   counter = 0;
//   for (i = 0; i < str.length; i++) {
//     num % str[i] === 0 ? counter++ : counter;
//   }
//   return counter;
// };

// console.log(divisible(1248));

///*****************************************************************

// An integer val divides nums if nums % val == 0.

// Given an array of positive integers nums, return the number of distinct prime factors in the product of the elements of nums.

// Note that:

// A number greater than 1 is called prime if it is divisible by only 1 and itself.
// An integer val1 is a factor of another integer val2 if val2 / val1 is an integer.

// Example 1:

// Input: nums = [2,4,3,7,10,6]
// Output: 4
// Explanation:
// The product of all the elements in nums is: 2 * 4 * 3 * 7 * 10 * 6 = 10080 = 25 * 32 * 5 * 7.
// There are 4 distinct prime factors so we return 4.
// Example 2:

// Input: nums = [2,4,8,16]
// Output: 1
// Explanation:
// The product of all the elements in nums is: 2 * 4 * 8 * 16 = 1024 = 210.
// There is 1 distinct prime factor so we return 1.

// Constraints:

// 1 <= nums.length <= 104
// 2 <= nums[i] <= 1000

///*****************************************************************

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// function narcissistic(value) {
//   a = value.toString();
//   n = a.length;
//   sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum = sum + a[i] ** n;
//   }
//   return value == sum ? true : false;
// }

// console.log(narcissistic(153));

//? condition tarafı diğer yazım

// if (value == sum) {
//   console.log(true);
// } else {
//   console.log(false);
// }

///*****************************************************************

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// function descendingOrder(n) {
//   str1 = n.toString();
//   str = str1.split("");
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       temp = str[j];
//       if (str[j] > str[j+1]) {
//         str[j] = str[j+1];
//         str[j+1] = temp;
//       }
//     }
//   }
//   return parseInt( str.join(""));
// }

// console.log(descendingOrder(51));

//?diğer yöntem


// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }


// console.log(descendingOrder(4681436));

// let n= 12345
// str1 = n.toString();
// str = str1.split("");
// s=str.join("")
// n=parseInt(s)
// console.log(n);


// let n = 12345
//  str1 = n.toString();
//  str = str1.split("");

///*****************************************************************




// function addBinary(a, b) {
//   var sum = a + b,
//     binary = "";

//   while (sum > 0) {
//     binary = (sum % 2) + binary;
//     sum = Math.floor(sum / 2);
//   }

//   return binary;
// }
// console.log(addBinary(100,0));


//? 2nci Yöntem

// function addBinary(a, b) {
//   return (a + b).toString(2);
// }
// console.log(addBinary(100, 0));

///*****************************************************************

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s){
//   const result =[]
//   const lowerStr = s.toLowerCase()
//   for(let i =0;i<lowerStr.length;i++){
//     str=lowerStr[i].toUpperCase();
//     for(let j=0;j<i;j++){
//       str+=lowerStr[i];
//     }
//     result.push(str);
//   }
//   return result.join("-")
// }
// console.log(accum("abcd"));


///*****************************************************************
