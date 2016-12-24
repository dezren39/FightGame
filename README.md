Title: Fight Game
Author: Drewry Pope
Date: 12/22/2016
Version: 1.01
Description: This is a simple game ran with javascript prompts and w/ basic
             ouput displayed of the game's status. It can be played with one
             or two players and is based around 5 moves:
             Evade, Parry, Punch, Stab, and Slash.
---
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
---
