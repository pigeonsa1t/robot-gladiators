
var playerName = window.prompt("What is your robot's name?");
//Note the lack of quotation marks around playerName:
console.log(playerName);

//Practice
console.log("this logs a string, good for leaving yourself a message");

//This will do math and log "20":
console.log(10 + 10)

//This will log what is in quotes, and input previously defined playerName:
console.log("Our robot's name is " + playerName);

//This is a function:
function fight() {
    window.alert("The fight has begun!");
}
//And a "call" to function:
fight();

