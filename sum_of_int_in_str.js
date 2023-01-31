// Your task in this kata is to implement a function that calculates the sum of the integers inside 
// a string.For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
// the sum of the integers is 3635.

function sumOfIntegersInString(s) {
    // /[^0-9]/gi would identify NOT digits and we would split string at those 'not digits'
    // so we have an array of empty strings and numbers
    const searchNumber = s.split(/[^0-9]/gi)
    let total = 0
    // itterate over the bew array and add those digits up to total
    for (let i = 0; i < searchNumber.length; i++) {
        total += Number(searchNumber[i])
    }
    return total
}