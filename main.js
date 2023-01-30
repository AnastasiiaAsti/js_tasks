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