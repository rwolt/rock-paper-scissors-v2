
    //Set the initial variable to keep track of the score
    let win = 0;
    let lose = 0;
    let series = 0;

    let objects = ['rock', 'paper', 'scissors'];
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let msg = document.getElementsByClassName('score-box')[0];
    let computerChoice = document.getElementById('computer-choice');

    rock.addEventListener('click', function(e) {
        let playerChoice = e.target.id;
        msg.textContent = roShambo(playerChoice, computerPlay(objects));
        playerScore.textContent = win;
        computerScore.textContent = lose;
     });
 
     paper.addEventListener('click', function(e) {
        msg.textContent = roShambo(e.target.id, computerPlay(objects));
     });
 
     scissors.addEventListener('click', function(e) {
        msg.textContent = roShambo(e.target.id, computerPlay(objects));
     });
    


    function roShambo (playerSelection, computerSelection) {
        if (win == 5) {
            return 'You win 5, you are the Winner!'
        }
        else if (lose == 5) {
            return 'Computer wins 5, You Lose!';
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerChoice.className = 'paper';
            lose ++;
            series ++;
            return 'Computer throws paper. Paper covers rock. You Lose!';       
        }else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
            computerChoice.className = 'scissors';
            win ++;
            series ++;      
            return 'Computer throws scissors. Rock crushes scissors. You Win!';
        }else if (playerSelection === 'rock' && computerSelection === 'rock') {
            computerChoice.className = 'rock';
            return 'Computer also throws rock. Try again.';
        }else if (playerSelection === 'paper' && computerSelection === 'rock') {
            computerChoice.className = 'rock';
            win++;
            series++;
            return 'Computer throws rock. Paper covers rock. You Win!';
        }else if (playerSelection === 'paper' && computerSelection === 'paper') { 
            computerChoice.className = 'paper';
            return 'Computer also throws paper. Try again.';
        }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerChoice.className = 'scissors';
            lose++;
            series++;
            return 'Computer throws scissors. Scissors cuts paper. You Lose!';
        }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerChoice.className = 'rock';
            lose++;
            series++;
            return 'Computer throws rock. Rock crushes scissors. You Lose!';
        }else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
            computerChoice.className = 'paper';
            win++;   
            series++;
            return 'Computer throws paper. Scissors cut paper. You Win!';
        }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            computerChoice.className = 'scissors';
            return 'Computer also throws scissors. Try again';
        }else { 
            return'Something has gone wrong. Choose only Rock, Paper, or Scissors.';
        }
    }


    //If the player wins 3, announce the score and the winner
    //if (win === 3) {
    //        console.log(`You won ${win} out of 5. YOU ARE THE WINNER!`)
    //If the computer wins 3, announce the score and the winner
    //}else {
    //        console.log(`Computer wins ${lose} out of 5. COMPUTER IS THE WINNER!`);
    //}
 
    function computerPlay(choices) {
        let randomIndex = Math.floor(Math.random() * choices.length);
        return (choices[randomIndex]);  
    }

    