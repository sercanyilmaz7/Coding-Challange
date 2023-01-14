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
function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([-2.492]));
//*****************************************************************
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

let c = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

function openOrSenior(data) {
  let v = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 55 && data[i][1] > 7) {
      v.push("senior");
    } else {
      v.push("open");
    }
  }
  return v;
}
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);

//*****************************************************************

function filter_list(l) {
  const k = l.filter((x) => typeof x !== "string" && x > 0);
  console.log(k);
}
filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123, -1]);

//*****************************************************************

function countConsonants(str) {
  let b1 = str.toLowerCase().split("");
  let setB1 = new Set(b1);
  let count = 0;
  for (let x of setB1) {
    if (x !== "a" && x !== "e" && x !== "i" && x !== "u" && x !== "o") {
      count++;
    }
  }
  return console.log(count);
}

countConsonants("add");
countConsonants("Dad");
countConsonants("aeiou");
countConsonants("abcdefghijklmnopqrstuvwxyz");
countConsonants("Count my unique consonants!!");

// let a1 = "add";
// let b1 = a1.split("");
// console.log(b1);
// let setB1 = new Set(b1);
// console.log(setB1);

// // setB1.forEach(x => console.log(x))
// let count =0
// for(let x of setB1){
// if(x !== "a" && x !== "e" && x !== "i"&& x !== "u"&& x !== "o"){
//   count++
// }
// }

//?Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.*/

const countConsonantss = (str) => {
  arr = str
    .toLowerCase()
    .split("")
    .filter((letter) => letter.match(/[b-df-hj-np-tv-z]/));
  //arr=new Set(arr)
  return arr; //.size
};
console.log(countConsonantss("musatafa"));

//*****************************************************************

//? Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

//?If you want to know more: http://en.wikipedia.org/wiki/DNA

//?In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//?More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

//?Example: (input --> output)

//?"ATTGC" --> "TAACG"
//?"GTAT" --> "CATA"

function DNAStrand(dna) {
  let DnaSample = [];
  let DNA = dna.split("");
  for (x of DNA) {
    if (x === "A") {
      DnaSample.push("T");
    } else if (x === "T") {
      DnaSample.push("A");
    } else if (x === "C") {
      DnaSample.push("G");
    } else if (x === "G") {
      DnaSample.push("C");
    }
  }
  return DnaSample.join("");
}

console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("gTAT"));

// let cc = []
// cc.push("A","B")
// console.log(cc);
// cc.join("")
// console.log(cc.join(""));

//*****************************************************************

//?ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//?If the function is passed a valid PIN string, return true, else return false.

//?Examples (Input --> Output)
//?"1234"   -->  true
//?"12345"  -->  false
//?"a234"   -->  false

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < "0" || pin[i] > "9") {
      return false;
    }
  }
  return true;
}
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));

//*****************************************************************

//? You might know some pretty large perfect squares. But what about the NEXT one?

//? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//? If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//? Examples:(Input --> Output)

//? 121 --> 144
//? 625 --> 676
//? 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  let a = Math.sqrt(sq);
  if (!Number.isInteger(a)) {
    return -1;
  }
  return (a + 1) ** 2;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

// let a = 121
// let b = Number.isInteger(Math.sqrt(a))
// let cc = Math.sqrt(a)
// console.log(cc);
// console.log(b);

//*****************************************************************

//?Return the number (count) of vowels in the given string.

//?We will consider a, e, i, o, u as vowels for this Kata (but not y).

//?The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let arr = [];
  for (x of str) {
    if (x === "a" || x === "e" || x === "i" || x === "u" || x === "o") {
      arr.push(x);
    }
  }
  return arr.length;
}
console.log(getCount("abracadabra"));

//*****************************************************************
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

//*****************************************************************

function areYouPlayingBanjo(name) {
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));

//*****************************************************************

function positiveSum(arr) {
  let sum = 0;
  for (x of arr) {
    if (x > 0) {
      sum += x;
    }
  }
  return sum;
}

console.log(positiveSum([-1, 2, 3, 4, -5]));

//*****************************************************************

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// MATHEMATICSFUNDAMENTALS

function squareDigits(num) {
  let numm = num.toString().split("");
  const ns = numm.map((x) => x ** 2);
  return Number(ns.join(""));
}

console.log(squareDigits(3212));
console.log(squareDigits(0));

//*****************************************************************

