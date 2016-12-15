//Title: Fight Game
//Author: Drewry Pope
//Date: 12/14/2016
//Version: 1.00
//Description: This is a simple game ran with javascript prompts and w/ basic
//             ouput displayed of the game's status. It can be played with one
//             or two players and is based around 5 moves:
//             Evade, Parry, Punch, Stab, and Slash.

/*
  1. Nouns and Verbs
    
    Problem Statement: 
    
      Create a game that accepts one or two players names and lets them compete
      in a simulated fight. After receiving their names, it then accepts one of
      multiple fighting moves from each player. The player's chosen moves and
      respective locations are then considered and either a victor is chosen
      or the fight continues. The statistics for each round are output to the
      screen and there is a simple ASCII representation of the fight as well.
    
    Noun:
    
      1-2 players, names, multiple fighting moves, chosen moves, 
      respective locations, victor, statistics, ASCII representation.
    
    Verbs:
    
      compete, receive, accept, consider, chosen, output
  
  2. Defining Diagram
    
    Inputs:
  
      PlayerOneName, PlayerOneAction, PlayerTwoName, PlayerTwoAction
    
    Processing:
  
    Outputs:
  
      PlayerOneName, PlayerOneAction, PlayerTwoName, PlayerTwoAction,
      PlayerOneLocation, PlayerTwoLocation, Victor, ASCII Output
  
  3. Solution Algorithm
  
    FightGame
  
      initialize playerOne.name
      initialize playerOne.action
      initialize playerOne.location to 1
      initialize playerTwo.name
      initialize playerTwo.action
      initialize playerTwo.location to 1
      initialize count to 0
      initialize victory to 0

      prompt the first user for playerOne.name with "Please enter a name for Player 1:"
      prompt the second user for playerTwo.name with "Please enter a name for Player 2:",
        default to 'Computer'
      
      WHILE victory is set to zero
  
        prompt the first user for playerOne.action with "What is your move?"

        IF playerTwo.name does not equal "Computer"
          prompt the second user for playerTwo.action with 
            playerTwo.name + ", what is your move?"
        ELSE submit a random move

        analyse playerOne.action with playerOne.location
        modify playerOne.location per the analysis

        analyse playerTwo.action with playerTwo.location
        modify playerTwo.location per the analysis

        analyse playerOne with playerTwo
        modify victory per the analysis
          IF playerOne won
            set victory to 1
          IF playerTwo won
            set victory to 2
          IF they killed each other
            set victory to 3

        add one to count
        output results of this loop
        display new ASCII representation of this loop
  
      ENDWHILE

      IF victory is 1
        output "Congratulations! " + PlayerOne + "is the victor. It took " +
              count + "rounds before " + PlayerTwo + " lost."
  
      IF victory is 2
        output "Congratulations! " + PlayerTwo + "is the victor. It took " +
              count + "rounds before " + PlayerOne + " lost."
  
      IF victory is 3
        output "You both lost. You killed each other."
  
    END
  
  4. Checking the solution Algorithm
    
    Variables: PlayerOne.Action(1,2,3,...), PlayerTwo.Action(1,2,3,...), victory, count


    Test Case 1:
  
      Input Values:
  
        PlayerOne.Action("Stab", "Stab")
        PlayerTwo.Action("Stab", "Stab") 

      Expected Result:
  
        PlayerOne.Action("Stab", "Stab")
        PlayerTwo.Action("Stab", "Stab") 
        victory = 3 
        count = 2

      Actual Result: 
  
        PlayerOne.Action("Stab", "Stab")
        PlayerTwo.Action("Stab", "Stab") 
        victory = 3 
        count = 2


    Test Case 2:
  
      Input Values:
  
        PlayerOne.Action("Slash", "Parry", "Punch")
        PlayerTwo.Action("Stab", "Stab", "Slash") 

      Expected Result:
  
        PlayerOne.Action("Slash", "Parry", "Punch")
        PlayerTwo.Action("Stab", "Stab", "Slash") 
        victory = 2
        count = 3

      Actual Result: 
  
        PlayerOne.Action("Slash", "Parry", "Punch")
        PlayerTwo.Action("Stab", "Stab", "Slash") 
        victory = 2 
        count = 3 


    Test Case 3:

      Input Values:

        PlayerOne.Action("Evade", "Stab", "Punch")
        PlayerTwo.Action("Slash", "Stab", "Stab") 

      Expected Result:

        PlayerOne.Action("Evade", "Stab", "Punch")
        PlayerTwo.Action("Slash", "Stab", "Stab") 
        victory = 1
        count = 3

      Actual Result: 

        PlayerOne.Action("Evade", "Stab", "Punch")
        PlayerTwo.Action("Slash", "Stab", "Stab") 
        victory = 1 
        count = 3


    Test Case 4:

      Input Values:

        PlayerOne.Action("Punch", "Punch", "Punch", "Punch", "Punch", "Evade", "Stab")
        PlayerTwo.Action("Punch", "Punch", "Punch", "Punch", "Punch", "Parry", "Stab") 

      Expected Result:

        PlayerOne.Action("Punch", "Punch", "Punch", "Punch", "Punch", "Evade", "Stab")
        PlayerTwo.Action("Punch", "Punch", "Punch", "Punch", "Punch", "Parry", "Stab") 
        victory = 3
        count = 7

      Actual Result: 

        PlayerOne.Action("Punch", "Punch", "Punch", "Punch", "Punch", "Evade", "Stab")
        PlayerTwo.Action("Punch", "Punch", "Punch", "Punch", "Punch", "Parry", "Stab")
        victory = 3
        count = 7

*/
class playerProfile {
  constructor(name, action, location) {
    this.name = name;
    this.action = action;
    this.location = location;
  }
}
class victoryProfile {
  constructor(status, count, playerOne, playerTwo) {
    this.status = status;
    this.count = count;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }
}
function playerAction(name, location) {
  //subfunction for random Computer moves
  function randomIntBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  if (name != "Computer") {
    var action; 
    while(action != "Slash" && action != "Stab" && action != "Punch" &&
                             action != "Parry" && action != "Evade") {
      if (location === 0) {
        action = prompt (name + ", what is your move?\n" +
                          "Slash|Stab|Punch|Parry");
      } else {
        action = prompt (name + ", what is your move?\n" +
                          "Slash|Stab|Punch|Parry|Evade");
      }
    }
    //convert action to number for easier use
    switch (action) {
      case "Evade":
        return 0;
      case "Parry":
        return 1;
      case "Punch":
        return 2;
      case "Stab":
        return 3;
      case "Slash":
        return 4; 
    }
  } else {
    if (location === 0) {
      return randomIntBetween(1, 4);
    } else return randomIntBetween(0,4);
  }
}
//controls movement based on action number
function playerMove(action, location) {
  if (location > 0 && location < 6) {
    if (action === 0) {
      return --location;
    } else if (action == 1) {
      return location;
    } else return ++location;
  } else if (location <= 0) {
    if (action <= 1) {
      return location;
    } else return ++location;
  } else return --location;
}
function victoryAssessment(status, count, playerOne, playerTwo) {
  //determine distance between two players, assuming 0-6 scale
  var distance = ((6-playerTwo.location) - playerOne.location);
  //make a new victoryProfile object to store results of assessment
  var victoryMessage = new victoryProfile(status, count, playerOne, playerTwo);
  //initialize variables used to create ASCII 'land'
  var outputDistance = "";
  var outputDistanceOne = "";
  var outputDistanceTwo = "";
  var outputMessage;
  //assign variable to article ID 'output', located ./index.html on a <p> tag.
  var outputBox = document.getElementById("output");
  //calculate effects of actions when players are at same location
  if (distance <= 0) {
    //playerOneAction -> playerTwoAction -> results 
    switch (playerOne.action) {
      case 0: //Evade
        switch (playerTwo.action) {
          case 3: //Stab
            victoryMessage.status += 2;
            break;
          case 4: //Slash
            victoryMessage.status += 2;
            break;
        }
        break;
      case 1: //Parry
        switch (playerTwo.action) {
          case 3: //Stab
            victoryMessage.playerTwo.location--;
            break;     
          case 4: //Slash
            victoryMessage.playerOne.location--;
            victoryMessage.playerTwo.location--;
          break;
        }
        break;  
      case 2: //Punch
        switch (playerTwo.action) {
          case 1: //Parry
            victoryMessage.playerOne.location--;
            break;
          case 3: //Stab
            victoryMessage.status++;
            break;
          case 4: //Slash
            victoryMessage.status += 2;
            break;
        }
        break;
      case 3: //Stab
        switch (playerTwo.action) {
          case 0: //Evade
            victoryMessage.status++;
            break;
          case 1: //Parry
            victoryMessage.playerOne.location--;
            break;
          case 2: //Punch
            victoryMessage.status++;
            break;
          case 3: //Stab
            victoryMessage.status += 3;
            break;
          case 4: //Slash
            victoryMessage.status++;
            break;
        }
        break;
      case 4: //Slash
        switch (playerTwo.action) {
          case 0: //Evade
            victoryMessage.status++;
            break;
          case 1: //Parry
            victoryMessage.playerOne.location--;
            victoryMessage.playerTwo.location--;
            break;
          case 2: //Punch
            victoryMessage.status++;
            break;
          case 3: //Stab
            victoryMessage.status += 2;
            break;
        }
    }
    //effect if 'stab' is used at a distance of 1
  } else if (distance == 1) {
    if (playerOne.action == 3 && playerTwo.action != 1) {
      victoryMessage.status++;
    }
    if (playerTwo.action == 3 && playerOne.action != 1) {
      victoryMessage.status += 2;
    }
  }
  //if a player gets pushed outside of bounds, put them back into bounds
  if (playerOne.location < 0  && victoryMessage.status == 0) {
    victoryMessage.playerOne.location=0;
  }
  if (playerTwo.location < 0 && victoryMessage.status == 0) {
    victoryMessage.playerTwo.location=0;
  }
  //if players appear to be pushed past each other, attempt to correct
  if (distance < 0 && victoryMessage.status == 0) {
    if (playerOne.location > 0) {
      victoryMessage.playerOne.location--;
    }
    if (playerTwo.location > 0) {
      victoryMessage.playerTwo.location--;
    }
  }
  //recalculate distance and generate ASCII land out of '_'
  distance = ((6-victoryMessage.playerTwo.location) - victoryMessage.playerOne.location);
  while (distance > 0) {
    outputDistance += "_";
    distance--;
  }
  distance = victoryMessage.playerOne.location
  while (distance > 0) {
    outputDistanceOne += "_";
    distance--;
  }
  distance = victoryMessage.playerTwo.location
  while (distance > 0) {
    outputDistanceTwo += "_";
    distance--;
  }
  //recalc distance, output current loop statistics
  distance = ((6-victoryMessage.playerTwo.location) - victoryMessage.playerOne.location);
  document.write("<p>|| Round: " + victoryMessage.count + " Win: ");
  document.write(victoryMessage.status + " Distance: " + distance);
  document.write(" || " + victoryMessage.playerOne.name + " loc: ");
  document.write(victoryMessage.playerOne.location);
  document.write(" act: " + victoryMessage.playerOne.action);
  document.write(" | " + victoryMessage.playerTwo.action + " :act ");
  document.write((6-victoryMessage.playerTwo.location) + "  :loc ");
  document.write(victoryMessage.playerTwo.name + " ||</p>");
  //generate ASCII representation
  outputMessage = outputDistanceOne;
  outputMessage += victoryMessage.playerOne.action;
  outputMessage += outputDistance;
  outputMessage += victoryMessage.playerTwo.action;
  outputMessage += outputDistanceTwo;
  outputMessage += "<p>Key::</p><p>0=Evade</p>"
  outputMessage += "<p>1=Parry, 2=Punch</p>"
  outputMessage += "<p>3= Stab, 4=Slash</p><br>"
  //create or replace ASCII representation
  outputBox.innerHTML = outputMessage
  return victoryMessage;
}
function victoryOutput(output) {
  switch (output.status) {
    case 1:
      document.write(output.playerOne.name + " has won!" + 
        " Congratulations!! It took " + output.count + " moves before " +
        output.playerTwo.name + " fell."); 
      break;
    case 2:
      document.write(output.playerTwo.name + " has won!" + 
        " Congratulations!! It took " + output.count + " moves before " +
        output.playerOne.name + " fell.");
      break;
    default:
      document.write("You both lost!! You killed each other."); 
  }
}
function fightGame() {
  var playerOne = new playerProfile("Player One","", 1);
  var playerTwo = new playerProfile("Computer","", 1);
  var victoryMessage = new victoryProfile(0, 0, playerOne, playerTwo);
  playerOne.name = prompt("Please provide a name for Player 1:", playerOne.name);
  playerTwo.name = prompt("Please provide a name for Player 2:\n" +
                     "(Leave as default to simulate opponent.)", playerTwo.name);
  while (victoryMessage.status === 0) {
    playerOne = victoryMessage.playerOne;
    playerTwo = victoryMessage.playerTwo;
    playerOne.action = playerAction(playerOne.name, playerOne.location);
    playerTwo.action = playerAction(playerTwo.name, playerTwo.location);
    playerOne.location = playerMove(playerOne.action, playerOne.location);
    playerTwo.location = playerMove(playerTwo.action, playerTwo.location);
    victoryMessage.count++;
    victoryMessage = victoryAssessment(victoryMessage.status, victoryMessage.count, playerOne, playerTwo);
  }
  victoryOutput(victoryMessage);
}
function main() {
  fightGame();
}
main();