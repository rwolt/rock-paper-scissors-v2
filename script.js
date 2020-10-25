function game(){
    //Set the initial variable to keep track of the score
    let win = 0;
    let lose = 0;
    let series = 0;

    //Keep playing as long as no player has reached 3 wins.
    while (win < 3 && lose < 3){
    //Prompt the user for a choice, output the result and output the score
    let objects = ['rock', 'paper', 'scissors'];
    let playerChoice = prompt('Choose Rock, Paper, or Scissors', '');
    console.log(roShambo(playerChoice, computerPlay(objects))); 
    console.log(`You are ${win} for ${series}. Best of 5`);

    //Function to evaluate the player's choice against the computer update the score and return the result. 
    function roShambo (playerSelection, computerSelection) {
    
    //Trim the whitespace from inputs and convert to lowercase for use with conditional statements. 
        playerSelection = playerSelection.toLowerCase().trim();
        computerSelection = computerSelection.toLowerCase().trim();

    //Compare player choice to computer choice and update the score and series count. 
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            lose ++;
            series ++;
            return 'Computer throws paper. Paper covers rock. You Lose!';       
        }else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
            win ++;
            series ++;      
            return 'Computer throws scissors. Rock crushes scissors. You Win!';
        }else if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'Computer also throws rock. Try again.';
        }else if (playerSelection === 'paper' && computerSelection === 'rock') {
            win++;
            series++;
            return 'Computer throws rock. Paper covers rock. You Win!';
        }else if (playerSelection === 'paper' && computerSelection === 'paper') { 
            return 'Computer also throws paper. Try again.';
        }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            lose++;
            series++;
            return 'Computer throws scissors. Scissors cuts paper. You Lose!';
        }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            lose++;
            series++;
            return 'Computer throws rock. Rock crushes scissors. You Lose!';
        }else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
            win++;   
            series++;
            return 'Computer throws paper. Scissors cut paper. You Win!';
        }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'Computer also throws scissors. Try again';
        }else { 
            return'Something has gone wrong. Choose only Rock, Paper, or Scissors.';
        }
    }
    //If the player wins 3, announce the score and the winner
    }if (win === 3) {
            console.log(`You won ${win} out of 5. YOU ARE THE WINNER!`)
    //If the computer wins 3, announce the score and the winner
    }else {
            console.log(`Computer wins ${lose} out of 5. COMPUTER IS THE WINNER!`);
    }
    }

    //Function to randomly choose an index from the input array of choices.
    function computerPlay(choices) {
        let randomIndex = Math.floor(Math.random() * choices.length);
        return (choices[randomIndex]);  
    }

    

</script>

</body>
</html>