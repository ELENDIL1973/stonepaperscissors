let playerchoice;
let computerchoice;
let wins;
let losses;
let playerscore = 0;
let computerscore = 0;
let playerchoiceunpro;

console.log("Let the game begin!")


function getcomputerchoice(){
    computerchoice = (Math.floor(Math.random() * 3)) + 1;  // stone = 1, paper = 2, scissors = 3
    return computerchoice; //cheating so I can win ;)
}

function getplayerchoice(){
    playerchoiceunpro = prompt("What do you choose?");
    playerchoice = playerchoiceunpro.toLowerCase();
    return playerchoice

}

function playround(){
    console.log(getcomputerchoice());
    console.log(getplayerchoice());

    if (playerchoice== "stone" && computerchoice==3) {
        console.log("You Win This Round!");
        playerscore = playerscore+1;
    }

    else if (playerchoice=="paper" && computerchoice==1) {
        console.log("You Win This Round!");
        playerscore = playerscore+1;
    }

    else if (playerchoice=="scissors" && computerchoice==2) {
        console.log("You Win This Round!");
        playerscore = playerscore+1;
    }

    else if (playerchoice=="stone" && computerchoice==2) {
        console.log("You Lose This Round");
        computerscore = computerscore+1;

    }

    else if (playerchoice=="paper" && computerchoice==3) {
        console.log("You Lose This Round");
        computerscore = computerscore+1;

    }

    else if (playerchoice=="scissors" && computerchoice==1) {
        console.log("You Lose This Round");
        computerscore = computerscore+1;

    }

    else if (playerchoice=="stone" && computerchoice==1) {
        console.log("Tie!");

    }

    else if (playerchoice=="paper" && computerchoice==2) {
        console.log("Tie!");

    }

    else if (playerchoice=="scissors" && computerchoice==3) {
        console.log("Tie!");

    }

}

for (let i = 0; i < 5; i++) {
    console.log(playround());
  }

if (computerscore > playerscore) {
    console.log("You Lost The Game");

}  

else{
    console.log("You Won This Game!");
}