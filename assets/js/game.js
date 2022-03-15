// player stats:
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy stats:
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];  // array:        
var enemyHealth = 50;
var enemyAttack = 12;

// ***FIGHT FUNCTION START** 
// WHILE LOOP:
while (enemyHealth > 0) {
var fight = function(enemyName) { 
  // FIGHT or SKIP? 
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'); {
    // Fight:
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");    
      } 
      else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } 
        else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
      }
    } // Skip:
    if (promptFight === "skip" || promptFight === "SKIP") {
      // ask player if they want to quit:
      var confirmSkip = window.confirm("Are you sure you'd like to quit?"); {
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playerMoney = playerMoney - 2;
        } 
        else {
          fight()
        }
      }
    } // Otherwise:
    else {
      window.alert("You need to pick a valid option. Try again!");
    }
  }
}};
// ***FIGHT FUNCTION END*

// FOR LOOP:
for (var i = 0; i < enemyNames.length; i++) {
  fight()
}
fight()