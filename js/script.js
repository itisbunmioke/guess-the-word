const guessed = document.querySelector('.guessed-letters');
const guessButton = document.querySelector('.guess');
const input = document.querySelector('.letter');
const wordInProgress = document.querySelector('.word-in-progress');
const remaining = document.querySelector('.remaining');
const guessesLeft = document.querySelector('span');
const message = document.querySelector('.message');
const playAgainButton = document.querySelector('.play-again');
const word = "magnolia";


const letterPlaceholder = function(text) {
    text.split('').forEach(function (letter) {
        console.log("●")
})
}

letterPlaceholder(word);

guessButton
