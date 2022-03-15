// player stats:
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// you can also log multiple values at once like this:
// enemies stats:
// console.log(playerName, playerAttack, playerHealth);

// array:
var enemyNames[i] = ["Roborto", "Amy Android", "Robo Trumble"];          
var enemyHealth = 50;
var enemyAttack = 12;
 
// ***FIGHT FUNCTION START** 
var fight = function(enemyName) { //***arbitrary label
//    * window.alert("Welcome to Robot Gladiators!")
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");    
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames[i] + " has died!");
  } else {
    window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
  // remove players's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
    console.log(enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
  }// check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // ask player if they want to quit:
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    } else {
      fight();
    }} else {
    window.alert("You need to pick a valid option. Try again!");
}};
// ***FIGHT FUNCTION END*

for (var i = 0; i < enemyNames[i].length; i++) {
  fight(enemyNames[i][i]);
}


//  We can actually use the iterator in the for loop to map to an 
//   array's index. This allows us to iterate through an array, 
//   element by element, index by index.

// run fight function to start game:
//    * fight();

//   console.log(enemyNames[i][i]);
//   console.log(i);
//   console.log(enemyNames[i][i] + " is at " + i + " index");
