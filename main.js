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