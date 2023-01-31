// multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

// option 2

function simpleMultiplication2(n){
  return n % 2 == 0 ? n * 8 : n * 9
}