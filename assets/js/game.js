// Game States
// "WIN" - Player robot has defeated all enemy-robots
    //* Fight all enemy-robots
    //* Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


//This window prompt opens the game:
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) { 
        // Ask if the player wants to fight or run:
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");  
        
        // If player chooses to skip, confirm and then stop the loop:
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip:
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //If yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // Remove enemy's health by subtracting the amount set in the playerAttack variable:
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // Check enemy's health:
        if (enemyHealth <= 0 ) {
            window.alert(enemyNames[i] + " has died!");

            // Award the player for winnning:
            playerMoney = playerMoney + 20;
            // Leave while() loop if the enemy is dead:
            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        } 

        // Remove player's health by subtracting the amount set in the enemyAttack variable:
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health :
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // Leave while() loop if the player is dead:
            break;

        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    } // End of "while()" loop
}; // End of "fight()" function


// Fight each enemy-robot by looping over them and fighting them one at a time.
for (var i = 0; i < enemyNames.length; i++) {
    // If player is still alive, keep fighting.
    if (playerHealth > 0) {
        // Let the player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        // Pick new enemy to fight based on the index of the enemyNames array:
        var pickedEnemyName = enemyNames[i];
        // Reset enemyHealth before starting new fight:
        enemyHealth = 50;
        // Call fight function with enemy-robot:
        fight(pickedEnemyName);
    }
    // If player is dead, stop the game:
    else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }
} // End of for function