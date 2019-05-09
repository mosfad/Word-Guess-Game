var numGuess = 0;      //Number of guesses left for the current round.
var numWins = 0;       //Number of wins so far(all the rounds).

var numEmptySlots;     //How many slots left to complete the name of the movie.
var currGuess;         //Letter the user just chose.
var currFilm;         //Name of random movie chosen for the current round.
var matchedGuess = []; //Holds correctly guessed letters that match movie name.
var allGuessed = [];   //Holds all guessed letters to avoid repetitions, which don't affect numGuess.
game = {BRAVEHEART: "1", SPEED: "2", TITANIC: "3", GHOST: "4"};
ninetiesGame = {"BRAVEHEART": "1", "SEINFELD": "2", "SPEED": "3", "ARMAGEDDON": "4", "TITANIC": "5", "GHOST": "6", "FRIDAY": "7", "FRIENDS": "8", "ER": "9",
"THE SIMPSONS": "10", "FAMILY MATTERS": "11", "INDEPENDENCE DAY": "12", "FORREST GUMP": "13", "PRETTY WOMAN": "14", "BEFORE SUNRISE": "15", "LION KING": "16", 
"TOY STORY": "17", "THE MATRIX": "18", "BAD BOYS": "19", "GOOD FELLAS": "20", "BOYZ IN THE HOOD": "21", "HE GOT GAME": "22", "SAVING PRIVATE RYAN": "23",
filmTitles: ["BRAVEHEART", "SEINFELD", "SPEED", "ARMAGEDDON", "TITANIC", "GHOST", "FRIDAY", "FRIENDS", "ER", "THE SIMPSONS", "FAMILY MATTERS", 
"INDEPENDENCE DAY", "FORREST GUMP", "PRETTY WOMAN", "BEFORE SUNRISE", "LION KING", "TOY STORY", "THE MATRIX", "BAD BOYS", "GOOD FELLAS", 
"BOYZ IN THE HOOD", "HE GOT GAME", "SAVING PRIVATE RYAN"], 
isRandFilm: true,

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
        return this.randFilm;
    }
}
};
var randomFilm = ninetiesGame.getRandFilm();
console.log(typeof(randomFilm));
var randomClipFilm = ninetiesGame.getClipFilm(randomFilm);
//---------------Getting undefined message on console----------------------------what is wrong here?
//console.log(randomClipFilm);