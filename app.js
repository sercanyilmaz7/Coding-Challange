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

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
//   sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   sum1 = Math.abs(sum);
//   if (array == [0] || array == []) {
//     return console.log("even");
//   } else if (sum1 % 2 === 0) {
//     return console.log("even");
//   } else if (sum1 % 2 !== 0) {
//     return console.log("odd");
//   }
//   return sum;
// }

// oddOrEven([1,2]);

// console.log(sum);

///*****************************************************************

// let a = "is2 Thi1s T4est 3a";
// b = a.split(" ")
// console.log(b);
// c = b[1]
// console.log(c);

// const numbers = ["is2", "Thi1s", "T4est", "3a"];

// console.log(numbers[0].includes(2)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// function order(words) {
//   arr = words.split(" ")
//   for(let i=0;i<arr.length-1;i++){

//     for(let j=1;j<arr.length;j++)
//     if(arr[i].includes[j]){

//     }

//   }
// }

///*****************************************************************

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// let sheeps = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// console.log(sheeps[0]);

// let counter = 0;
// const sheep = function (sheeps) {
//   for (let i = 0; i < sheeps.length; i++) {
//     if(sheeps[i] == true){
//       counter++
//     }
//   }
//   return counter
// };
//  console.log(sheep(sheeps));

///*****************************************************************
// Senior Level
// ----------------------------------------------------
// Find the closest palindrome number for your code:

// Example:
// Input: 216
// Output: 212

// Input: 100
// Output: 99

// Input: 77
// Output: 77

// NOTE:
// - palindrome number is number is same from left - right side
// - If the number itself is a palindrome, return that number.
// - If two palindrome numbers distance is same choose smaller number.

const reservednum = (num) => {
  const x = Number(num.toString().split("").reverse().join(""));
  return x;
};
//  console.log(reservednum(123));

const findPalindrome = (num) => {
  let bignum = num;
  let smallnum = num;
  let a = 0;
  let b = 0;
  if (num == reservednum(num)) {
    return num;
  } else {
    while (smallnum !== reservednum(smallnum)) {
      smallnum--;
      a++;
    }

    while (bignum !== reservednum(bignum)) {
      bignum++;
      b++;
    }
  }

  if (a <= b) {
    return smallnum;
  } else if (a > b) {
    return bignum;
  }
};

console.log(findPalindrome(158)); //161
console.log(findPalindrome(121)); //121
console.log(findPalindrome(302)); //303
console.log(findPalindrome(10)); //9
console.log(findPalindrome(1356)); //1331

///*****************************************************************

//  Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

function find(name, item) {
  let counter = 0;
  for (let i of name) {
    i === item && counter++;
  }
  return counter;
}
console.log(find("Hello", "o"));
console.log(find("Hello", "l"));

function find(name, item) {
  let counter = 0;
  for (let i in name) {
    name[i] === item || counter++;
  }
  return name.length - counter;
}
console.log(find("Hello", "o"));
console.log(find("Hello", "l"));

///*****************************************************************

let companiesString = "hello";
const companies = companiesString.split("l");

console.log(companies);

///*****************************************************************

//    An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

//  Note: anagrams are case insensitive

//  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//  isAnagram("foefet", "toffee") => output: true, 'The word "foefet" is an anagram of "toffee"'
//  isAnagram("Buckethead", "DeathCubeK") => output: true, 'The word "Buckethead" is an anagram of "DeathCubeK"'
//  isAnagram("Twoo", "WooT") => output: true, 'The word "Twoo" is an anagram of "WooT"'

//  isAnagram("dumble", "bumble") => output: false, 'Characters do not match for test case "dumble", "bumble"'
//  isAnagram("ound", "round") => output: false, 'Missing characters for test case "ound", "round"'
//  isAnagram("apple", "pale") => output: false, 'Same letters, but different count'

// const isAnagram = (test, original) => {
//   return (
//     test.toLowerCase().split("").sort().join("") ===
//     original.toLowerCase().split("").sort().join("")
//   );
// };

// const isAnagram = (test,orginial)=>{
//   let newtest = test.toLowerCase().split("").sort();
//   let neworginial = orginial.toLowerCase().split("").sort();

//   while(newtest === [])
//   for (let i=0;i<newtest.length;i++) {
//     for (let j=0;j<neworginial.length;j++) {
//       if(newtest[i]===neworginial[j]){
//         newtest.splice(i,1)
//         neworginial.splice(j,1)
//       }
//     }
//     console.log(newtest);
//     if(newtest ===[]&&neworginial===[]){
//       return "yes"
//     }else{
//       return "no"
//     }
//   }
// }
// console.log(isAnagram("foefet","tefefo"));

const isAnagram = (test, orginial) => {
  let newtest = test.toLowerCase().split("").sort().join("");
  let neworginial = orginial.toLowerCase().split("").sort().join("");

  return newtest === neworginial
    ? `The words ${test} and ${orginial} are anagrams.`
    : `${test} is not anagram of ${orginial}.`;
};

console.log(isAnagram("foefet", "toffee")); //The words foefet and toffee are anagrams.
console.log(isAnagram("dklea", "lkkksl")); //dklea is not anagram of lkkksl



///*****************************************************************