//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero

//This window prompt opens the game:
var playerName = window.prompt("What is your robot's name?");

// Declare the important variables/characters first:
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

    //**// Declare each enemy-robot's name:
        //var enemy1 = "Roborto";
        //var enemy2 = "Amy Android";
        //var enemy3 = "Robo Trumble";
        //etc...
 
    //**// Or create an array:
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    //**// Type the above once with each name...
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) { enemyName = "any" }
    // Alert players that they are starting the round:
    while(enemyHealth > 0) {
        // window.alert("Welcome to Robot Gladiators!");
    // Ask if the player wants to fight or run:
    var promptFight = window.prompt(
        "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
        );
    }
    //**// And then you can prove it works with console logs:
        // console.log(enemyNames);
        // console.log(enemyNames[0]);
        // console.log(enemyNames[1]);
        // onsole.log(enemyNames[2]);
    //**// Note that enemyName here is the arbitrarily named parameter 
        // that is used by the function, and is not a reference to the 
        // previous enemyName variable used earlier in our code.


    // If player choses to fight, then fight:
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // Remove enemy's health by subtracting the amount set in the playerAttack variable:
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health:
        if (enemyHealth <= 0 ) {
            window.alert(enemyNames[i] + " has died!");
        } else {
            window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
        if (enemyHealth > 0) // if the enemy-robot has health points, continue fighting

        // Remove player's health by subtracting the amount set in the enemyAttack variable:
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health :
        if (playerHealth <= 0 ) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + "health left.");
        }

    // If player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //If yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        
        //Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        
        //If no (false), ask question again by running fight() again
        fight();
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// Run fight function to start game:
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]); {
        debugger;
// Call fight function with enemy-robot
        fight(enemyNames[i]);
    };
}