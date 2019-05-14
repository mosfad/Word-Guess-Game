
var numWins = 0;       //Number of wins so far(all the rounds).



//ninetiesGame is the object for the project.

var ninetiesGame = {"BRAVEHEART": "https://www.youtube.com/embed/1NJO0jxBtMo", "SEINFELD": "https://www.youtube.com/embed/HX55AzGku5Y", 
"SPEED": "https://www.youtube.com/embed/Fk4A1AY10U0", "ARMAGEDDON": "https://www.youtube.com/embed/kg_jH47u480", 
"TITANIC": "https://www.youtube.com/embed/2e-eXJ6HgkQ", "GHOST": "https://www.youtube.com/embed/7g8txBxL7zg", 
"FRIDAY": "https://www.youtube.com/embed/nH1Ulp4PBtA", "FRIENDS": "https://www.youtube.com/embed/P5TMcx0ofEc", 
"ER": "https://www.youtube.com/embed/LjPf1_3H3fs", 
"MARTIN": "https://www.youtube.com/embed/RWbJ-reslRs", "CHEERS": "https://www.youtube.com/embed/l5betsZNsGM", 
filmTitles: ["BRAVEHEART", "SEINFELD", "SPEED", "ARMAGEDDON", "TITANIC", "GHOST", "FRIDAY", "FRIENDS", "ER", "MARTIN", "CHEERS"], 
numGuess: 0,
currFilm: "",
currClip: "",
allGuess: [],
currState: [],    //Array holds the current state of the game(empty slots, correct guesses or a combination of both)
isRandFilm: true, //Will use this boolean to return the clip that will play after the user successfully guesses the film title.

//amargeddon vidoe not loading********

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
    if (this.currState.includes(newKey)|| indexOfKey === -1) {
        return false;
    }
    else{
        return true;
    }
    
},

