//a function which convert the given boolean value into its string representation

function booleanToString(b) {
    return b.toString()
}

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//  The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below
//  the number passed in.Additionally, if the number is negative, return 0(for languages that
// do have them).

function solution(number) {
    let result = 0;
    for (let i = 0; i < number; i++) {
        //check if number is devisible by 3 or 5 and the remainer is 0
        if (i % 3 === 0 || i % 5 === 0) {
            result = result + i;
        }
    }
    return result
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers
//  or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else return 'Odd'
}

function evenOrOdd2(number) {
    return number % 2 ? 'Odd' : 'Even'
}

//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}

function mango(quantity, price) {
    let freeMangos = Math.floor(quantity / 3);
    return (quantity - freeMangos) * price;
}


function mango(quantity, price) {
    let totalCost = 0;
    while (quantity > 0) {
        if (quantity > 2) {
            quantity -= 3;
            totalCost += 2 * price;
        } else {
            totalCost += price;
            quantity -= 1;
        }
    }
    return totalCost;
}

//Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// function createArray(number) {
//     var newArray = [];
    
//     for (var counter = 1; counter <= number;) {
//         newArray.push(counter);
//     }
//     return newArray;
// }


function createArray(number) {
    let newArray = [];
    
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint: 1 <= month <= 12

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
        return 1
    } else if (month >= 4 && month <= 6) {
        return 2
    } else if (month >=7 && month<=9){
        return 3
    } else {
        return 4
    }
}


// So that means, for months 1 - 3, dividing by 3 will give a value that will “have a ceiling” of 1
// (1 / 3 = 0.3333, 2 / 3 = 0.666, 3 / 3 = 1).Once you hit 4 is where you get “exactly what you want” 
// which is that 4 - 6 will have a “ceiling” of 2 for “the second quarter”
// (4 / 3 = 1.333, 5 / 3 = 1.6666, 6 / 3 = 2).
const quarterOf2 = m => Math.ceil(m / 3);


// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
    let c = 180 - (a + b)
    return c
}

const otherAngle = (a, b) => 180 - a - b

// multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

function simpleMultiplication2(n){
  return n % 2 == 0 ? n * 8 : n * 9
}

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" -- >
//     "battle no requires which that is victory greatest The"

function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, 
// Zero Cool and Crash Override are some notable examples from the film Hackers.
// Your task is to create a function that, given a proper first and last name, 
// will return the correct alias.
// Notes:
// Two objects that return a one word name in response to the first letter of the
// first name and one for the first letter of the surname are already given.See the examples below for further details.
// If the first character of either of the names given to the function is not a 
// letter from A - Z, you should return "Your name must start with a letter from A - Z."
// Sometimes people might forget to capitalize the first letter of their name so your 
// function should accommodate for these grammatical errors.

function aliasGen(first,last){
    let firstNameLetter = first[0].toUpperCase()
    let lastNameLetter = last[0].toUpperCase()

    if (firstName[firstNameLetter] && surname[lastNameLetter]) {
        return firstName[firstNameLetter] + ' ' + surname[lastNameLetter]
    } else {
        return 'Your name must start with a letter from A - Z.'
    }
}


// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated,
//     he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return 
// the number of litres Nathan will drink, rounded to the smallest value.


function litres(time) {
    let liters = time * 0.5
    return parseInt(liters)
}


// Debug function getSumOfDigits that takes positive integer to calculate sum 
// of its digits.Assume that argument is an integer.

function getSumOfDigits(integer) {
    let sum = 0;
    let digits = Math.floor(integer).toString();
    for (let ix = 0; ix < digits.length; ix++) {
        sum = sum + parseInt(digits[ix]);
    }
    return sum;
}

const getSumOfDigits2 = number => number.toString().split('').map(Number).reduce((a, b) => a + b)