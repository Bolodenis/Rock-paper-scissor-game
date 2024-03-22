let hand = ["rock", "paper", "scissor"];

        function getRandom() {
            let getIndex = Math.floor(Math.random() * 3);
            return hand[getIndex];
        }

        function playGame() {
            let computerChoice = getRandom(); 
            let resultMessage = "";

            if (computerChoice === hand[0]) {
                resultMessage = "Computer chose rock. It's a draw!";
            } else if (computerChoice === hand[1]) {
                resultMessage = "Computer chose paper. Computer wins!";
            } else if (computerChoice === hand[2]) {
                resultMessage = "Computer chose scissors. You win!";
            } else {
                resultMessage = "Invalid choice by computer.";
            }

            document.getElementById("result").textContent = resultMessage;
        }