//Given a month as an integer from 1 to 12, 
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11(November), is part of the fourth quarter.

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

// option 2
// So that means, for months 1 - 3, dividing by 3 will give a value that will “have a ceiling” of 1
// (1 / 3 = 0.3333, 2 / 3 = 0.666, 3 / 3 = 1).Once you hit 4 is where you get “exactly what you want” 
// which is that 4 - 6 will have a “ceiling” of 2 for “the second quarter”
// (4 / 3 = 1.333, 5 / 3 = 1.6666, 6 / 3 = 2).
const quarterOf2 = m => Math.ceil(m / 3);