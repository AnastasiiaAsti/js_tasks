//a function which convert the given boolean value into its string representation

function booleanToString(b) {
    return b.toString()
}

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

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

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

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
    } else if (month>=7 && month<=9){
        return 3
    } else {
        return 4
    }
}

const quarterOf2 = m => Math.ceil(m/3);