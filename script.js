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
export const selectWinner = (player) => {
    const choices = ["rock", "paper", "scissors"];
    var item = choices[Math.floor(Math.random()*choices.length)];

}