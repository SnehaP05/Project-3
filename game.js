let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const computerScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock", "paper","scissors"];
        //rock, Paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Draw . Play Again";
    msg.style.backgroundColor = " #081b31";
}

const showWinner = (useWin, userChoice, computerChoice) => {
    if (useWin) {
        // console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        // console.log ("You Lose");
        compScore++;
        computerScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log ("user Choice = ", userChoice);
    //Generate computer Choice
    const computerChoice = genComputerChoice();
    // console.log ("Compter Choice = ", computerChoice);

    if (userChoice === computerChoice){
        //draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = computerChoice ==="rock" ? false: true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);   
    });
});


