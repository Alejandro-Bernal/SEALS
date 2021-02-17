// variables
// Dynamically Typed: meaning you can the values of let or var
let firstName = "Kevin";
firstName = "Alejandro";
// Not dynamically typed: you cannot change the values of 
const lastName = "Bernal";
// lastName = "Amin"; // this will give you an error
// console.log("Hello, " + firstName);

// data types
// strings, booleans, undefined, lists/arrays, objects(json), numbers
let isGameRunning = false; // 0 = False, 1 = true 
let number = 10;
let listOfNames = ['alejandro', 'roberto', 'roque']; // list of strings
let listOfNums = [0, 2, 10, 30]; // list of numbers
// Objects should be constant, you do not want an object 
const Person = {
    name: "Alejandro",
    age: 24,
    hi: function () { return 'My name is ' + this.name }
    // We can also give this object a functions, in js objects are 

}

//console.log(Person.hi());

if (isGameRunning) {
    // console.log("The game is running");
} else {
    // console.log("The game is not running");
}

let num1 = 5;
let num2 = 7;
// functions
function addTwo(x, y) {
    // return x + y;
    let total = x + y;
    console.log(total);
}
addTwo(num1, num2);
// console.log(total);

// Dom manipulation
function change() {
    document.getElementById('myImage').src = '../assets/gir2.png';
    console.log('clicked');
}

function getName() {
    // Step 1: determine input variable
    let input = "";
    // Step 2: Get the input from html
    input = document.getElementById("myInput").value;
    // Step 3: Build alertbox
    alert(input);
}

// Loops
// for loop
// List accessed index [0, n]
//console.log(listOfNames[0]);

for (let i = 0; i < 3; i++) {
    // console.log(listOfNames[i]);
}

let i = 0;
while (i < 3) {
    console.log(listOfNames[i]);
    i++;
}

let x = 0;
for (let i = 0; i < 30; i++) {
    x = x + i;
    // console.log(x);
}
console.log(x);
