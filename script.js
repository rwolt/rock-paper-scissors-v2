    function computerPlay(choices) {
        let randomIndex = Math.floor(Math.random() * choices.length);
        return (choices[randomIndex]);  
    }

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerChoice.classList.add('paper', 'slideinLeft');
            lose ++;
            return 'You Lose';       
        }else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
            computerChoice.classList.add('scissors', 'slideinLeft');
            win ++;     
            return 'You Win';
        }else if (playerSelection === 'rock' && computerSelection === 'rock') {
            computerChoice.classList.add('rock', 'slideinLeft');
            return 'Try again';
        }else if (playerSelection === 'paper' && computerSelection === 'rock') {
            computerChoice.classList.add('rock', 'slideinLeft');
            win++;
            return 'You Win';
        }else if (playerSelection === 'paper' && computerSelection === 'paper') { 
            computerChoice.classList.add('paper', 'slideinLeft');
            return 'Try again';
        }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerChoice.classList.add('scissors', 'slideinLeft');
            lose++;
            return 'You Lose';
        }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerChoice.classList.add('rock', 'slideinLeft');
            lose++;
            return 'You Lose';
        }else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
            computerChoice.classList.add('paper', 'slideinLeft');
            win++;   
            return 'You Win';
        }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            computerChoice.classList.add('scissors', 'slideinLeft');
            return 'Try again';
        }else { 
            return'Something has gone wrong. Choose only Rock, Paper, or Scissors.';
        }

    }


    
    let win = 0;
    let lose = 0;
    let series = 0;

    let objects = ['rock', 'paper', 'scissors'];
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let container = document.querySelector('.container');
    let msg = document.getElementById('message');
    let computerChoice = document.getElementById('computer-choice');
    let playerScore = document.querySelector('#player-score');
    let computerScore = document.querySelector('#computer-score');
    


    rock.addEventListener('click', function(e) {
        e.target.classList.add('slideinRight');
        scissors.style.display = 'none';
        paper.style.display = 'none';
        msg.textContent = playRound(e.target.id, computerPlay(objects));
        playerScore.textContent = win;
        computerScore.textContent = lose;
        e.stopPropagation();
    });
 
     paper.addEventListener('click', function(e) {
        e.target.classList.add('slideinRight');
        scissors.style.display = 'none';
        rock.style.display = 'none';
        msg.textContent = playRound(e.target.id, computerPlay(objects));
        playerScore.textContent = win;
        computerScore.textContent = lose;
        e.stopPropagation();
     });
 
     scissors.addEventListener('click', function(e) {
        e.target.classList.add('slideinRight');
        rock.style.display = 'none';
        paper.style.display = 'none';
        msg.textContent = playRound(e.target.id, computerPlay(objects));
        playerScore.textContent = win;
        computerScore.textContent = lose;
        e.stopPropagation();
     });
    

    


    window.addEventListener('click', function (e) {
        if(win == 5) {
            msg.textContent = 'YOU ARE THE WINNER';
        }
        else if(lose == 5){
            msg.textContent = 'GAME OVER'
        }
        else if (computerChoice.classList.contains('slideinLeft')) {
            rock.style.display = 'block';
            paper.style.display = 'block';
            scissors.style.display = 'block';
            
            for (let child of container.children) {
                child.classList.remove('slideinRight');
            }
            msg.textContent = 'Choose rock, paper, or scissors';
            computerChoice.className = '';
        }
    });
    


    

    //If the player wins 3, announce the score and the winner
    //if (win === 3) {
    //        console.log(`You won ${win} out of 5. YOU ARE THE WINNER!`)
    //If the computer wins 3, announce the score and the winner
    //}else {
    //        console.log(`Computer wins ${lose} out of 5. COMPUTER IS THE WINNER!`);
    //}
 
