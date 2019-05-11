var numGuess = 0;      //Number of guesses left for the current round.
var numWins = 0;       //Number of wins so far(all the rounds).

var numEmptySlots;     //How many slots left to complete the name of the movie.
var currGuess;         //Letter the user just chose.
//var currFilm;         //Name of random movie chosen for the current round.
//var matchedGuess = []; //Holds correctly guessed letters that match movie name.
   //Holds all guessed letters to avoid repetitions, which don't affect numGuess.
//The game object is strictly for debugging purposes.
var game = {BRAVEHEART: "1", SPEED: "2", TITANIC: "3", GHOST: "4", 
filmTitles: ["BRAVEHEART", "SPEED", "TITANIC", "GHOST"],
getRandFilm: function() {
    //return a film title using a random function.
    var index = Math.floor(Math.random() * this.filmTitles.length); //using "this" keyword is necessary to reference filmTitles in this object.
    console.log(index);
    return this.filmTitles[index];
},
getClipFilm: function(rf) {
    var randFilm = rf;
    //return link for a short video clip, when user correctly guesses the random film.
    if (true) {
        //---------------Getting undefined message on console----------------------------what is wrong here?
        //console.log(this.randFilm);
        return this[randFilm]; //this syntax "this.randFilm" is incorrect because...........
    }
},
isRandFilm: true
};
//ninetiesGame is the actual object for the project.
var ninetiesGame = {"BRAVEHEART": "1", "SEINFELD": "2", "SPEED": "3", "ARMAGEDDON": "4", "TITANIC": "5", "GHOST": "6", "FRIDAY": "7", "FRIENDS": "8", "ER": "9",
"THE SIMPSONS": "10", "FAMILY MATTERS": "11", "INDEPENDENCE DAY": "12", "FORREST GUMP": "13", "PRETTY WOMAN": "14", "BEFORE SUNRISE": "15", "LION KING": "16", 
"TOY STORY": "17", "THE MATRIX": "18", "BAD BOYS": "19", "GOOD FELLAS": "20", "BOYZ IN THE HOOD": "21", "HE GOT GAME": "22", "SAVING PRIVATE RYAN": "23",
filmTitles: ["BRAVEHEART", "SEINFELD", "SPEED", "ARMAGEDDON", "TITANIC", "GHOST", "FRIDAY", "FRIENDS", "ER", "THE SIMPSONS", "FAMILY MATTERS", 
"INDEPENDENCE DAY", "FORREST GUMP", "PRETTY WOMAN", "BEFORE SUNRISE", "LION KING", "TOY STORY", "THE MATRIX", "BAD BOYS", "GOOD FELLAS", 
"BOYZ IN THE HOOD", "HE GOT GAME", "SAVING PRIVATE RYAN"], 
numGuess: 0,
currFilm: "",
currClip: "",
//validGuess: [],   //Turn this array to an object, so that the indices can be the value pair????????******************************
allGuess: [],
//multPosGuess: [], //may not need this array???
currState: [],    //Array holds the current state of the game(empty slots, correct guesses or a combination of both)

isRandFilm: true, //Will use this boolean to return the clip that will play after the user successfully guesses the film title.
//onlySpaces: false,  //haven't processed yet!!!


setCurrFilm: function() {
    //sets a film title using a random function.
    var index = Math.floor(Math.random() * this.filmTitles.length); //using "this" keyword is necessary to reference filmTitles in this object.
    //console.log(index);
    this.currFilm = this.filmTitles[index];
    //also update the number of guesses for each new (random) film title
    this.updateNumGuess();
},

setClipFilm: function() {
    //sets link for a short video clip, when user correctly guesses the random film.
    //console.log(randFilm);
    if (this.isRandFilm) {
        //---------------Getting undefined message on console----------------------------what is wrong here?
        //console.log(this.randFilm): "this.randFilm" is incorrect because...........
        this.currClip = this[this.currFilm]; 
    }
},

updateNumGuess: function() {
    if (this.numGuess === 0) {
        console.log("Right execution flow? Yes.....")
        this.numGuess = this.currFilm.length + 3;
    }
   
},

isLetterValid: function(newLetter) {
    //Returns a boolean, indicating whether the letter picked by the user is valid(non-repeating).
    if (this.currState.includes(newLetter)) {
        return false;
    }
    else{
        return true;
    }
    
},
/* DON'T THINK I NEED THIS====================================================================================================================
//Instaed of worrying about position of multiple entries via multPosGuess, why not use indices to keep track of the 
//position of valid guesses, including the ones that occupy multiple positions.***************************************************************
addLetterGuess: function(newLetter, rFilm) {
    //adds letter guessed to the array that records all guesses for this round.
    this.allGuess.push(newLetter);
    for (var i=0; i < rFilm.length; i++){
        //also keep track of numbers added multiple times.**************************************
        if (rFilm.charAt(i) === newLetter && !this.validGuess.includes(newLetter)){
            //adds a letter to the array that records correctly guessed letters.
            this.validGuess.push(newLetter);
        }
        else if (rFilm.charAt(i) === newLetter && this.validGuess.includes(newLetter)){
            //add guessed letter that are repeated in the film title in a specific array.
            this.multPosGuess.push(newLetter);
        }
    }
},*/

addLetterGuessed: function(nLetter) {
    //adds letter guessed to two arrays and update number of user guesses.
    var userLetter = nLetter;
    if (this.isLetterValid(userLetter)) {
        //update number of guesses
        this.numGuess--;
        //add guess to the array recording all the guesses
        this.allGuess.push(userLetter);


    }
},

createCurrState: function() {
    //Creates an array which shows the current state of the game to the user.The user will see a formatted version of this array.
    for (var i = 0; i < this.currFilm.length; i++) {
        if (i !== (this.currFilm.length - 1)) {
            this.currState.push("_ ");
        }
        else {
            this.currState.push("_");
        
        }
    }
    console.log(this.currState);
    console.log(this.currState[3]);

},

updateCurrState: function(nLetter) {
    //Changes the array which shows the current state of the game after a successful guess by the user.
    var userLetter = nLetter;
    if (this.currFilm.includes(userLetter) && this.isLetterValid(userLetter)) {
        //if guessed letter is correct and has not been picked then update the current state of the game.
        for (var i = 0; i < this.currFilm.length; i++) {
            if (userLetter === this.currFilm.charAt(i)) {
                this.currState[i] = nLetter;
            }
        }
    }
}
};
ninetiesGame.setCurrFilm();
console.log("random film: " + ninetiesGame.currFilm);  //ok
ninetiesGame.createCurrState();
console.log(ninetiesGame.currState);  //? should be empty?!**********
ninetiesGame.setClipFilm();
console.log("link # of random film: " + ninetiesGame.currClip);  //ok
console.log("The number of guesses left " + ninetiesGame.numGuess); //ok
var checkLetterValid = ninetiesGame.isLetterValid("T");
console.log("The letter pick is valid: " + checkLetterValid); //ok
ninetiesGame.addLetterGuessed("T");
ninetiesGame.updateCurrState("T");
console.log("User's guesses so far: " + ninetiesGame.allGuess);  //ok
console.log("Current state of the round: " + ninetiesGame.currState);  //ok
console.log("The number of guesses left " + ninetiesGame.numGuess);
console.log("==============================================================================");
ninetiesGame.addLetterGuessed("A");
ninetiesGame.updateCurrState("A");
console.log("User's guesses so far: " + ninetiesGame.allGuess);
console.log("Current state of the round: " + ninetiesGame.currState);
console.log("The number of guesses left " + ninetiesGame.numGuess);
console.log("==============================================================================");
ninetiesGame.addLetterGuessed("E");
ninetiesGame.updateCurrState("E");
console.log("User's guesses so far: " + ninetiesGame.allGuess);
console.log("Current state of the round: " + ninetiesGame.currState);
console.log("The number of guesses left " + ninetiesGame.numGuess);
console.log("==============================================================================");
ninetiesGame.addLetterGuessed("B");
ninetiesGame.updateCurrState("B");
console.log("User's guesses so far: " +ninetiesGame.allGuess);
console.log("Current state of the round: " + ninetiesGame.currState);
console.log("The number of guesses left " + ninetiesGame.numGuess);
console.log("==============================================================================");
ninetiesGame.addLetterGuessed("I");
ninetiesGame.updateCurrState("I");
console.log("User's guesses so far: " +ninetiesGame.allGuess);
console.log("Current state of the round: " + ninetiesGame.currState);
console.log("The number of guesses left " + ninetiesGame.numGuess);
console.log("==============================================================================");
ninetiesGame.addLetterGuessed("O");
ninetiesGame.updateCurrState("O");
console.log("User's guesses so far: " +ninetiesGame.allGuess);
console.log("Current state of the round: " + ninetiesGame.currState);
console.log("The number of guesses left " + ninetiesGame.numGuess);