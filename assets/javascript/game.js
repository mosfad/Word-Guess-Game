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
validGuess: [],
allGuess: [],
multPosGuess: [],
isRandFilm: true,
onlySpaces: false,  //haven't processed yet.

setCurrFilm: function() {
    //sets a film title using a random function.
    var index = Math.floor(Math.random() * this.filmTitles.length); //using "this" keyword is necessary to reference filmTitles in this object.
    //console.log(index);
    this.currFilm = this.filmTitles[index];
    //also update the number of guesses for each new (random) film title
    this.updateNumGuess()
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
    else {
        console.log("Haven't tested the execution of this block of code!")
        this.numGuess = this.validGuess.length + this.multPosGuess.length;
    }
},

addLetterGuessed: function(newLetter, rFilm) {
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
}
};
ninetiesGame.setCurrFilm();
console.log(ninetiesGame.currFilm);
ninetiesGame.setClipFilm();
console.log(ninetiesGame.currClip);
console.log(ninetiesGame.numGuess);
