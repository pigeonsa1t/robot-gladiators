var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Create a function:

var fight = function() {
    
    //Alert players that they are starting the round:
    
    window.alert("Welcome to Robot Gladiators!");
     
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

    //Log a resulting message to the console so we know that it worked.

    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

    //Log a resulting message to the console so we know that it worked.
};

//Execute a function:
fight();

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

//Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining "
);

//Check enemie's health 
if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
}
else  {
    window.alert(enemyNAme + " still has " + enemyHealth + " health leaft ");
}

enemyHealth - playerAttack;

//Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

//Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + " playerName " + " now has " + playerHealth + " health remaining "
);

var playerHealth = 100;

//Check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

var playerHealth = 10;

if (playerHealth === 0) {
    console.log("This will not run.");
}
else {
    console.log("This will run instead");
}