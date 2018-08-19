var alphabet = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'];


// Create an array of Words
var wordbank = ['CheeseSteak', 'Rocky', 'Art Musuem', 'Phillies', 'Carson Wentz', 'Embiid', 'Allen Iverson ', 'Nick Foles', 'Eagles are Superbowl Champs', 'trust the process']

// Choose word randomly
var chosenWord = "";
var lettersInWord = [];
//holds the number of blanks in the word
var numBlanks = 0;
var wrongLetters = [];
//you needa hold the correct guess and the blanks!!
var blanksAndSuccesses = [];

var winCount = 0;
var loseCount = 0;
var guessLeft = 9;
var rightGuessCounter = 0;


function reset() {
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split('');
    numBlanks = lettersInWord.length;

    //RESET
    //===========================================================
    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    alphabet = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];
    test = false;
    startGame();
}
function startGame() {
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split('');
    numBlanks = lettersInWord.length;

    //RESET
    //===========================================================
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    alphabet = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];

    //Populate blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
    }

    //Changes HTML 
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}

function compareLetters(userKey) {
    if (chosenWord.indexOf(userKey) > -1) {
        for (var i = 0; i < numBlanks; i++) {
            if (lettersInWord[i] === userKey) {
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
            }
        }
        console.log(blanksAndSuccesses);
    }
    //Wrong Keys
    else {
        wrongLetters.push(userKey);
        guessesLeft--;
        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    }



}
function winLose() {
    if (rightGuessCounter === numBlanks) {
        //Counts Wins 
        winCount++;
        document.getElementById('winCounter').innerHTML = winCount;
        alert('You Win');
        reset();
    }
    // When number of Guesses reaches 0 then You lose
    else if (guessesLeft === 0) {
        loseCount++;
        document.getElementById('lossCounter').innerHTML = loseCount;
        alert('You Lose');
        reset();
    }
}

//Initiates the Code
startGame();

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < alphabet.length; i++) {
        if (letterGuessed === alphabet[i] && test === true) {
            var spliceDword = alphabet.splice(i, 1);
            compareLetters(letterGuessed);
            winLose();
        }
    }

}
