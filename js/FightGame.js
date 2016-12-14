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
  } else return randomIntBetween(0, 4);
}

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
  var distance = ((6-playerTwo.location) - playerOne.location);
  var victoryMessage = new victoryProfile(status, count, playerOne, playerTwo);
  
  if (distance <= 0) {
    switch (playerOne.action) {
      case 1:
        switch (playerTwo.action) {
          case 3:
            victoryMessage.playerTwo.location--;
            break;
      
          case 4:
            victoryMessage.playerOne.location--;
            victoryMessage.playerTwo.location--;
          break;
        }
        break;  
      
      case 2:
        switch (playerTwo.action) {
          case 1:
            victoryMessage.playerOne.location--;
            break;
      
          case 3:
            victoryMessage.status++;
            break;
      
          case 4:
            victoryMessage.status += 2;
            break;
        }
        break;
      
      case 3:
        switch (playerTwo.action) {
          case 1:
            victoryMessage.playerOne.location--;
            break;
          
          case 2:
            victoryMessage.status++;
            break;
          
          case 3:
            victoryMessage.status += 3;
            break;
          
          case 4:
            victoryMessage.status++;
            break;
        }
        break;
      
      case 4:
        switch (playerTwo.action) {
          case 1:
            victoryMessage.playerOne.location--;
            victoryMessage.playerTwo.location--;
            break;
          
          case 2:
            victoryMessage.status++;
            break;
          
          case 3:
            victoryMessage.status += 2;
            break;
        }

        default:
          break;
    }
  } else if (distance == 1) {
    if (playerOne.action == 3 && playerTwo.action != 1) {
      victoryMessage.status++;
    }
    if (playerTwo.action == 3 && playerOne.action != 1) {
      victoryMessage.status += 2;
    }
  }

  if (distance < 0) {
    if (playerOne.location > 0) {
      victoryMessage.playerOne.location--;
    }
    if (playerTwo.location > 0) {
      victoryMessage.playerTwo.location--;
    }
  }
  
  if (playerOne.location < 0) {
    victoryMessage.playerOne.location=0;
  }
  if (playerTwo.location < 0) {
    victoryMessage.playerTwo.location=0;
  }

  document.write("<p>Round:: " +victoryMessage.count);
  document.write(" Win:: " +victoryMessage.status);
  document.write(" ||| Player 1 loc: " + victoryMessage.playerOne.location);
  document.write(" act: " + victoryMessage.playerOne.action);
  document.write(" || act: " + victoryMessage.playerTwo.action);
  document.write("  loc: " + victoryMessage.playerTwo.location);
  document.write(" Player 2 ||| D:" + distance + "</p>");
  
  return victoryMessage;
}

function victoryOutput(output) {
  switch (output.status) {
    case 1:
      document.write(output.playerOne.name + " has won!\n" + 
        "Congratulations!! It took " + output.count + " moves before " +
        output.playerTwo.name + " fell."); 
      break;
    case 2:
      document.write(output.playerTwo.name + " has won!\n" + 
        "Congratulations!! It took " + output.count + " moves before " +
        output.playerOne.name + " fell.");
      break;
    default:
      document.write("You both lost!!\nYou killed each other."); 
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