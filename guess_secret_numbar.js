// generate a secret number
const secretNum = Math.floor((Math.random() + 10) + 1)
// declare a var to hold player's guess
let guess = prompt('Please guess a number from 1 to 10')
guess = parseInt(guess)
// Loop while the huess is not correct
while (guess !== secretNum) {
    if (guess > secretNum) {
        console.log('too high')
    } else if (guess < secretNum) {
        console.log('too low')
    }
    guess = prompt('Wrong guess, try again!')
    guess = parseInt(guess)
}