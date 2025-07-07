console.log("JS file loaded successfully!");

      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();

      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */

      let isAutoPlaying = false;  // we also need to stop autoplay when clicked again 
      let intervalID;
     function autoPLay(){ 
        // this is the function that we have called in onclick

        if(!isAutoPlaying){ // function to check whetehr autoplaying is on or not
         intervalID =  setInterval( function(){ 
const playerMove = pickComputerMove();// we are saving the computer move inside this variable
playGame (playerMove); // here we are calling this first function playygame and as in parameter we are passing the playermove (i.e computermove)
        

        },1000);
        isAutoPlaying = true;

    } else{
clearInterval(intervalID);
isAutoPlaying = false
    }
        }
   
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }
