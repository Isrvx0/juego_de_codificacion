let board_game = document.querySelectorAll("button")
const movingElements = document.getElementsByClassName("moving");

var playersNumber = playerNumbers();
let playersList = playerName(playersNumber);

var questionsList = [
        {
            "question" : "Wat is een Variable?\n1. Variabelen zijn containers die bedoeld zijn om dingen niet binnen te houden.\n2. Variabelen zijn containers voor het opslaan van gegevenswaarden.\n3.Een variabele in een python-programma geeft gegevens aan de computer voor verwerking.",
            "answer" : "2"
        },{
            "question" : "Wat is een String?\n1. Strings is een nummer. \n2.Strings is een zin of een word. \n3.String is een decimaal getal",
            "answer" : "2"
        },{
            "question" : "Wat doet een input?\n1. Een bepaalde tekst in een tekst toevoegen. \n2.Een vraag stellen aan de gebruiker. \n3.Een vraag stellen aan de programmeur  ",
            "answer" : "1"
        },{
            "question" : "Wat doet een elif?\n1. Een voorwaarde om iets te checken. \n2. Een input om een vraag te stellen. \n3.Als de vorige voorwaarden niet waar waren, probeer dan deze. \n4.Geen van de bovenste. ",
            "answer" : "3"
        },{
            "question" : "Welke van deze is een float?\n1. 4 \n2. 5,443 \n3. 3.59 \n4. 20093",
            "answer" : "3"
        },{
            "question" : "Welke operator geeft aan dat het getal a gelijk is aan getal b?\n1. a = b \n2. a != b \n3. a += b \n4. a == b",
            "answer" : "4"
        },{
            "question" : " Wat betekent a > b?\n1. a is klijner dan b \n2. a is groter dan b \n3. a is gelijk aan of klijner dan b  \n4. a is gelijk aan of groter dan b",
            "answer" : "2"
        },{
            "question" : "Welke van de volgende is een dictionary: \n1. { } \n2. [] \n3. () \n4. <>",
            "answer" : "1"
        },{
            "question" : "Welke van de volgende is de juiste extensie van een Python-bestand?\n1. .python \n2. .py \n3. .pl \n4. .p",
            "answer" : "2"
        },{
            "question" : "Welk trefwoord wordt gebruikt voor functie in Python?\n1. function \n2. fun \n3. define \n4. def",
            "answer" : "4"
        },{
            "question" : "Welke van de volgende is niet een core data-type in Python?\n1. list \n2. class \n3. tuple \n4. dictionary",
            "answer" : "2"
        },{
            "question" : "Welke van de volgende is een tuple:\n1. { } \n2. [] \n3. () \n4. <>",
            "answer" : "3"
        },{
            "question" : "Wat is de output van \nprint(4 + 2 * 2)\n1. 12 \n2. 8 \n3. 6 \n4. 4 + 2 * 2",
            "answer" : "2"
        },{
            "question" : "Welke antwoord is niet een keyword?\n1. both \n2. not \n3. or \n4. none ",
            "answer" : "1"
        },{
            "question" : "Wat gebeurt er als je een 'break' in een while loop zet?\n1. de while loop loopt nog 1 keer en stopt \n2. de while loop stopt \n3.de while loop gaat verder \n4. Niks :)",
            "answer" : "2"
        },{
            "question" : " Wat doet een random.shuffle?\n1. het geeft een random geselecteerd element uit een opgegeven reeks \n2. het reorganiseert de volgorde van de items.",
            "answer" : "2"
        },{
            "question" : "Wat is de output van het volgende stukje code? \nabc = 'ABC zijn de eerste Drie letters van het alfabet.' \nprint(abc.lower())\n1. Abc zijn de eerste drie letters van het alfabet. \n2. ABC zijn de eerste drie letters van het alfabet. \n3. abc zijn de eerste drie letters van het alfabet.\n4. ABC zijn de eerste Drie letters van het alfabet.",
            "answer" : "3"
        },{
            "question" : "Wat doet een len?\n1. geeft het aantal items in een object terug \n2. geeft het lengte van een object terug \n3.geeft het aantal letters in een object terug",
            "answer" : "1"
        },{
            "question" : "Wanneer wordt het Final-blok uitgevoerd in een exception handling?\n1. wanneer er geen uitzondering is \n2. altijd \n3. wanneer er een uitzondering is\n4. alleen als aan een bepaalde voorwaarde is voldaan",
            "answer" : "2"
        }
    ]
    

// let snake_up = ["13" , "30"] // +10
// let snack_down = ["15" , "24"] // -10
let snack_place = ["13", "30", "15", "24"]
let questionButtons = ["4", "11", "17", "23", "28", "36", "44", "49"]

rollen_button.onclick = rollen;
score_button.onclick = score(playersList);
help_button.onclick = help;
question_button.onclick = question;

// ------------------------------ Create the game board :
function createCard (){
        for(let number = 1; number < 50 +1; number++){
                let newBtn = document.createElement('button');
                document.querySelector('#game_board').appendChild(newBtn);
                newBtn.innerHTML = number
                newBtn.className = "btn"            
                //   style
                newBtn.style.width = `9.5%`;
                newBtn.style.height = `75px`;
                
                newBtn.style.border= "1px solid white";
                newBtn.style.margin= "3px";

                newBtn.style.display = `inline-block`;
                
                newBtn.style.background = `white`;
                newBtn.style.fontSize = "15pt";
                newBtn.style.textAlign = "center"; 
                newBtn.style.verticalAlign = "middle";
                newBtn.style.position = "relative"
                newBtn.onclick = create_pionnen;

                for (element of questionButtons) {
                        if (element == newBtn.className) {
                                newBtn.style.background = `#DDA0DD`;
                                newBtn.style.color = `white`;

                        }
                }
        }}
createCard();
     
// ------------------------------ Rollen function:
function rollen(e) {
        alert ("YOU ROLLED: " + (Math.floor(Math.random() * 12+1)) + "🎲");
};

// ------------------------------ Help function :
function help(e) {
        window.open("image/handleiding.pdf");};

// ------------------------------ Question function :
function question(e) {
        random_question = (Math.floor(Math.random() * questionsList.length))      
            
        var answer = prompt(questionsList[random_question]['question'])       
        // check if the right answer =
        if (answer === questionsList[random_question]['answer']){
                alert("Correct! Keep going!")
        } else {
                alert(`It's actually ${questionsList[random_question]['answer']}, but half the world thinks it's 6 just like you.\nGood luck next time!`)
        }
};

// ------------------------------ Score function :
function score(playerLijst) {
        return function() {
                var winner_checker = parseInt(prompt("How can i help you?\n1. Add a winner \n2. Add points for the correct answer \n3. Show player scores."))
                var winner_name = prompt("What is the player name? \n> ")
                for (player of playerLijst) {
                        if(player.name == winner_name) {
                                if (winner_checker === 1) {
                                        player.score += 50;
                                } else if (winner_checker === 2){
                                        player.score += 20;
                                } else if (winner_checker === 3) {
                                        console.log(player)
                                }
                        }
                }
        }
};

// ------------------------------ player's number :
function playerNumbers(e) {
        var player_number = prompt("How many players? ")
        return player_number    
}

// ------------------------------ player's name + player's list :
function playerName(playersNum) {
        var playerList = []

        for (var i=0; i<playersNum; i++){
                var player_name = prompt(`What is player ${i+1} name?`)
                playerList.push({
                "name": player_name,
                "score": 0
        })
        }
        return playerList
}

// ------------------------------ Pionnen :
function create_pionnen(e) {
        var new_className = 0;
        showAlert = true
        var player_turn = prompt("Which player is trun now?");
        let board_game = document.querySelectorAll("button")
        

        for (button of board_game) {
                var style = button.style.background;
                var class_name = button.className;
                var this_className = this.className;

                if (style === `light${player_turn}` ) { // Check if other className have the same background color!
                        button.style.background = "white";
                }               
                
                if (this_className === snack_place[0]|| this_className === snack_place[1]) {
                        new_className = parseInt(this_className) + 10;
                        if (showAlert){
                                alert("You land on the lowest numbered square of the snake, and you will land on the highest numbered square.")
                        }
                } else if (this_className === snack_place[2]|| this_className === snack_place[3]) {
                        new_className = parseInt(this_className) - 10;
                        
                        if (showAlert){
                                alert("You land on the highest numbered square of the snake, and you will land on the lowest numbered square.")
                        }

                };
                showAlert = false

                
                if (new_className > 0) {
                        if (parseInt(class_name) === new_className) {
                                button.style.background = `light${player_turn}`
                        } 
                } else if (new_className === 0) {
                        this.style.background = `light${player_turn}`
                }

                // check questionButtons
                for (button of questionButtons) {
                        if (button == this_className) {
                                question();
                                return;
                        }
                };
                // check winner
                if (this_className == 50) {
                        winner(this.style.background ,game_board);
                        return;
                }
                
        } 
};

// ------------------------------ Check Winner :
function winner(style , game_board) {
        alert (`Winner is ${style}`)
        var play_againg = prompt("Do you want to play again? ")
        
        // start the game again
        if (play_againg.toLowerCase() == "yes") {
                game_board.innerHTML = "";
                createCard()
        }
        };

// ------------------------------ moving function :

for (let i = 0; i < movingElements.length; i++) { // alle pionnen krijgen relative position

  movingElements[i].style.position = "relative";
}

function filter(e) {
  let target = e.target;

  if (!target.classList.contains("moving")) { // if element class != "moving" , stopt de function
    return;
  }

  target.moving = true; //otherwise return true en blijft lopen.

  //Check if Mouse events exist on users' device
  if (e.clientX) {
    target.oldX = e.clientX; // If they exist then use Mouse input
    target.oldY = e.clientY;
  } 
//   else { //-- >Otherwise use touch input
//     target.oldX = e.touches[0].clientX; 
//     target.oldY = e.touches[0].clientY;
//   }

  target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1; // getComputedStyle = Het haalt de berekende CSS-eigenschappen en -waarden van een HTML-element op.
  target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1; // getPropertyValue = returns the value of the specified CSS property.


  document.onmousemove = dr; // It occurs when the pointer moves over an element.
//   document.ontouchmove = dr; --> only for touch screen.

  function dr(event) {
    event.preventDefault(); // cancels the event if it is cancelable <Clicking on a link, prevent the link from following the URL>

    if (!target.moving) {
      return;
    }

    if (event.clientX) {
      target.distX = event.clientX - target.oldX;
      target.distY = event.clientY - target.oldY;
    } 

//     else { //-- >Otherwise use touch input
//       target.distX = event.touches[0].clientX - target.oldX;
//       target.distY = event.touches[0].clientY - target.oldY;
//     }

    target.style.left = target.oldLeft + target.distX + "px";
    target.style.top = target.oldTop + target.distY + "px";
  }

  function endDrag() { // einde slepen --> stopt de function
    target.moving = false; 
  }
  target.onmouseup = endDrag;
  target.ontouchend = endDrag;
}
document.onmousedown = filter;
document.ontouchstart = filter;




// planning =
// - make trello . 
// - make stappen-plane . 
// - check code .
// - DRY code . 
// - Inleveren . 