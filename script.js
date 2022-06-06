// AREA OF A TRIANGLE
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

// INTEGER
num1 = prompt("put first integer")
num2 = prompt("put secoond integer")
if (num1 > num2) {
    console.log(num1)
} else {
    console.log("wrong digit")
}

// EVEN AND ODD NUMBERS
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// AREA AND CIRCUMFERENCE OF A CIRCLE
function circle(radius)
{
    this.radius = 4;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));


// GAME ONE
 const selectWinner = (player) => {
    const choices = ["rock", "paper", "scissors"];
    var item = choices[Math.floor(Math.random()*choices.length)];

}



const computerPlay =() => {
    const choices = ["rock", "paper", "scissors"];
  var computer = choices[Math.floor(Math.random() * choices.length)];
  return computer
  
}


const playRound = (player, computer) => {
  if (player=== "rock" && computer === "scissors") {
     return "player wins"
  }

  if (player === "rock" && computer === "paper") {
     return "computer wins"
  }

  if (player === "rock" && computer === "rock") {
   return "its a tie"
  }
// two
    if (player=== "paper" && computer === "scissors") {
     return "computer wins"
  }

  if (player === "paper" && computer === "paper") {
     return "its a tie"
  }

  if (player === "paper" && computer === "rock") {
   return "computer wins"
  }
  // three
      if (player=== "scissors" && computer === "scissors") {
    return "its a tie"
  }

  if (player === "scissors" && computer === "paper") {
     return "player wins"
  }

  if (player === "scissors" && computer === "rock") {
    return "computer wins"
  }
}
let playerSelection = "rock";
playerSelection=(playerSelection.toLowerCase());
const computerSelection = computerPlay();
console.log(`computer has chosen ${computerSelection}`)
console.log(`player has chosen ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));


let computer = 0;
let player = 0;

for(let i= 0; i<5; i++){
  let answer = prompt("kindly enter between rock, paper and scissors")
 console.log(answer)
  const computerSelection = computerPlay();
  console.log(computerSelection)
  let winner = playRound(computerSelection, answer)
  if (winner =="computer wins"){
    computer= computer + 1
  }
if (winner =="player wins"){
  player = player + 1  
}
}
console.log(computer)
console.log(player)

if (computer > player){
  console.log("computer wins") 
}
else if (player >  computer){
    console.log("player wins") 
}else{
    console.log("its a tie") 
}


