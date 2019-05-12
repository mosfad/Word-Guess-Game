
var numWins = 0;       //Number of wins so far(all the rounds).



//ninetiesGame is the object for the project.
var ninetiesGame = {"BRAVEHEART": '<iframe width="560" height="315" src="https://www.youtube.com/embed/1NJO0jxBtMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "SEINFELD": '<iframe width="560" height="315" src="https://www.youtube.com/embed/4T2GmGSNvaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "SPEED": '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fk4A1AY10U0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "ARMAGEDDON": '<iframe width="560" height="315" src="https://www.youtube.com/embed/kg_jH47u480" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "TITANIC": '<iframe width="560" height="315" src="https://www.youtube.com/embed/2e-eXJ6HgkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "GHOST": '<iframe width="560" height="315" src="https://www.youtube.com/embed/7g8txBxL7zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "FRIDAY": '<iframe width="560" height="315" src="https://www.youtube.com/embed/nH1Ulp4PBtA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "FRIENDS": '<iframe width="560" height="315" src="https://www.youtube.com/embed/1lMIh9dYNb8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
"ER": '<iframe width="560" height="315" src="https://www.youtube.com/embed/LjPf1_3H3fs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "FRASIER": '<iframe width="560" height="315" src="https://www.youtube.com/embed/JbRbfj7Ig74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "MARTIN": '<iframe width="560" height="315" src="https://www.youtube.com/embed/RWbJ-reslRs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', "CHEERS": '<iframe width="560" height="315" src="https://www.youtube.com/embed/l5betsZNsGM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
filmTitles: ["BRAVEHEART", "SEINFELD", "SPEED", "ARMAGEDDON", "TITANIC", "GHOST", "FRIDAY", "FRIENDS", "ER", "FRASIER", "MARTIN", "CHEERS"], 
numGuess: 0,
currFilm: "",
currClip: "",
allGuess: [],
currState: [],    //Array holds the current state of the game(empty slots, correct guesses or a combination of both)
isRandFilm: true, //Will use this boolean to return the clip that will play after the user successfully guesses the film title.



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
        console.log("resetting numGuess for new word............")
        this.numGuess = this.currFilm.length + 3;
    }
   
},

isLetterValid: function(newKey) {
    //Returns a boolean, indicating whether the letter picked by the user is valid(non-repeating).
    var letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var indexOfKey = letterStr.indexOf(newKey);
    if (this.currState.includes(newKey) || indexOfKey === -1) {
        return false;
    }
    else{
        return true;
    }
    
},

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
},
resetGame: function() {
    //resets the game after a loss or a win. Also update win counts.
    if (this.isRandFilm)  {
        numWins++;
    }
    this.currFilm = "";
    this.currClip = "";
    this.allGuess = [];
    this.currState = [];
    this.isRandFilm = false;
}
};
ninetiesGame.setCurrFilm();
console.log("random film: " + ninetiesGame.currFilm);  //ok
ninetiesGame.createCurrState();
console.log(ninetiesGame.currState);  //
ninetiesGame.setClipFilm();
//console.log("link # of random film: " + ninetiesGame.currClip);  //ok
console.log("The number of guesses left " + ninetiesGame.numGuess); //ok

document.onkeyup = function(event) {
    //event is triggered when the user presses and releases a key

    //determine the letter the user picked
    var userPick = event.key;
    //convert all user picks(letters) to uppercase.
    userPick = userPick.toUpperCase();
    console.log(userPick);

    console.log("==============================================================================");
    ninetiesGame.addLetterGuessed(userPick);
    ninetiesGame.updateCurrState(userPick);
    console.log("User's guesses so far: " + ninetiesGame.allGuess);
    console.log("Current state of the round: " + ninetiesGame.currState);
    console.log("The number of guesses left " + ninetiesGame.numGuess);
    console.log("==============================================================================");
    //if the rounds ends in a win or otherwise, then reset the game.
    if (ninetiesGame.numGuess === 0 || (!ninetiesGame.currState.includes("_ ") && !ninetiesGame.currState.includes("_"))) {
        ninetiesGame.numGuess = 0;
        //if the round ended in a wiin, update number of wins.S
        if (!ninetiesGame.currState.includes("_ ") && !ninetiesGame.currState.includes("_")) {
            ninetiesGame.isRandFilm = true;
            console.log(ninetiesGame.currClip);
        }
        ninetiesGame.resetGame();
        //preparing for a new round!
        ninetiesGame.setCurrFilm();
        console.log(ninetiesGame.currFilm);
        ninetiesGame.createCurrState();
        ninetiesGame.setClipFilm();
    }
    
    console.log(numWins);











}