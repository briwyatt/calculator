// test js file is linked to index.html
console.log("hello calculator exercise");

//variables for the inputs where the numbers go.
var inputOne = document.getElementById("inputOne");
var inputTwo = document.getElementById("inputTwo");
var output = document.getElementById("output-target");

// event listeners for each button type
multiply.addEventListener("click", multiplyStuff);
divide.addEventListener("click", divideStuff);
subtract.addEventListener("click", subtractStuff);
add.addEventListener("click", addStuff);

// Create a function that adds two numbers
// passed in as arguments. Return the sum.
function addStuff() {
console.log("do i work add");
    var a = Number(inputOne.value);
    var b = Number(inputTwo.value);
    var addSum = a + b;
    output.innerHTML = addSum;
};

//functions to control the basic operations

// Create a function that subtracts two numbers
// passed in as arguments. Return the difference.
function subtractStuff() {
    console.log("do i work subtract");
    var c = Number(inputOne.value);
    var d = Number(inputTwo.value);
    var subSum = (c - d);
    output.innerHTML = subSum;
};

// Create a function that multiplies two numbers
// passed in as arguments. Return the product.
function multiplyStuff() {
console.log("do i work multiply");
    var e = Number(inputOne.value);
    var f = Number(inputTwo.value);
    var mulSum = (e * f);
    output.innerHTML = mulSum;
};

// Create a function that divides two numbers
// passed in as arguments. Return the quotient.
function divideStuff() {
console.log("do i work divide");
    var g = Number(inputOne.value);
    var h = Number(inputTwo.value);
    var divSum = (g / h);
    output.innerHTML = divSum;
};


// lambda functions with a calculator
// Create a function that accepts three arguments.
//   1. First number
//   2. Second number
//   3. A function that performs an operation on them

// function doMath(a, b, action) {
// }