addLetterGuessed: function(nLetter) {
    //adds unique letter guessed to an array and updates number of user guesses.
    var userLetter = nLetter;
    if (this.isLetterValid(userLetter) && !this.allGuess.includes(userLetter)) {
        //update number of guesses
        this.numGuess--;
        //add guess to the array recording all the unique guesses
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

//display the number of guess as the game begins.
var pg = document.createElement("p");
var pn = document.createTextNode(ninetiesGame.numGuess);
pg.appendChild(pn);
//document.getElementById("numGuess-id").appendChild(pg);


//already guessed
var ag = document.createElement("p");
var an = document.createTextNode(ninetiesGame.currState);
ag.appendChild(an);

//wins
var w = document.createElement("p");
var wn = document.createTextNode(ninetiesGame.numGuess);
w.appendChild(wn);

//current state
var cs = document.createElement("p");
var cn = document.createTextNode(ninetiesGame.currState.join(""));
//get rid of commas, so that user sees currState as a string.
console.log(ninetiesGame.currState.join(""));
cs.appendChild(cn);


document.onkeyup = function(event) {
    //event is triggered when the user presses and releases a key

    //determine the letter the user picked
    var userPick = event.key;
    //convert all user picks(letters) to uppercase.
    userPick = userPick.toUpperCase();
    console.log(userPick);
    document.getElementById("numGuess-id").appendChild(pg);
    document.getElementById("alreadyGuessed-id").appendChild(ag);
    document.getElementById("currState-id").appendChild(cs);
    document.getElementById("win-id").appendChild(w);



    console.log("==============================================================================");
    ninetiesGame.addLetterGuessed(userPick);
    ninetiesGame.updateCurrState(userPick);
    console.log("User's guesses so far: " + ninetiesGame.allGuess);
    console.log("Current state of the round: " + ninetiesGame.currState);
    console.log("The number of guesses left " + ninetiesGame.numGuess);
    pg.textContent= ninetiesGame.numGuess;
    ag.textContent= ninetiesGame.allGuess;
    //get rid of commas, so that user sees currState as a string.
    cs.textContent= ninetiesGame.currState.join("");
    console.log("==============================================================================");
    //if the rounds ends in a win or otherwise, then reset the game.
    if (ninetiesGame.numGuess === 0 || (!ninetiesGame.currState.includes("_ ") && !ninetiesGame.currState.includes("_"))) {
        ninetiesGame.numGuess = 0;
        //if the round ended in a wiin, update number of wins.S
        if (!ninetiesGame.currState.includes("_ ") && !ninetiesGame.currState.includes("_")) {
            ninetiesGame.isRandFilm = true;
            ninetiesGame.setClipFilm();
            console.log(ninetiesGame.currClip);
            document.getElementById("title-id").textContent = ninetiesGame.currFilm;
            //Access iframe tag and set the src attribute to autoplay the current clip.
            var iframeTag = document.getElementsByTagName("iframe")[0];
            var autoPlayUrl = ninetiesGame.currClip + "?autoplay=1";
            console.log(autoPlayUrl);
            iframeTag.setAttribute("src", autoPlayUrl);
        }
        ninetiesGame.resetGame();
        //preparing for a new round!
        ninetiesGame.setCurrFilm();
        console.log(ninetiesGame.currFilm);
        ninetiesGame.createCurrState();
        ninetiesGame.setClipFilm();
    }
    
    console.log(numWins);
    w.textContent= numWins;

//OPTMIZING CODE:
//1)Autoplay works occasionally. Why?
//2)Don't know why some videos didn't work(FRAZIER, SEINFELD, FRIENDS); got the following messages in console:
//VM5927:1 POST https://www.youtube.com/ad_data_204 net::ERR_NETWORK_IO_SUSPENDED
//VM5927:1 GET https://googleads.g.doubleclick.net/pagead/id net::ERR_NETWORK_IO_SUSPENDED
/*
(anonymous) @ VM5927:1
Le @ www-embed-player.js:384
Ke @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:625
J @ www-embed-player.js:251
oi @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:639
(anonymous) @ www-embed-player.js:339
setTimeout (async)
S @ www-embed-player.js:357
zi @ www-embed-player.js:639
xi @ www-embed-player.js:637
e.f @ www-embed-player.js:262
Hd @ www-embed-player.js:275
Cd @ www-embed-player.js:274
J.m @ www-embed-player.js:273
Tc @ www-embed-player.js:208
Promise.then (async)
Pc @ www-embed-player.js:206
Oc @ www-embed-player.js:205
Ed @ www-embed-player.js:271
sd @ www-embed-player.js:267
(anonymous) @ www-embed-player.js:251
a.onSuccess @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:339
g @ www-embed-player.js:383
XMLHttpRequest.send (async)
(anonymous) @ VM5927:1
Le @ www-embed-player.js:384
Ke @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:625
J @ www-embed-player.js:251
oi @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:639
(anonymous) @ www-embed-player.js:339
setTimeout (async)
S @ www-embed-player.js:357
zi @ www-embed-player.js:639
xi @ www-embed-player.js:637
e.f @ www-embed-player.js:262
Hd @ www-embed-player.js:275
Cd @ www-embed-player.js:274
J.m @ www-embed-player.js:273
Tc @ www-embed-player.js:208
Promise.then (async)
Pc @ www-embed-player.js:206
Oc @ www-embed-player.js:205
Ed @ www-embed-player.js:271
sd @ www-embed-player.js:267
(anonymous) @ www-embed-player.js:251
a.onSuccess @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:339
g @ www-embed-player.js:383
XMLHttpRequest.send (async)
(anonymous) @ VM5927:1
Le @ www-embed-player.js:384
Ke @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:625
J @ www-embed-player.js:251
oi @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:639
(anonymous) @ www-embed-player.js:339
setTimeout (async)
S @ www-embed-player.js:357
zi @ www-embed-player.js:639
xi @ www-embed-player.js:637
e.f @ www-embed-player.js:262
Hd @ www-embed-player.js:275
Cd @ www-embed-player.js:274
J.m @ www-embed-player.js:273
Tc @ www-embed-player.js:208
Promise.then (async)
Pc @ www-embed-player.js:206
Oc @ www-embed-player.js:205
Ed @ www-embed-player.js:271
sd @ www-embed-player.js:267
(anonymous) @ www-embed-player.js:251
a.onSuccess @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:339
g @ www-embed-player.js:383
XMLHttpRequest.send (async)
(anonymous) @ VM5927:1
Le @ www-embed-player.js:384
Ke @ www-embed-player.js:369
(anonymous) @ www-embed-player.js:625
J @ www-embed-player.js:251
oi @ www-embed-player.js:622
(anonymous) @ www-embed-player.js:639
(anonymous) @ www-embed-player.js:339*/
//3)how to position and align(maybe side by side) an image inside of the jumotron div.
//4)getElementsByClassname didn't work for to access iframe tag, but getElementsByTagName did.










}