function friend(friends) {
  const myFriends = friends.filter((x) => x.length === 4);
  return myFriends;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

//*****************************************************************
function removeSmallest(numbers) {
  let result = Math.min(...numbers);
  let x = numbers.indexOf(result);
  numbers.splice(x, 1);
  return numbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([1, 2, 3, 4, 1, 5]));

// const numbers = [1,5, 9, 8, 2, 6, 4, 7, 3,2,1, 13];

// const result = Math.min(...numbers);
// console.log(result);
// console.log(numbers.indexOf(result));

//*****************************************************************

function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}

//*****************************************************************

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let arr = [];
  for (x in games) {
    if (games[x][0] > games[x][2]) {
      arr.push(3);
    } else if (games[x][0] === games[x][2]) {
      arr.push(1);
    } else if (games[x][2] > games[x][0]) {
      arr.push(0);
    }
  }
  console.log(arr);
  const arrSum = arr.reduce((total, y) => total + y);
  return arrSum;
}

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);

//*****************************************************************

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

let cc = Object.entries(objA);
console.log(cc);

//*****************************************************************

let ss = [
  ["a", 10],
  ["b", 20],
  ["c", 30],
];

for (i in ss) {
  console.log(i);
}

console.log(ss[0][1]);

//  let result ={}
//  result[a] = 2
//  console.log(result);

//*****************************************************************


//*****************************************************************

//? Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
//? All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
//? An example:
//? const objA = { a: 10, b: 20, c: 30 }
//? const objB = { a: 3, c: 6, d: 3 }
//? combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
//? The combine function should be a good citizen, so should not mutate the input objects.


//****************************1.yöntem*************************************

// const combine = (...arr) => {
//   let finalObj = {};
//   for (let obj of arr) {
//     for (let key in obj) {
//       finalObj[key] ? (finalObj[key] += obj[key]) : (finalObj[key] = obj[key]);
//     }
//   }
//   return finalObj;
// };
// const objA = { a: 10, b: 20, c: 30, e: 7 };
// const objB = { a: 3, c: 6, d: 3, e: 8, g: 4 };
// const objC = { a: 2, c: 6, d: 3, e: 1, h: 4 };
// console.log(combine(objA, objB, objC)); //{a: 15, b: 20, c: 42, e: 16, d: 6, g: 4, h: 4}

//******************************2.yöntem***********************************


const combine = (...obj) => {
  console.log(obj);
  let result = {};
  for (const i of obj) {
    for (const j in i) {
      if (Object.keys(result).includes(j)) {
        result[j] += Object.entries(i)[Object.keys(i).indexOf(j)][1];
      } else {
        result[j] = Object.entries(i)[Object.keys(i).indexOf(j)][1];
      }
    }
  }
  return result;
};

console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }));



//*****************************************************************



("use strict");

const obA = { a: 10, b: 20, c: 30 };
const obB = { a: 3, c: 6, d: 3 };

function combin(obA, obB) {
  let combined = {};
  for (const key in obA) {
    console.log(key);
    console.log(obA[key]);
    combined[key] = obA[key];
    console.log(combined);
  }
  for (const key in obB) {
    if (combined[key]) {
      combined[key] += obB[key];
    } else {
      combined[key] = obB[key];
    }
  }
  return combined;
}

const combined = combin(obA, obB);
console.log(combined); // output {a: 13, b: 20, c: 36, d: 3}

const oo = {};
const oA = { a: 10, b: 20, c: 30 };
oo.a = oA.a;
console.log(oo);

//*****************************************************************
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let v of Object.values(people)) {
  console.log(v);
}

for (let [k, v] of Object.entries(people)) {
  console.log(k, v);
}

const A = { a: 10, b: 20, c: 30 };
const B = { a: 3, c: 6, d: 3 };

console.log(Object.keys(A));
console.log(Object.values(A));
console.log(Object.entries(A));
console.log(Object.keys(B));
console.log(Object.values(B));
console.log(Object.entries(B));

function yap(A, B) {
  let son ={}
  let a = Object.keys(A);
  let b = Object.values(A);
  let c = Object.keys(B);
  let d = Object.values(B);
for(let i of a){
  for (let j of b){
    if(i===j){
      son[i]+=b[j]
    }

  }
}
}
yap(A, B);
//*****************************************************************
const combinee = (...arr) => {
  console.log(arr);
};
const objjA = { a: 10, b: 20, c: 30 };
const objjB = { a: 3, c: 6, d: 3 };
combinee(objjA, objjB);

console.log(objjA.a);
console.log(objjA["a"]);

for (let i in objjA) {
  console.log(i); //? a,b,c
  console.log(objjA[i]); //? 10,20,30
}

//*****************************************************************