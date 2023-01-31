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

// option 2

const getSumOfDigits2 = number => number.toString().split('').map(Number).reduce((a, b) => a + b)